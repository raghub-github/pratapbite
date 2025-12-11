# Registrations Database Setup

## Overview
Registration details from the contact form are now saved to Supabase in addition to being sent via email.

## Step 1: Create the Registrations Table

### Option A: Using Supabase SQL Editor (Recommended)

1. Go to your Supabase Dashboard
2. Navigate to **SQL Editor**
3. Run the SQL migration file: `migrations/create_registrations_table.sql`

### Option B: Manual Table Creation

Run this SQL in your Supabase SQL Editor:

```sql
CREATE TABLE IF NOT EXISTS registrations (
  id SERIAL PRIMARY KEY,
  restaurant_name VARCHAR(255) NOT NULL,
  contact_person VARCHAR(255) NOT NULL,
  phone VARCHAR(50) NOT NULL,
  email VARCHAR(255) NOT NULL,
  location VARCHAR(500) NOT NULL,
  business_type VARCHAR(100) NOT NULL,
  delivery_options VARCHAR(255) NOT NULL,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL,
  status VARCHAR(50) DEFAULT 'pending' NOT NULL
);

CREATE INDEX IF NOT EXISTS registrations_email_idx ON registrations(email);
CREATE INDEX IF NOT EXISTS registrations_status_idx ON registrations(status);
CREATE INDEX IF NOT EXISTS registrations_created_at_idx ON registrations(created_at DESC);
```

## Step 2: Verify Setup

After creating the table:

1. Submit a test registration through the contact form
2. Check Supabase Table Editor - you should see the new registration
3. Check your email - you should still receive the email notification

## Features

### ✅ What's Saved to Database

- Business Name
- Contact Person
- Phone Number
- Email Address
- Business Address/Location
- Business Type
- Delivery Options
- Additional Message (optional)
- Timestamp (auto-generated)
- Status (defaults to 'pending')

### ✅ Dual Storage

- **Database**: All registrations are saved to Supabase for easy management
- **Email**: Admin still receives email notifications
- **Error Handling**: If email fails, registration is still saved to database

## Database Schema

| Column | Type | Description |
|--------|------|-------------|
| id | SERIAL | Primary key, auto-increment |
| restaurant_name | VARCHAR(255) | Business/restaurant name |
| contact_person | VARCHAR(255) | Contact person name |
| phone | VARCHAR(50) | Phone number |
| email | VARCHAR(255) | Email address |
| location | VARCHAR(500) | Business address |
| business_type | VARCHAR(100) | Type of business |
| delivery_options | VARCHAR(255) | Delivery preference |
| message | TEXT | Additional information |
| created_at | TIMESTAMP | Registration timestamp |
| status | VARCHAR(50) | Status (pending, approved, rejected, etc.) |

## Status Field

The `status` field defaults to `'pending'` and can be updated manually in Supabase:
- `pending` - New registration (default)
- `approved` - Registration approved
- `rejected` - Registration rejected
- `contacted` - Admin has contacted the applicant
- `onboarded` - Successfully onboarded

## Viewing Registrations

You can view all registrations in Supabase:
1. Go to **Table Editor**
2. Select the `registrations` table
3. View, filter, and manage all partner applications

## API Endpoint

The registration form submits to: `POST /api/contact`

**Request Body:**
```json
{
  "restaurantName": "Example Restaurant",
  "contactPerson": "John Doe",
  "phone": "1234567890",
  "email": "john@example.com",
  "location": "123 Main St, City",
  "businessType": "Restaurant",
  "deliveryOptions": "Our Delivery Fleet",
  "message": "Additional information"
}
```

**Response:**
```json
{
  "success": true
}
```

## Troubleshooting

### Table Already Exists
If you see an error that the table already exists, that's okay - the migration uses `CREATE TABLE IF NOT EXISTS`.

### Email Not Sending
If email fails but database save succeeds, the registration is still saved. Check:
- `GMAIL_APP_PASSWORD` environment variable is set
- Gmail app password is correct
- Network connectivity

### Database Save Fails
If database save fails but email succeeds, you'll still receive the email. Check:
- `DATABASE_URL` environment variable is set correctly
- Database connection is working
- Table exists in Supabase

