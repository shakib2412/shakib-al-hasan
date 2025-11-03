# Shakib Al Hasan - Portfolio Website

A modern, fully responsive portfolio website built with **Next.js 14**, **React 18**, **TypeScript**, and **Tailwind CSS**.

**[Live Demo](https://shakibalhasan.vercel.app/)** | **[GitHub Repository](https://github.com/shakib2412/shakib-al-hasan)** | **[LinkedIn](https://www.linkedin.com/in/shakibalhasan/)** | **[Email](mailto:100shakibalhasan@gmail.com)**

---

## ✨ Features

- **Responsive Design** - Mobile-first approach, optimized for all devices
- **Smooth Animations** - Framer Motion for engaging interactions
- **TypeScript** - Type-safe development
- **Dark Mode Ready** - CSS variables for theming
- **SEO Optimized** - Semantic HTML, meta tags, sitemap
- **High Performance** - Image optimization, code splitting, lazy loading
- **Accessible** - WCAG 2.1 compliant

---

## 🛠 Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | [Next.js 14](https://nextjs.org/) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Styling | [Tailwind CSS](https://tailwindcss.com/) |
| Animation | [Framer Motion](https://www.framer.com/motion/) |
| Icons | [Lucide React](https://lucide.dev/) |
| Deployment | [Vercel](https://vercel.com/) |

---

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── layout/
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── AchievementsSection.tsx
│   │   ├── PublicationsSection.tsx
│   │   └── ContactSection.tsx
│   └── ui/
└── lib/
public/
└── images/
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone repository
git clone https://github.com/shakib2412/shakib-al-hasan.git
cd shakib-al-hasan

# Install dependencies
npm install

# Run development server
npm run dev
```

Visit `http://localhost:3000`

### Build & Deploy

```bash
# Build for production
npm run build

# Start production server
npm start
```

---

## 📝 Customization

### Update Personal Information

**Hero Section**: Edit `src/components/sections/HeroSection.tsx`
```tsx
const heroData = {
  title: "Your Name",
  subtitle: "Your Title",
};
```

### Add Projects

**Projects Section**: Edit `src/components/sections/ProjectsSection.tsx`
```tsx
const projectsData = [
  {
    id: "project-id",
    title: "Project Title",
    period: "Start – End",
    category: "Category",
    description: "Description",
    technologies: ["Tech1", "Tech2"],
    achievements: ["Achievement"],
    links: { github: "url" },
    icon: IconName,
    color: "from-blue-500 to-indigo-600",
  },
];
```

### Update Images

1. Add images to `public/images/`
2. Reference in component data: `logo: "/images/filename.png"`

### Change Colors

Edit `src/app/globals.css`:
```css
:root {
  --primary: 59 130 246; /* Blue */
  --primary-foreground: 255 255 255;
}
```

Use Tailwind gradients: `from-blue-500 to-indigo-600`

---

## 📄 Portfolio Sections

| Section | Description |
|---------|-------------|
| **Hero** | Introduction and CTA |
| **About** | Professional background |
| **Education** | SSC, HSC, Bachelor's Degree |
| **Experience** | Professional work history |
| **Projects** | 5 featured projects (NLP, Big Data, Game Dev, Graphics) |
| **Achievements** | Awards, scholarships, activities, languages, certifications |
| **Publications** | Research and articles |
| **Contact** | Contact methods and form |

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Or connect GitHub repository to [Vercel Dashboard](https://vercel.com/)

### Deploy to Netlify

```bash
npm run build
# Upload 'out' folder to Netlify
```

### Deploy to GitHub Pages

```bash
npm run build
npm run export
# Push 'out' folder to gh-pages branch
```

---

## 📊 Portfolio Highlights

- **Education**: Bachelor's from Sichuan University (CGPA: 3.71/4.00)
- **Awards**: Xi'an City "Belt and Road" Scholarship, Chinese Government Scholarship
- **Projects**: 5 major projects with NLP, Big Data, Game Development, Computer Graphics
- **Languages**: English (C1), Chinese (B2), German (A1)
- **Certifications**: ML: Regression and Classification (DeepLearning.AI & Stanford)

---

## 🔗 Quick Links

| Link | URL |
|------|-----|
| Portfolio | https://shakibalhasan.vercel.app/ |
| GitHub | https://github.com/shakib2412/shakib-al-hasan |
| GitHub Profile | https://github.com/shakib2412 |
| LinkedIn | https://www.linkedin.com/in/shakibalhasan/ |
| Email | 100shakibalhasan@gmail.com |
| ML Project | https://github.com/shakib2412/suicidal-ideation-detection-transformers |
| Big Data Project | https://github.com/shakib2412/Yelp-Data-Visualization |
| Game Development | https://github.com/shakib2412/Soldier-of-Fortune-Game |
| 3D Graphics | https://github.com/shakib2412/Interactive-Hierarchical-Modeling---OpenGL-Puppet |

---

## ⚡ Performance

- **Lighthouse Scores**: Performance 95+, Accessibility 95+, Best Practices 95+, SEO 100
- **Image Optimization**: WebP format, lazy loading
- **Code Splitting**: Route-based and dynamic imports
- **CSS Optimization**: Tailwind CSS tree-shaking, minification

---

## 🌐 Browser Support

- Chrome (latest) ✅
- Firefox (latest) ✅
- Safari (latest) ✅
- Edge (latest) ✅
- Mobile browsers ✅

---

## 🐛 Troubleshooting

**Port 3000 already in use?**
```bash
npm run dev -- -p 3001
```

**Tailwind styles not working?**
```bash
rm -rf .next node_modules
npm install
npm run dev
```

**Build errors?**
```bash
npm run build
# Check for TypeScript errors in terminal
```

---

## 📦 Dependencies

```json
{
  "next": "^14.0.0",
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "framer-motion": "^10.16.0",
  "tailwindcss": "^3.3.0",
  "lucide-react": "^0.263.1"
}
```

---

## 📄 License

MIT License - See [LICENSE](LICENSE) file

---

## 📞 Contact & Support

- **Email**: [100shakibalhasan@gmail.com](mailto:100shakibalhasan@gmail.com)
- **GitHub Issues**: [Report bugs](https://github.com/shakib2412/shakib-al-hasan/issues)
- **LinkedIn**: [Connect](https://www.linkedin.com/in/shakibalhasan/)

---

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Vercel](https://vercel.com)

---

**Version**: 1.0.0 | **Last Updated**: November 2024 | **Maintainer**: [Shakib Al Hasan](https://github.com/shakib2412)