# Quick Setup - Create Reviews Table

## The Issue
You're getting this error: `relation "reviews" does not exist`

This means the database table hasn't been created yet. Follow these steps:

## Step 1: Open Supabase SQL Editor

1. Go to your Supabase Dashboard: https://supabase.com/dashboard
2. Select your project
3. Click on **SQL Editor** in the left sidebar

## Step 2: Run the Migration SQL

Copy and paste this SQL into the SQL Editor and click **Run**:

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

## Step 3: Verify Table Creation

After running the SQL, you should see a success message. You can verify by:

1. Going to **Table Editor** in Supabase
2. You should see the `reviews` table listed

## Step 4: Test Your Application

1. Go back to your Next.js app
2. Try submitting a review again
3. It should work now!

## Alternative: Using the Migration File

The SQL is also available in `migrations/create_reviews_table.sql` - you can copy the contents from there.

