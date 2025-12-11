import { NextResponse } from 'next/server';
import { db } from '../../../lib/db';
import { reviews } from '../../../lib/drizzleSchema';
import { eq } from 'drizzle-orm';
import { desc } from 'drizzle-orm';

export async function GET(req) {
  try {
    // Get query parameters for pagination
    const { searchParams } = new URL(req.url);
    const limitParam = searchParams.get('limit');
    const offsetParam = searchParams.get('offset');
    const limit = limitParam ? parseInt(limitParam) : null;
    const offset = offsetParam ? parseInt(offsetParam) : 0;

    let allReviews;
    
    if (limit) {
      allReviews = await db
        .select()
        .from(reviews)
        .orderBy(desc(reviews.created_at))
        .limit(limit)
        .offset(offset);
    } else {
      allReviews = await db
        .select()
        .from(reviews)
        .orderBy(desc(reviews.created_at));
    }

    return NextResponse.json({ success: true, data: allReviews });
  } catch (error) {
    console.error('Error fetching reviews:', error);
    
    // Handle table doesn't exist error
    if (error.code === '42P01' || error.message?.includes('does not exist') || error.cause?.message?.includes('does not exist')) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Database table not found. Please run the migration SQL to create the reviews table. See migrations/create_reviews_table.sql or check REVIEWS_SETUP.md for instructions.',
          data: []
        },
        { status: 500 }
      );
    }
    
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to fetch reviews' },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const { name, email, stars, review } = await req.json();

    // Validation
    if (!name || !email || !stars || !review) {
      return NextResponse.json(
        { success: false, error: 'All fields are required' },
        { status: 400 }
      );
    }

    if (stars < 1 || stars > 5) {
      return NextResponse.json(
        { success: false, error: 'Stars must be between 1 and 5' },
        { status: 400 }
      );
    }

    if (name.trim().length < 2 || name.trim().length > 100) {
      return NextResponse.json(
        { success: false, error: 'Name must be between 2 and 100 characters' },
        { status: 400 }
      );
    }

    if (review.trim().length < 10 || review.trim().length > 2000) {
      return NextResponse.json(
        { success: false, error: 'Review must be between 10 and 2000 characters' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if review exists for this email (case-insensitive)
    const existing = await db
      .select()
      .from(reviews)
      .where(eq(reviews.email, email.toLowerCase().trim()));

    if (existing.length > 0) {
      return NextResponse.json(
        { success: false, error: 'You have already submitted a review. Each email can only submit one review.' },
        { status: 400 }
      );
    }

    // Insert new review
    await db.insert(reviews).values({
      name: name.trim(),
      email: email.toLowerCase().trim(),
      stars: parseInt(stars),
      review: review.trim(),
    });

    return NextResponse.json({ success: true, message: 'Review submitted successfully!' });
  } catch (error) {
    console.error('Error submitting review:', error);
    
    // Handle table doesn't exist error
    if (error.code === '42P01' || error.message?.includes('does not exist') || error.cause?.message?.includes('does not exist')) {
      return NextResponse.json(
        { 
          success: false, 
          error: 'Database table not found. Please run the migration SQL to create the reviews table. See migrations/create_reviews_table.sql or check REVIEWS_SETUP.md for instructions.' 
        },
        { status: 500 }
      );
    }
    
    // Handle unique constraint violation
    if (error.code === '23505' || error.message?.includes('unique')) {
      return NextResponse.json(
        { success: false, error: 'You have already submitted a review. Each email can only submit one review.' },
        { status: 400 }
      );
    }

    return NextResponse.json(
      { success: false, error: error.message || 'Failed to submit review. Please try again later.' },
      { status: 500 }
    );
  }
}
