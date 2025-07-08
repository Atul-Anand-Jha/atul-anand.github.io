# Secure Contact Form Setup Guide

This guide shows you how to set up the contact form securely without exposing API keys in your public repository.

## 🔒 Security-First Approach

Your contact form is now configured to use environment variables, keeping your API keys secure.

## Setup Options

### Option 1: Web3Forms with Environment Variables (Recommended)

#### Step 1: Get Web3Forms Access Key
1. Go to [web3forms.com](https://web3forms.com)
2. Create a free account
3. Create a new form
4. Copy your access key

#### Step 2: Create Environment File
1. Copy the example file:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` and replace the placeholder:
   ```
   NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY=your_actual_access_key_here
   ```

#### Step 3: Deploy with Environment Variables

**For GitHub Pages (Static):**
- Environment variables don't work with static sites
- See Option 2 or 3 below for GitHub Pages

**For Vercel:**
1. Go to your Vercel project settings
2. Add environment variable: `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
3. Set the value to your Web3Forms access key

**For Netlify:**
1. Go to Site settings > Environment variables
2. Add `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`
3. Set the value to your Web3Forms access key

### Option 2: Netlify Forms (Free & Secure)

If you deploy to Netlify, you can use Netlify Forms which requires no API keys:

1. Add `netlify` attribute to your form:
   ```html
   <form netlify name="contact" onSubmit={handleSubmit}>
   ```

2. Add a hidden input:
   ```html
   <input type="hidden" name="form-name" value="contact" />
   ```

3. Submit directly to Netlify (no API calls needed)

### Option 3: GitHub Pages + Formspree

For GitHub Pages deployment, use Formspree:

1. Go to [formspree.io](https://formspree.io)
2. Create a free account
3. Get your form endpoint
4. Update the form to POST to that endpoint

## 🚫 What NOT to Do

- ❌ Never put API keys directly in your code
- ❌ Never commit `.env.local` files to git
- ❌ Never expose API keys in client-side code for static sites

## ✅ Best Practices

- ✅ Use environment variables for server-side apps
- ✅ Use serverless functions for API key handling
- ✅ Use form services that don't require client-side keys
- ✅ Always use `.gitignore` to exclude sensitive files

## Current Status

Your code is now secure and ready for deployment with proper environment variable configuration. Choose the deployment method that best fits your hosting platform.
