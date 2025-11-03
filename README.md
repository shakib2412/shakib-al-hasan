# Portfolio Components - Shakib Al Hasan

A modern, animated portfolio website built with Next.js, React, and Framer Motion featuring comprehensive sections for education, projects, awards, activities, languages, and certifications.

## 📋 Table of Contents

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Features](#features)
- [Installation](#installation)
- [Components Documentation](#components-documentation)
- [File Structure](#file-structure)
- [Customization Guide](#customization-guide)
- [Dependencies](#dependencies)
- [Usage Examples](#usage-examples)
- [Best Practices](#best-practices)
- [Contributing](#contributing)
- [License](#license)

## 🎯 Overview

This portfolio website showcases professional accomplishments across multiple dimensions:

- **Education**: Bachelor's degree, HSC, and SSC qualifications
- **Projects**: 5 major projects spanning NLP, Big Data, Game Development, and Computer Graphics
- **Awards & Scholarships**: Prestigious international scholarship recognition
- **Extra-Curricular Activities**: Leadership roles and community involvement
- **Languages**: Multilingual proficiency with proficiency levels
- **Certifications**: Professional credentials in Machine Learning

All components feature smooth animations, responsive design, and modern UI/UX patterns.

## 🛠 Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/) - React meta-framework
- **Language**: [TypeScript/JavaScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Animation**: [Framer Motion](https://www.framer.com/motion/) - Production-ready animation library
- **UI Icons**: [Lucide React](https://lucide.dev/) - Beautiful icon library
- **Image Optimization**: [Next.js Image](https://nextjs.org/docs/api-reference/next/image)

## ✨ Features

### Global Features
- ✅ Fully responsive (mobile, tablet, desktop)
- ✅ Smooth scroll animations with Framer Motion
- ✅ Dark mode ready with CSS variables
- ✅ Accessible component design
- ✅ Performance optimized with lazy loading
- ✅ SEO-friendly semantic HTML
- ✅ Modern gradient designs
- ✅ Interactive hover effects

### Component-Specific Features

#### Education Component
- Timeline-based education display
- Support for multiple education levels (SSC, HSC, Bachelor's)
- Achievement highlights with icons
- Location and period information
- Logo support for institutions
- GPA/CGPA display

#### Projects Component
- Project slider/carousel functionality
- Multiple project categories (NLP, Big Data, Game Dev, Graphics)
- Technology stack display
- Project achievements and metrics
- GitHub links and external resources
- Status indicators (Completed, In Progress)
- Project categorization

#### Awards & Activities Component
- Unified section for all achievements
- Awards and scholarships showcase
- Extra-curricular activities grid
- Language proficiency indicators with animated progress bars
- Certification display with credential verification
- Icon-based categorization
- Color-coded badges

#### Languages Section
- CEFR proficiency levels (A1-C1)
- Animated proficiency bars
- Percentage-based skill display
- Language proficiency classification

#### Certifications Section
- Credential verification links
- Issuing organization display
- Credential ID for verification
- Date ranges and descriptions
- External verification buttons

## 📦 Installation

### Prerequisites
- Node.js 16+ or later
- npm, yarn, pnpm, or bun package manager

### Setup Steps

```bash
# 1. Clone the repository
git clone <your-repository-url>
cd <project-directory>

# 2. Install dependencies
npm install
# or
yarn install
# or
pnpm install

# 3. Create environment variables (if needed)
cp .env.example .env.local

# 4. Run development server
npm run dev
# or
yarn dev

# 5. Open browser and navigate to
http://localhost:3000
```

## 📚 Components Documentation

### 1. Education Component (`education.jsx`)

Displays educational qualifications across multiple levels.

**Props Structure:**
```javascript
const educationData = [
  {
    id: "unique-id",
    title: "Institution Name",
    period: "Start – End Date",
    location: "City, Country",
    type: "Degree Type",
    logo: "/path/to/logo.png",
    achievements: [
      { icon: IconComponent, text: "Achievement text" }
    ]
  }
]
```

**Features:**
- Responsive card layout
- Icon-based achievement display
- Staggered animations on scroll
- Hover effects with shadow elevation

**Example Usage:**
```jsx
import EducationSection from "@/components/EducationSection";

export default function Page() {
  return <EducationSection />;
}
```

---

### 2. Projects Component (`projects.jsx`)

Showcases major projects with detailed information.

**Props Structure:**
```javascript
const projectsData = [
  {
    id: "project-id",
    title: "Project Title",
    period: "Start – End",
    category: "Category Name",
    status: "Completed",
    description: "Project description",
    technologies: ["Tech1", "Tech2"],
    achievements: ["Achievement 1"],
    links: { github: "url" },
    icon: IconComponent,
    color: "from-color-500 to-color-600",
    type: "Project Type"
  }
]
```

**Features:**
- Project slider/carousel
- Technology stack display
- Multiple project types
- GitHub integration
- Status tracking
- Achievement highlights

---

### 3. Awards & Activities Component (`awards-activities-combined.jsx`)

Comprehensive section combining awards, activities, languages, and certifications.

**Sub-Sections:**

#### A. Awards & Scholarships
- Scholarship display with icon highlighting
- Institution and period information
- Description and benefits

#### B. Extra-Curricular Activities
- 2-column responsive grid
- Activity cards with organization details
- Icon-based categorization
- Timeline information

#### C. Languages
- 3-column grid layout
- Animated progress bars
- CEFR proficiency levels
- Percentage-based proficiency display

#### D. Licenses & Certifications
- Credential verification links
- Credential ID display
- Organization and date information
- External verification buttons

---

## 📁 File Structure

```
portfolio/
├── components/
│   ├── ui/
│   │   └── ProjectSlider.jsx
│   ├── education.jsx
│   ├── projects.jsx
│   └── awards-activities-combined.jsx
├── pages/
│   ├── index.jsx
│   └── _app.jsx
├── public/
│   └── images/
│       ├── scu-logo.png
│       ├── school-logo.png
│       └── college-logo.png
├── styles/
│   └── globals.css
├── tailwind.config.js
├── next.config.js
├── package.json
└── README.md
```

## 🎨 Customization Guide

### 1. Updating Education Data

Edit the `educationData` array in `education.jsx`:

```javascript
const educationData = [
  {
    id: "your-university",
    title: "Your University Name",
    period: "Sep 2021 – June 2025",
    location: "City, Country",
    type: "Bachelor's Degree",
    logo: "/images/your-logo.png",
    achievements: [
      { icon: Star, text: "Your Achievement" },
    ],
  },
];
```

### 2. Updating Projects

Edit the `projectsData` array in `projects.jsx`:

```javascript
const projectsData = [
  {
    id: "your-project",
    title: "Your Project Title",
    period: "Start – End",
    category: "Your Category",
    description: "Your project description",
    technologies: ["Tech1", "Tech2"],
    achievements: ["Achievement 1"],
    links: { github: "https://github.com/username/repo" },
    icon: YourIcon,
    color: "from-blue-500 to-indigo-600",
  },
];
```

### 3. Updating Awards & Activities

Edit the respective data arrays in `awards-activities-combined.jsx`:

```javascript
// For Awards
const awardsData = [
  {
    id: "award-id",
    title: "Award Title",
    period: "Start – End",
    institution: "Institution Name",
    description: "Award description",
    icon: Award,
    color: "from-amber-500 to-orange-600",
  },
];

// For Activities
const activitiesData = [
  {
    id: "activity-id",
    title: "Activity Title",
    organization: "Organization Name",
    period: "Start – End",
    description: "Activity description",
    icon: Trophy,
    color: "from-green-500 to-emerald-600",
  },
];

// For Languages
const languagesData = [
  {
    id: "language-id",
    language: "Language Name",
    proficiency: "B2",
    level: "Intermediate Proficiency",
    percentage: 75,
    color: "from-blue-500 to-blue-600",
  },
];

// For Certifications
const certificationsData = [
  {
    id: "cert-id",
    title: "Certification Title",
    organization: "Organization Name",
    period: "Start – End",
    description: "Certification description",
    credentialId: "YOUR_ID",
    credentialUrl: "https://verify.url",
    icon: CheckCircle,
    color: "from-emerald-500 to-teal-600",
  },
];
```

### 4. Customizing Colors

Colors use Tailwind gradient syntax: `from-[color]-[shade] to-[color]-[shade]`

Available colors:
- Blue: `blue-500`, `blue-600`
- Red: `red-500`, `rose-600`
- Green: `green-500`, `emerald-600`
- Purple: `purple-500`, `pink-600`
- Amber: `amber-500`, `orange-600`

### 5. Customizing Animation Delays

Edit the delay values in `itemVariants`:

```javascript
const itemVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

// Adjust in map function:
transition={{ duration: 0.6, delay: index * 0.2 }} // Change 0.2 to your value
```

### 6. Customizing Responsive Breakpoints

Update Tailwind responsive classes:
- `md:` - Medium screens (768px+)
- `lg:` - Large screens (1024px+)
- `xl:` - Extra large screens (1280px+)

Example:
```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
```

## 📦 Dependencies

### Core Dependencies
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

### Dev Dependencies
```json
{
  "@types/react": "^18.2.0",
  "@types/node": "^20.0.0",
  "typescript": "^5.0.0"
}
```

### Installation Command
```bash
npm install next react react-dom framer-motion tailwindcss lucide-react
npm install -D @types/react @types/node typescript
```

## 💡 Usage Examples

### Example 1: Adding a New Project

```javascript
const newProject = {
  id: "ml-classifier",
  title: "Advanced ML Image Classifier",
  period: "Jan 2025 – Present",
  category: "Machine Learning, Computer Vision",
  status: "In Progress",
  description: "Building a deep learning model for image classification using CNNs.",
  technologies: ["Python", "TensorFlow", "OpenCV", "PyTorch"],
  achievements: [
    "Achieved 95% accuracy on test dataset",
    "Implemented custom CNN architecture",
  ],
  links: { github: "https://github.com/username/ml-classifier" },
  icon: Brain,
  color: "from-violet-500 to-purple-600",
  type: "Research Project",
};
```

### Example 2: Adding a New Activity

```javascript
const newActivity = {
  id: "hackathon-2025",
  title: "National AI Hackathon Winner",
  organization: "Tech Innovation Summit",
  period: "Feb 2025",
  description: "Won first place in nationwide AI/ML competition with innovative solution.",
  icon: Trophy,
  color: "from-yellow-500 to-amber-600",
};
```

### Example 3: Adding a New Language

```javascript
const newLanguage = {
  id: "spanish",
  language: "Spanish",
  proficiency: "A2",
  level: "Elementary Proficiency",
  percentage: 50,
  color: "from-yellow-500 to-yellow-600",
};
```

## 🎯 Best Practices

### 1. Performance Optimization
- Use `lazy` attribute for images
- Implement code splitting
- Optimize animation performance with `will-change`
- Use `viewport` prop in animations for lazy evaluation

```javascript
whileInView={{ opacity: 1, y: 0 }}
viewport={{ once: true }} // Only animate once when in view
```

### 2. Accessibility
- Use semantic HTML (`<section>`, `<header>`, etc.)
- Provide alt text for images
- Ensure sufficient color contrast
- Use ARIA labels where needed

```jsx
<section id="education" className="py-20 lg:py-32">
  {/* Content */}
</section>
```

### 3. SEO Optimization
- Use descriptive section IDs
- Include relevant headings (h1, h2, h3)
- Add meta descriptions
- Use semantic HTML structure

### 4. Responsive Design
- Mobile-first approach
- Test on multiple screen sizes
- Use Tailwind responsive prefixes
- Ensure touch targets are 44px minimum

```jsx
<div className="text-sm md:text-base lg:text-lg">
  Responsive text sizing
</div>
```

### 5. Animation Best Practices
- Keep animations under 300ms for interactions
- Use `ease-in-out` for natural motion
- Avoid animating too many properties simultaneously
- Test performance on lower-end devices

## 🔄 Component Integration

### Adding to Main Page

```jsx
// pages/index.js
import EducationSection from "@/components/education";
import ProjectsSection from "@/components/projects";
import AwardsActivitiesSection from "@/components/awards-activities-combined";

export default function Home() {
  return (
    <main>
      <EducationSection />
      <ProjectsSection />
      <AwardsActivitiesSection />
    </main>
  );
}
```

## 🐛 Troubleshooting

### Issue: Images Not Loading
**Solution**: Ensure image paths in data arrays match public folder structure
```javascript
logo: "/images/scu-logo.png" // Must exist in public/images/
```

### Issue: Animations Not Playing
**Solution**: Verify Framer Motion is installed and check viewport prop
```bash
npm install framer-motion
```

### Issue: Tailwind Styles Not Applied
**Solution**: Ensure tailwind.config.js includes correct paths
```javascript
content: [
  "./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
]
```

### Issue: Responsive Layout Issues
**Solution**: Clear browser cache and rebuild
```bash
npm run build
npm run dev
```

## 📱 Mobile Responsiveness

All components are fully responsive with breakpoints:
- **Mobile**: Default styling (< 768px)
- **Tablet**: `md:` prefix (768px - 1024px)
- **Desktop**: `lg:` prefix (1024px+)
- **Wide**: `xl:` prefix (1280px+)

## 🚀 Deployment

### Deploy to Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Upload 'out' folder to Netlify
```

### Deploy to GitHub Pages
```bash
npm run export
# Push 'out' folder to gh-pages branch
```

## 📄 License

This project is licensed under the MIT License - see LICENSE file for details.

## 👨‍💻 Author

**Shakib Al Hasan**
- Email: shakib@example.com
- GitHub: [github.com/shakib2412](https://github.com/shakib2412)
- LinkedIn: [Your LinkedIn Profile]
- Portfolio: [Your Portfolio URL]

## 🤝 Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For issues, questions, or suggestions:
- Open an GitHub issue
- Contact via email
- Check documentation

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [Framer Motion Guide](https://www.framer.com/motion/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev/)

## 📈 Future Enhancements

- [ ] Add dark mode toggle
- [ ] Implement testimonials section
- [ ] Add blog/articles section
- [ ] Create contact form
- [ ] Add search functionality
- [ ] Implement analytics
- [ ] Add multi-language support
- [ ] Create admin dashboard for content management

---

**Last Updated**: November 2024
**Version**: 1.0.0

For the latest updates, visit the [GitHub Repository](https://github.com/shakib2412)