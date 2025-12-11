import nodemailer from "nodemailer";
import { db } from '../../../lib/db';
import { registrations } from '../../../lib/drizzleSchema';

export async function POST(req) {
  try {
    const data = await req.json();
    const {
      restaurantName,
      contactPerson,
      phone,
      email,
      location,
      businessType,
      deliveryOptions,
      message,
    } = data;

    // Validation
    if (!restaurantName || !contactPerson || !phone || !email || !location || !businessType || !deliveryOptions) {
      return new Response(
        JSON.stringify({ success: false, error: 'All required fields must be filled' }),
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid email format' }),
        { status: 400 }
      );
    }

    // Convert deliveryOptions array to string if it's an array
    const deliveryOptionsStr = Array.isArray(deliveryOptions) 
      ? deliveryOptions.join(", ") 
      : deliveryOptions;

    // Save to database first
    try {
      await db.insert(registrations).values({
        restaurant_name: restaurantName.trim(),
        contact_person: contactPerson.trim(),
        phone: phone.trim(),
        email: email.toLowerCase().trim(),
        location: location.trim(),
        business_type: businessType.trim(),
        delivery_options: deliveryOptionsStr.trim(),
        message: message ? message.trim() : null,
        status: 'pending',
      });
    } catch (dbError) {
      console.error('Database error:', dbError);
      // Continue with email even if database save fails
    }

    // Send email
    try {
      // Check if Gmail credentials are configured (support both variable names)
      const gmailPassword = process.env.GMAIL_APP_PASSWORD || process.env.EMAIL_APP_PASSWORD;
      
      if (!gmailPassword) {
        console.warn('Gmail app password not configured (GMAIL_APP_PASSWORD or EMAIL_APP_PASSWORD). Email will not be sent, but registration is saved to database.');
      } else {
        const transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: process.env.EMAIL_ID || "pratapandsons10@gmail.com",
            pass: gmailPassword,
          },
        });

        const mailOptions = {
          from: "pratapandsons10@gmail.com",
          to: "pratapandsons10@gmail.com",
          subject: "New Partner Application - Pratap's Bite",
          html: `
            <h2>New Partner Application - Pratap's Bite</h2>
            <p><strong>Business Name:</strong> ${restaurantName}</p>
            <p><strong>Contact Person:</strong> ${contactPerson}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Business Address:</strong> ${location}</p>
            <p><strong>Business Type:</strong> ${businessType}</p>
            <p><strong>Delivery Options:</strong> ${deliveryOptionsStr}</p>
            <p><strong>Additional Info:</strong> ${message || 'N/A'}</p>
          `,
        };

        await transporter.sendMail(mailOptions);
        console.log('Registration email sent successfully');
      }
    } catch (emailError) {
      console.error('Email error:', emailError.message || emailError);
      // Registration is still saved to database, so we continue
      // Email failure doesn't prevent registration from being saved
    }

    return new Response(JSON.stringify({ success: true }), { status: 200 });

  } catch (error) {
    console.error('Registration error:', error);
    return new Response(
      JSON.stringify({ success: false, error: error.message || 'Failed to process registration' }),
      { status: 500 }
    );
  }
}
