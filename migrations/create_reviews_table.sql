-- Create reviews table for Supabase PostgreSQL
-- Run this migration in your Supabase SQL editor or via psql

CREATE TABLE IF NOT EXISTS reviews (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(255) NOT NULL,
  stars INTEGER NOT NULL CHECK (stars >= 1 AND stars <= 5),
  review VARCHAR(2000) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW() NOT NULL
);

-- Create unique index on email to enforce one review per email
CREATE UNIQUE INDEX IF NOT EXISTS email_idx ON reviews(email);

-- Add comment to table
COMMENT ON TABLE reviews IS 'User reviews and feedback with star ratings';


