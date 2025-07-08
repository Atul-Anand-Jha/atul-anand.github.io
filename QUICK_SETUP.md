# Quick Setup Guide

Follow these steps to deploy your portfolio to GitHub Pages:

## Step 1: Create GitHub Repository

1. Go to GitHub: https://github.com/Atul-Anand-Jha
2. Click "New repository" (green button)
3. Repository name: **`atul-anand.github.io`** (must be exact)
4. Description: "Personal portfolio with interactive bucket list"
5. Make it **Public** (required for free GitHub Pages)
6. ✅ Click "Create repository"

## Step 2: Initialize Git and Push

Open terminal in your project directory and run:

```bash
# Navigate to your project
cd /Users/cars24/Downloads/personal-projects/portfolio/nextjs-portfolio

# Initialize git repository
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit: Next.js portfolio with bucket list"

# Add GitHub remote (replace with your actual repository URL)
git remote add origin https://github.com/Atul-Anand-Jha/atul-anand.github.io.git

# Set main branch and push
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your repository: https://github.com/Atul-Anand-Jha/atul-anand.github.io
2. Click **Settings** tab (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Source: **Deploy from a branch**
5. Branch: **main**
6. Folder: **/ (root)**
7. Click **Save**

## Step 4: Wait for Deployment

- GitHub will automatically detect it's a Next.js project
- The first deployment takes 5-10 minutes
- Check the **Actions** tab to see deployment progress
- Once complete, your site will be live at: **https://atul-anand.github.io**

## Step 5: Verify Everything Works

Visit your live site:
- **Homepage**: https://atul-anand.github.io
- **Bucket List**: https://atul-anand.github.io/bucket-list

## Troubleshooting

If something doesn't work:

1. **Check Actions tab** for build errors
2. **Repository name** must be exactly `atul-anand.github.io`
3. **Repository must be public**
4. **Wait 5-10 minutes** for first deployment

## Next Steps

After deployment:
1. Update bucket list progress by editing `src/components/BucketListContainer.tsx`
2. Customize portfolio content with your actual information
3. Add your real projects to the Projects section

Your portfolio will be automatically redeployed every time you push changes to the main branch!
