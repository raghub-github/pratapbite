# Complete Setup Guide - Reviews Feature

## ✅ Current Status

**Issue Found**: The `reviews` table does not exist in your Supabase database.

**Solution**: You need to create the table. Three methods are available:

---

## Method 1: Automated Script (Easiest) ⚡

Run this command in your terminal:

```bash
npm run create-reviews-table
```

This will:
- ✅ Connect to your database
- ✅ Create the reviews table automatically
- ✅ Verify the table was created
- ✅ Show you the table structure

**Note**: Make sure your `.env.local` file has `DATABASE_URL` set (which it does).

---

## Method 2: Supabase SQL Editor (Manual) 📝

1. Go to [Supabase Dashboard](https://supabase.com/dashboard)
2. Select your project
3. Click **SQL Editor** in the left sidebar
4. Copy and paste this SQL:

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

5. Click **Run**
6. Verify in **Table Editor** that the `reviews` table exists

---

## Method 3: Check Database Status API 🔍

After creating the table, you can verify it exists by visiting:

```
http://localhost:3000/api/reviews/check-db
```

This will show you:
- ✅ If the table exists
- ✅ Table structure/columns
- ✅ Connection status

---

## Verification Checklist

After creating the table, verify:

- [ ] Table exists (check via Supabase Table Editor or API)
- [ ] Can access `/api/reviews/check-db` endpoint
- [ ] Can submit a review via the form
- [ ] Reviews appear on the home page
- [ ] Reviews appear on `/reviews` page

---

## Troubleshooting

### If the script fails:

1. **Check DATABASE_URL**: Verify it's set in `.env.local`
2. **Check connection**: Make sure your Supabase database is accessible
3. **Check permissions**: Ensure your database user has CREATE TABLE permissions

### If you get connection errors:

1. Verify `DATABASE_URL` format is correct
2. Check if your IP is allowed in Supabase (Settings > Database)
3. Try using port 6543 (connection pooling) instead of 5432

---

## Next Steps

Once the table is created:

1. ✅ Restart your Next.js dev server (if needed)
2. ✅ Try submitting a review
3. ✅ Check the reviews page to see your review
4. ✅ Verify reviews appear on the home page carousel

---

## Files Reference

- **Migration SQL**: `migrations/create_reviews_table.sql`
- **Setup Script**: `scripts/create-table.js`
- **Database Check API**: `app/api/reviews/check-db/route.js`
- **Full Setup Guide**: `REVIEWS_SETUP.md`

