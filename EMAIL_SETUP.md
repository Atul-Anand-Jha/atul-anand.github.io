# Email Configuration Guide

This document explains how to set up email functionality for the contact form in your portfolio.

## Current Status

The contact form is currently configured with a simulation mode that logs form submissions to the console. To enable actual email sending, you need to choose one of the options below.

## Option 1: Web3Forms (Recommended for Static Sites)

Web3Forms is a reliable service for handling form submissions on static websites.

### Setup Steps:

1. **Sign up for Web3Forms**
   - Go to [web3forms.com](https://web3forms.com)
   - Create a free account
   - Get your access key

2. **Update the Contact Component**
   - Open `src/components/Contact.tsx`
   - Replace `'YOUR_WEB3FORMS_ACCESS_KEY'` with your actual access key
   - Uncomment the fetch call in the `handleSubmit` function:

```typescript
const response = await fetch('https://api.web3forms.com/submit', {
  method: 'POST',
  body: submitData
})

if (!response.ok) {
  throw new Error('Failed to send message')
}
```

3. **Remove the simulation code**
   - Remove the `await new Promise(resolve => setTimeout(resolve, 2000))` line
   - Remove the console.log statement

### Benefits:
- ✅ Works with static sites
- ✅ No server required
- ✅ Reliable delivery
- ✅ Free tier available
- ✅ Spam protection

## Option 2: EmailJS

EmailJS allows sending emails directly from the client-side.

### Setup Steps:

1. **Install EmailJS** (already installed)
   ```bash
   npm install @emailjs/browser
   ```

2. **Set up EmailJS account**
   - Go to [emailjs.com](https://www.emailjs.com)
   - Create account and email service
   - Create email template
   - Get your service ID, template ID, and public key

3. **Update the Contact Component**
   - Replace the Web3Forms code with EmailJS code:

```typescript
import emailjs from '@emailjs/browser'

// In handleSubmit function:
await emailjs.send(
  'YOUR_SERVICE_ID',
  'YOUR_TEMPLATE_ID',
  {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject || 'Portfolio Contact Form',
    message: formData.message,
    to_email: 'atulanand.jha@gmail.com'
  },
  'YOUR_PUBLIC_KEY'
)
```

## Option 3: Serverless Functions (Advanced)

For more control, you can use serverless functions with Netlify, Vercel, or other providers.

### For Netlify:
- Use the function in `netlify/functions/send-email.ts`
- Set up environment variables:
  - `EMAIL_USER`: Your Gmail address
  - `EMAIL_PASS`: Your Gmail App Password

### For Vercel:
- Move the function to `api/send-email.ts`
- Deploy with environment variables

## Option 4: Form Services

Alternative form handling services:
- **Formspree** (formspree.io)
- **Netlify Forms** (if hosted on Netlify)
- **Getform** (getform.io)

## Environment Variables

If using serverless functions, create a `.env.local` file:

```
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
WEB3FORMS_ACCESS_KEY=your-access-key
```

⚠️ **Never commit sensitive data to Git!**

## Testing

1. **Local Testing**: Forms will show success messages but won't send actual emails
2. **Production Testing**: Once configured, test with a real submission
3. **Error Handling**: Check browser console for any errors

## Security Considerations

- Use environment variables for sensitive data
- Implement rate limiting if possible
- Add CAPTCHA for spam protection
- Validate input on both client and server

## Current Demo Behavior

The form currently:
1. Validates required fields
2. Shows loading state for 2 seconds
3. Logs submission data to console
4. Shows success message
5. Resets the form

Choose your preferred option above to enable actual email sending!
