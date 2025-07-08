# GitHub Pages Hosting Guide

## Overview
This guide will help you deploy your Next.js portfolio to GitHub Pages with a custom domain like `atul-anand.github.io`.

## Prerequisites
- GitHub account: https://github.com/Atul-Anand-Jha
- Git installed on your machine
- Node.js and npm installed

## Step 1: Repository Setup

### 1.1 Create a Special Repository
For GitHub Pages personal site, create a repository named exactly:
```
atul-anand.github.io
```
⚠️ **Important**: The repository name must match your GitHub username followed by `.github.io`

### 1.2 Repository Settings
- Make it **Public** (required for free GitHub Pages)
- Initialize with README (optional, we'll replace it)

## Step 2: Configure Next.js for Static Export

### 2.1 Update next.config.ts
Add the following configuration to enable static export:

```typescript
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true
  },
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
}

module.exports = nextConfig
```

### 2.2 Add Build Script
Update package.json to include export script:

```json
{
  "scripts": {
    "dev": "next dev --turbopack",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "export": "next build"
  }
}
```

### 2.3 Create .nojekyll file
Create a `.nojekyll` file in the public directory to prevent Jekyll processing:

```bash
touch public/.nojekyll
```

## Step 3: Deploy to GitHub

### 3.1 Initialize Git Repository
```bash
cd /Users/cars24/Downloads/personal-projects/portfolio/nextjs-portfolio
git init
git add .
git commit -m "Initial commit - Next.js portfolio with bucket list"
```

### 3.2 Add GitHub Remote
```bash
git remote add origin https://github.com/Atul-Anand-Jha/atul-anand.github.io.git
git branch -M main
git push -u origin main
```

## Step 4: Configure GitHub Pages

### 4.1 Repository Settings
1. Go to your repository: https://github.com/Atul-Anand-Jha/atul-anand.github.io
2. Click **Settings** tab
3. Scroll down to **Pages** section (left sidebar)

### 4.2 Configure Source
- **Source**: Deploy from a branch
- **Branch**: `main`
- **Folder**: `/ (root)`

### 4.3 Build and Deploy Action
GitHub will automatically detect it's a Next.js project and suggest using GitHub Actions.

## Step 5: GitHub Actions Workflow

Create `.github/workflows/nextjs.yml`:

```yaml
name: Deploy Next.js site to Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'
          cache: 'npm'
      
      - name: Setup Pages
        uses: actions/configure-pages@v4
        with:
          static_site_generator: next
      
      - name: Restore cache
        uses: actions/cache@v4
        with:
          path: |
            .next/cache
          key: ${{ runner.os }}-nextjs-${{ hashFiles('**/package-lock.json') }}-${{ hashFiles('**.[jt]s', '**.[jt]sx') }}
          restore-keys: |
            ${{ runner.os }}-nextjs-${{ hashFiles('**/package-lock.json') }}-
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build with Next.js
        run: npm run build
      
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./out

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## Step 6: Update Bucket List Management

After deployment, to update your bucket list progress:

1. **Edit locally**: Update the `completedItems` array in `src/components/BucketListContainer.tsx`
2. **Commit changes**: 
   ```bash
   git add .
   git commit -m "Update bucket list progress"
   git push
   ```
3. **Automatic deployment**: GitHub Actions will automatically rebuild and deploy

## Step 7: Custom Domain (Optional)

If you want a custom domain like `yourname.com`:

1. **Repository Settings** → **Pages** → **Custom domain**
2. Add your domain name
3. Configure DNS with your domain provider:
   - **A records** pointing to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - **CNAME record** for www pointing to `atul-anand.github.io`

## Expected URLs

- **Primary**: https://atul-anand.github.io
- **Portfolio**: https://atul-anand.github.io
- **Bucket List**: https://atul-anand.github.io/bucket-list

## Troubleshooting

### Common Issues:

1. **404 Error**: Check that repository name is exactly `atul-anand.github.io`
2. **Build Fails**: Ensure all dependencies are in package.json
3. **Images Not Loading**: Make sure `images.unoptimized: true` is in next.config.ts
4. **CSS Issues**: Check that Tailwind CSS is properly configured

### Authentication Issues (403 Permission Denied)

If you get this error:
```
remote: Permission to Atul-Anand-Jha/atul-anand.github.io.git denied to atul-anand7.
fatal: unable to access 'https://github.com/Atul-Anand-Jha/atul-anand.github.io.git/': The requested URL returned error: 403
```

**Solution Options:**

#### Option 1: Use Personal Access Token (Recommended)
1. **Generate a Personal Access Token**:
   - Go to GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
   - Click "Generate new token (classic)"
   - Set expiration (recommend 90 days or no expiration for personal projects)
   - Select scopes: `repo` (full control of private repositories)
   - Copy the token (save it somewhere safe!)

2. **Update Git Remote URL**:
   ```bash
   # Remove existing remote
   git remote remove origin
   
   # Add remote with token authentication
   git remote add origin https://YOUR_TOKEN@github.com/Atul-Anand-Jha/atul-anand.github.io.git
   
   # Push to GitHub
   git push -u origin main
   ```

#### Option 2: Use SSH Authentication
1. **Generate SSH Key** (if you don't have one):
   ```bash
   ssh-keygen -t ed25519 -C "your.email@example.com"
   # Press Enter for default location
   # Optionally set a passphrase
   ```

2. **Add SSH Key to GitHub**:
   ```bash
   # Copy your public key
   cat ~/.ssh/id_ed25519.pub
   ```
   - Go to GitHub → Settings → SSH and GPG keys → New SSH key
   - Paste the public key and save

3. **Update Git Remote to SSH**:
   ```bash
   # Remove existing remote
   git remote remove origin
   
   # Add SSH remote
   git remote add origin git@github.com:Atul-Anand-Jha/atul-anand.github.io.git
   
   # Push to GitHub
   git push -u origin main
   ```

#### Option 3: Fix GitHub Username Mismatch
If your local Git username doesn't match your GitHub username:

```bash
# Check current Git config
git config user.name
git config user.email

# Update to match your GitHub account
git config user.name "Atul-Anand-Jha"
git config user.email "your.github.email@example.com"

# For global config (affects all repositories)
git config --global user.name "Atul-Anand-Jha"
git config --global user.email "your.github.email@example.com"
```

#### Option 4: Use GitHub CLI (Easiest)
1. **Install GitHub CLI**:
   ```bash
   # macOS
   brew install gh
   
   # Or download from: https://cli.github.com/
   ```

2. **Authenticate and Push**:
   ```bash
   # Login to GitHub
   gh auth login
   # Follow the prompts to authenticate
   
   # Push your code
   git push -u origin main
   ```

### Quick Fix for Immediate Push

If you need to push right now, use this command with your GitHub username and a Personal Access Token:

```bash
# Replace YOUR_TOKEN with your actual token
git remote set-url origin https://Atul-Anand-Jha:YOUR_TOKEN@github.com/Atul-Anand-Jha/atul-anand.github.io.git
git push -u origin main
```

**Important**: Never commit your personal access token to the repository!

## Security Notes

- Repository must be **public** for free GitHub Pages
- Sensitive data should be in environment variables (not applicable for static sites)
- Bucket list progress is managed through code commits (secure and trackable)

## Maintenance

- **Regular Updates**: Keep dependencies updated
- **Progress Updates**: Update bucket list by editing code and pushing
- **Content Updates**: Modify components and redeploy
- **Performance**: Monitor Core Web Vitals in GitHub Pages analytics

## Support

- **GitHub Pages Docs**: https://docs.github.com/en/pages
- **Next.js Static Export**: https://nextjs.org/docs/app/building-your-application/deploying/static-exports
- **Troubleshooting**: Check GitHub Actions logs for deployment issues
