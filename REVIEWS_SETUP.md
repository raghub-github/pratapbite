# Reviews Feature Setup Guide

This guide will help you set up the reviews/feedback feature with star ratings.

## Prerequisites

1. **Supabase Account**: You need a Supabase project with PostgreSQL database
2. **Environment Variables**: Configure the following in your `.env.local` file

## Step 1: Database Setup

### Option A: Using Supabase SQL Editor (Recommended)

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Run the SQL migration file: `migrations/create_reviews_table.sql`

### Option B: Manual Table Creation

Run this SQL in your Supabase SQL Editor:

```sql
CREATE TABLE IF NOT EXISTS reviews (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  stars INTEGER NOT NULL CHECK (stars >= 1 AND stars <= 5),
  review VARCHAR(2000) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

CREATE UNIQUE INDEX IF NOT EXISTS email_idx ON reviews(email);
```

## Step 2: Environment Variables

Add the following to your `.env.local` file:

```env
# Supabase API Configuration (for client-side)
NEXT_PUBLIC_SUPABASE_URL=https://your-project-ref.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Database Connection String (for server-side Drizzle ORM)
# Get this from Supabase Dashboard > Settings > Database > Connection string
# Format: postgresql://postgres.[PROJECT-REF]:[PASSWORD]@aws-0-[PROJECT-REF].pooler.supabase.com:6543/postgres
DATABASE_URL=postgresql://postgres.[PROJECT-REF]:[PASSWORD]@aws-0-[PROJECT-REF].pooler.supabase.com:6543/postgres
```

### How to Get DATABASE_URL:

1. Go to Supabase Dashboard
2. Navigate to **Settings** > **Database**
3. Under **Connection string**, select **URI**
4. Copy the connection string
5. Replace `[YOUR-PASSWORD]` with your database password
6. Use the **Connection pooling** mode (port 6543) for better performance

**Important**: 
- Use port **6543** (connection pooling) for server-side connections
- Use port **5432** (direct connection) only if pooling doesn't work
- Never commit your `.env.local` file to version control

## Step 3: Verify Installation

1. Make sure all dependencies are installed:
   ```bash
   npm install
   ```

2. Start your development server:
   ```bash
   npm run dev
   ```

3. Navigate to:
   - Home page: `http://localhost:3000` (reviews section above footer)
   - Reviews page: `http://localhost:3000/reviews` (all reviews with form)

## Features

### ✅ Implemented Features

1. **Star Rating System**
   - Interactive 5-star rating component
   - Visual feedback on hover
   - Read-only mode for displaying reviews

2. **Review Submission**
   - Form validation (name, email, stars, review text)
   - One review per email enforcement (database-level unique constraint)
   - Character limits and validation
   - Success/error messaging

3. **Home Page Display**
   - Shows latest 5 reviews in a carousel
   - Displays 3 reviews at a time with next/previous navigation
   - Link to view all reviews

4. **Reviews Page**
   - Shows all reviews in a grid layout
   - Review submission form
   - Responsive design

5. **Database Schema**
   - Unique email constraint (one review per email)
   - Star rating validation (1-5 stars)
   - Timestamps for review creation
   - Proper indexing for performance

## API Endpoints

### GET `/api/reviews`
Fetch all reviews (optionally with pagination)

**Query Parameters:**
- `limit` (optional): Number of reviews to return
- `offset` (optional): Number of reviews to skip

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "stars": 5,
      "review": "Great service!",
      "created_at": "2024-01-01T00:00:00Z"
    }
  ]
}
```

### POST `/api/reviews`
Submit a new review

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "stars": 5,
  "review": "Great service!"
}
```

**Response (Success):**
```json
{
  "success": true,
  "message": "Review submitted successfully!"
}
```

**Response (Error):**
```json
{
  "success": false,
  "error": "You have already submitted a review. Each email can only submit one review."
}
```

## Troubleshooting

### Database Connection Issues

If you encounter connection errors:

1. **Check DATABASE_URL format**: Make sure it's a valid PostgreSQL connection string
2. **Verify password**: Ensure the password in the connection string is correct
3. **Check network**: Ensure your IP is allowed in Supabase dashboard (Settings > Database > Connection pooling)
4. **Use connection pooling**: Prefer port 6543 over 5432 for better reliability

### Unique Constraint Violations

If you see "already submitted a review" errors:
- This is expected behavior - each email can only submit one review
- The constraint is enforced at both application and database levels

### Migration Issues

If the table already exists with a different structure:
1. Drop the existing table (if safe to do so)
2. Run the migration SQL again
3. Or manually alter the table to match the schema

## Security Notes

1. **Environment Variables**: Never commit `.env.local` to version control
2. **Database Password**: Keep your database password secure
3. **Rate Limiting**: Consider adding rate limiting for production
4. **Input Sanitization**: All inputs are validated and sanitized on the server

## Next Steps

- Add admin panel to manage reviews
- Add review moderation features
- Add review helpfulness voting
- Add review replies/response feature
- Add analytics for review trends

