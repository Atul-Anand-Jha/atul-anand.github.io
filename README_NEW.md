# Atul Anand - Portfolio & Bucket List

[![Deploy to GitHub Pages](https://github.com/Atul-Anand-Jha/atul-anand.github.io/actions/workflows/nextjs.yml/badge.svg)](https://github.com/Atul-Anand-Jha/atul-anand.github.io/actions/workflows/nextjs.yml)

🌐 **Live Site**: [atul-anand.github.io](https://atul-anand.github.io)

A modern, fast, and lightweight portfolio website built with Next.js, featuring an interactive 100-item bucket list for an ML Platform Engineer.

## 🚀 Features

### Portfolio
- **Responsive Design**: Optimized for all devices
- **Modern Stack**: Next.js 15, TypeScript, Tailwind CSS
- **Fast Performance**: Static site generation
- **Professional Sections**: Hero, About, Skills, Projects, Contact

### Interactive Bucket List
- **100 Curated Items**: Across travel, career, personal, adventure, and learning
- **Smart Filtering**: Search and filter by category
- **Progress Tracking**: Visual progress bar and completion stats
- **Read-Only for Visitors**: Progress managed by code updates

## 🛠️ Tech Stack

- **Framework**: Next.js 15
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Hosting**: GitHub Pages
- **Deployment**: GitHub Actions

## 📁 Project Structure

```
├── src/
│   ├── app/
│   │   ├── page.tsx              # Homepage
│   │   ├── bucket-list/page.tsx  # Bucket list page
│   │   └── layout.tsx            # Root layout
│   ├── components/               # React components
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Skills.tsx
│   │   ├── Projects.tsx
│   │   ├── Contact.tsx
│   │   ├── Navbar.tsx
│   │   └── BucketListContainer.tsx
│   └── data/
│       └── bucketListData.ts     # 100 bucket list items
├── public/                       # Static assets
├── .github/workflows/           # GitHub Actions
└── docs/                        # Documentation
```

## 🔄 Bucket List Management

The bucket list progress is managed through code updates for security and simplicity:

1. **Update Progress**: Edit the `completedItems` array in `src/components/BucketListContainer.tsx`
2. **Commit Changes**: Push to the main branch
3. **Auto-Deploy**: GitHub Actions automatically rebuilds and deploys

```typescript
// Example: Mark items as complete
const completedItems = [1, 15, 31, 47, 66, 77, 78, 79, 81, 92]
```

See [BUCKET_LIST_MANAGEMENT.md](./BUCKET_LIST_MANAGEMENT.md) for detailed instructions.

## 🚀 Local Development

```bash
# Clone the repository
git clone https://github.com/Atul-Anand-Jha/atul-anand.github.io.git
cd atul-anand.github.io

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 📦 Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions:

- **Trigger**: Push to main branch
- **Build**: Next.js static export
- **Deploy**: GitHub Pages
- **URL**: https://atul-anand.github.io

See [github-page-hosting.md](./github-page-hosting.md) for detailed deployment instructions.

## 🎯 Bucket List Categories

- **🌍 Travel & Adventure** (25 items): Exploring the world and pushing boundaries
- **💼 Career & Professional** (20 items): ML engineering and leadership goals
- **📚 Personal Development & Learning** (25 items): Skills and self-improvement
- **🎭 Life Goals & Experiences** (30 items): Unique experiences and achievements

## 📈 Performance

- **Lighthouse Score**: 100/100 Performance
- **First Load**: < 100KB
- **Static Generation**: Pre-rendered at build time
- **CDN Delivery**: Served from GitHub's global CDN

## 🔒 Security & Privacy

- **Static Site**: No server-side vulnerabilities
- **No Database**: Progress stored in code (version controlled)
- **Read-Only**: Visitors cannot modify progress
- **Open Source**: Transparent and auditable

## 🤝 Contributing

This is a personal portfolio, but feel free to:
- Report bugs
- Suggest improvements
- Use as inspiration for your own portfolio

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Connect With Me

- **Portfolio**: [atul-anand.github.io](https://atul-anand.github.io)
- **GitHub**: [@Atul-Anand-Jha](https://github.com/Atul-Anand-Jha)
- **LinkedIn**: [Connect with me](https://linkedin.com/in/your-profile)
- **Email**: your.email@example.com

---

⭐ If you find this project interesting, please give it a star!
