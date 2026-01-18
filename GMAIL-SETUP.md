# Gmail Email Service Setup Guide (Using Nodemailer)

This guide will help you set up Gmail with Nodemailer for the contact form email functionality. **This is completely FREE!**

## Prerequisites

You need a Gmail account. If you don't have one, create one at [gmail.com](https://gmail.com).

## Setup Steps

### Step 1: Enable 2-Factor Authentication on Your Gmail Account

Google requires 2-Factor Authentication to generate App Passwords.

1. Go to your Google Account: [myaccount.google.com](https://myaccount.google.com)
2. Click on **Security** in the left sidebar
3. Scroll down to **How you sign in to Google**
4. Click on **2-Step Verification**
5. Follow the prompts to set up 2-Factor Authentication (you'll need your phone)
6. Once enabled, you'll see "2-Step Verification is on"

### Step 2: Create an App Password

An App Password is a 16-character code that lets the college website send emails through your Gmail account.

1. Go to your Google Account: [myaccount.google.com](https://myaccount.google.com)
2. Click on **Security** in the left sidebar
3. Scroll down to **How you sign in to Google**
4. Click on **2-Step Verification** (you should see it's already "On")
5. Scroll down to the bottom and click on **App passwords**
   - If you don't see this option, make sure 2-Step Verification is enabled
6. You may need to sign in again
7. In the "Select app" dropdown, choose **Mail**
8. In the "Select device" dropdown, choose **Other (Custom name)**
9. Enter a name like: **College Website Contact Form**
10. Click **Generate**
11. Google will show you a 16-character password (like: `abcd efgh ijkl mnop`)
12. **Copy this password immediately** - you won't be able to see it again!

### Step 3: Configure Environment Variables

Open the `.env.local` file in the project root and update it with your Gmail credentials:

```env
# Gmail Configuration for Nodemailer
EMAIL_USER=your-college-email@gmail.com
EMAIL_PASSWORD=abcdefghijklmnop

# College Email (where contact form submissions will be sent)
COLLEGE_EMAIL=info@krmcollege.edu.in
```

**Example:**
```env
EMAIL_USER=krdcollege2024@gmail.com
EMAIL_PASSWORD=xyzw abcd efgh ijkl
COLLEGE_EMAIL=info@krmcollege.edu.in
```

**Important Notes:**
- `EMAIL_USER`: Your full Gmail address (e.g., `yourname@gmail.com`)
- `EMAIL_PASSWORD`: The 16-character App Password (with or without spaces is fine)
- `COLLEGE_EMAIL`: The email address where you want to receive contact form submissions

### Step 4: Restart the Development Server

After updating `.env.local`, restart your Next.js development server:

```bash
# In the terminal, press Ctrl+C to stop the server
# Then restart it:
npm run dev
```

### Step 5: Test the Contact Form

1. Go to the Contact page: [http://localhost:3000/contact](http://localhost:3000/contact)
2. Fill in the form with test data
3. Submit the form
4. Check:
   - An email should arrive at `COLLEGE_EMAIL` with the contact form details
   - A confirmation email should be sent to the user's email address

## Troubleshooting

### Error: "Email service is not configured"
**Solution:**
- Make sure `EMAIL_USER` and `EMAIL_PASSWORD` are set in `.env.local`
- Check there are no extra spaces or quotes around the values
- Restart the development server with `npm run dev`

### Error: "Invalid login: 535-5.7.8 Username and Password not accepted"
**Solution:**
- Make sure you're using an App Password, not your regular Gmail password
- Verify 2-Factor Authentication is enabled on your Gmail account
- Generate a new App Password and try again
- Make sure the email address is correct

### Error: "Less secure app access"
**Solution:**
- Google has deprecated "Less secure apps" - you MUST use an App Password
- Follow Step 1 and Step 2 above to create an App Password

### Emails not being received
**Solution:**
- Check your spam/junk folder
- Verify the `COLLEGE_EMAIL` is correct in `.env.local`
- Check the terminal/console for error messages
- Make sure the Gmail account isn't over quota

### Rate Limiting / Too many emails
**Solution:**
- Gmail has a limit of approximately **500 emails per day**
- If you expect more submissions, consider using a professional email service
- For a college contact form, 500/day should be more than enough

## Security Best Practices

- ⚠️ **Never commit `.env.local` to git** (it's already in `.gitignore`)
- Keep your App Password secure and don't share it
- If the App Password is compromised, revoke it and generate a new one
- Use a dedicated Gmail account for the website (not your personal account)
- Regularly monitor the email account for suspicious activity

## Gmail Sending Limits

**Free Gmail Account:**
- **500 emails per day** (across all apps using this account)
- Limit resets every 24 hours
- If exceeded, you'll get a temporary sending block

For a college contact form, this should be plenty unless you receive hundreds of submissions daily.

## Alternative Setup (If You Have Issues)

If Gmail isn't working, you can also use:

1. **Outlook/Hotmail** (Free)
   ```env
   EMAIL_USER=yourname@outlook.com
   EMAIL_PASSWORD=your-app-password
   ```
   Change the service in the code to: `service: 'hotmail'`

2. **Custom SMTP Server**
   If your college has an email server, you can use custom SMTP settings.

## How It Works

1. User fills out the contact form on your website
2. Form data is sent to `/api/contact` endpoint
3. Nodemailer connects to Gmail using your App Password
4. Two emails are sent:
   - One to `COLLEGE_EMAIL` with the contact details
   - One confirmation email to the user
5. User sees a success message

---

**Need help?** If you encounter any issues, check the browser console and terminal for detailed error messages.

**Cost:** 100% FREE! ✅
