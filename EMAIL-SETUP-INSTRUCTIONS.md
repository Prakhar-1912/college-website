# 📧 Email Setup Instructions - Quick Start

## ✅ What's Done

I've successfully implemented **Nodemailer with Gmail** for your contact form. Here's what was set up:

- ✅ Installed Nodemailer (FREE library)
- ✅ Updated contact API route to use Gmail
- ✅ Fixed the previous error (`createTransporter` → `createTransport`)
- ✅ Created `.env.local` file for your credentials
- ✅ Added beautiful HTML email templates
- ✅ Sends 2 emails: one to college, one confirmation to user

## 🎯 What You Need to Do Now

### Step 1: Get Your Gmail App Password (5 minutes)

Follow the detailed instructions in: **`GMAIL-SETUP.md`**

**Quick steps:**
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password
3. Copy the 16-character password

### Step 2: Add Your Credentials

Open the `.env.local` file in the project root and update these 3 values:

```env
EMAIL_USER=your-college-email@gmail.com
EMAIL_PASSWORD=your-16-char-app-password
COLLEGE_EMAIL=info@krmcollege.edu.in
```

**Example:**
```env
EMAIL_USER=krdcollege2024@gmail.com
EMAIL_PASSWORD=abcd efgh ijkl mnop
COLLEGE_EMAIL=info@krmcollege.edu.in
```

### Step 3: Restart the Server

In your terminal:
1. Press `Ctrl+C` to stop the current server
2. Run: `npm run dev`
3. Wait for "Ready" message

### Step 4: Test It!

1. Go to: http://localhost:3000/contact
2. Fill out the form
3. Click "Send Message"
4. Check your email at `COLLEGE_EMAIL`

## 💰 Cost

**100% FREE!** ✅
- No credit card required
- No subscriptions
- Gmail allows 500 emails/day (plenty for a college website)

## 📝 How It Works

```
User fills form → Submit → Nodemailer → Gmail → 2 emails sent
                                         ├─→ College gets inquiry
                                         └─→ User gets confirmation
```

## 🆘 Troubleshooting

### Error: "Email service is not configured"
- Check `.env.local` exists and has `EMAIL_USER` and `EMAIL_PASSWORD`
- Restart the dev server

### Error: "Username and Password not accepted"
- Make sure you're using an **App Password**, not your Gmail password
- Verify 2-Factor Authentication is enabled
- Generate a new App Password

### Emails not arriving
- Check spam/junk folder
- Verify `COLLEGE_EMAIL` is correct
- Look at terminal for error messages

## 📚 Full Documentation

- **Detailed Setup**: See `GMAIL-SETUP.md`
- **Code**: See `src/app/api/contact/route.ts`
- **Environment Variables**: See `.env.example`

## ⚡ Quick Test

Once you add your credentials, test with:
- Name: Test User
- Email: your-test-email@gmail.com
- Phone: 1234567890
- Subject: Test
- Message: Testing contact form

You should receive 2 emails within seconds!

---

**Need Help?** Check the terminal for detailed error messages or open `GMAIL-SETUP.md` for step-by-step instructions.
