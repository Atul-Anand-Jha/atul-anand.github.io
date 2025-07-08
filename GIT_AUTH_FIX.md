# 🚨 Quick Fix for Git Authentication Error

You're getting this error because your local Git username (`atul-anand7`) doesn't match the repository owner (`Atul-Anand-Jha`).

## ⚡ Fastest Solution: Personal Access Token

### Step 1: Generate Token
1. Go to: https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Set expiration: 90 days (or no expiration)
4. Select scope: ✅ **repo** (full control)
5. Click "Generate token"
6. **COPY THE TOKEN** (you won't see it again!)

### Step 2: Update Git Remote
```bash
cd /Users/cars24/Downloads/personal-projects/portfolio/nextjs-portfolio

# Remove current remote
git remote remove origin

# Add new remote with token (replace YOUR_TOKEN with actual token)
git remote add origin https://YOUR_TOKEN@github.com/Atul-Anand-Jha/atul-anand.github.io.git

# Push to GitHub
git push -u origin main
```

## 🔐 Alternative: SSH Authentication

### Step 1: Generate SSH Key
```bash
ssh-keygen -t ed25519 -C "your.email@example.com"
# Press Enter for default location
# Press Enter again for no passphrase (or set one)
```

### Step 2: Add SSH Key to GitHub
```bash
# Copy your public key
cat ~/.ssh/id_ed25519.pub
```
1. Go to: https://github.com/settings/keys
2. Click "New SSH key"
3. Paste the key and save

### Step 3: Update Remote to SSH
```bash
cd /Users/cars24/Downloads/personal-projects/portfolio/nextjs-portfolio

# Remove current remote
git remote remove origin

# Add SSH remote
git remote add origin git@github.com:Atul-Anand-Jha/atul-anand.github.io.git

# Push to GitHub
git push -u origin main
```

## 🎯 Quick Check Commands

```bash
# Check current remote
git remote -v

# Check Git config
git config user.name
git config user.email

# Update Git config if needed
git config user.name "Atul-Anand-Jha"
git config user.email "your.github.email@example.com"
```

## ✅ After Successful Push

Once you successfully push:
1. Go to your repository: https://github.com/Atul-Anand-Jha/atul-anand.github.io
2. Go to Settings → Pages
3. Set Source: Deploy from branch (main)
4. Wait 5-10 minutes for deployment
5. Visit: https://atul-anand.github.io

Choose the method that works best for you!
