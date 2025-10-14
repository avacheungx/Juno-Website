# Customization Guide

This guide will help you personalize your portfolio website with your own information.

## 🎨 Quick Start Customization

### 1. Hero Section (`src/components/Hero.jsx`)

Replace the mock data with your information:

```jsx
// Update the title/tagline
<p className="text-xl md:text-2xl text-gray-600 mb-8">
  Your Title | Your Skills | Your Passion
</p>

// Update the bio
<p className="text-lg text-gray-700 max-w-2xl mx-auto mb-12 leading-relaxed">
  Your personal introduction here...
</p>
```

**Add your profile photo:**
```jsx
// Replace the placeholder with an actual image
<img 
  src="/images/profile.jpg" 
  alt="Juno Hope Cheung" 
  className="w-40 h-40 mx-auto rounded-full object-cover shadow-2xl"
/>
```

### 2. Education Section (`src/components/Education.jsx`)

Update the `educationData` array with your actual education:

```jsx
const educationData = [
  {
    degree: "Your Degree",
    school: "Your School",
    location: "City, State",
    period: "Year - Year",
    description: "Your description...",
    achievements: [
      "Your achievement 1",
      "Your achievement 2",
      "Your achievement 3"
    ]
  },
  // Add more education entries
];
```

### 3. Work Experience (`src/components/WorkExperience.jsx`)

Update the `experiences` array:

```jsx
const experiences = [
  {
    title: "Your Job Title",
    company: "Company Name",
    location: "City, State",
    period: "Month Year - Present",
    description: "Brief description of role...",
    responsibilities: [
      "Responsibility 1",
      "Responsibility 2",
      "Responsibility 3",
      "Responsibility 4"
    ],
    technologies: ["Tech1", "Tech2", "Tech3", "Tech4"]
  },
  // Add more work experiences
];
```

### 4. Skills Section (`src/components/Skills.jsx`)

Update `skillCategories` with your actual skills:

```jsx
const skillCategories = [
  {
    category: "Your Category",
    icon: "🔧", // Choose an emoji or use an icon library
    skills: [
      { name: "Skill Name", level: 90 }, // level is 0-100
      { name: "Another Skill", level: 85 },
      // Add more skills
    ]
  },
  // Add more categories
];
```

**Update soft skills:**
```jsx
{[
  "Your Skill 1",
  "Your Skill 2",
  "Your Skill 3",
  // Add 8 soft skills total for the grid
].map((skill, index) => (
  // ...
))}
```

### 5. Projects Section (`src/components/Projects.jsx`)

Update the `projects` array:

```jsx
const projects = [
  {
    title: "Project Name",
    description: "Project description...",
    image: "🚀", // Use emoji or replace with actual image
    technologies: ["React", "Node.js", "MongoDB"],
    highlights: [
      "Key achievement 1",
      "Key achievement 2",
      "Key achievement 3"
    ],
    github: "https://github.com/yourusername/project",
    demo: "https://project-demo.com"
  },
  // Add more projects
];
```

**Using actual project images:**
```jsx
// Instead of emoji
<div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500">
  <img 
    src="/images/project-screenshot.jpg" 
    alt={project.title}
    className="w-full h-full object-cover"
  />
</div>
```

### 6. Personal Section (`src/components/Personal.jsx`)

Update the `interests` array:

```jsx
const interests = [
  {
    title: "Your Hobby",
    icon: "🎯",
    description: "Description of what you enjoy...",
    stats: "Relevant stat or achievement"
  },
  // Add 6 interests for the grid
];
```

**Update the featured story:**
```jsx
<h3 className="text-3xl font-bold text-gray-800 mb-4">
  Your Personal Story Title
</h3>
<p className="text-gray-700 leading-relaxed mb-4">
  Your story paragraph 1...
</p>
<p className="text-gray-700 leading-relaxed">
  Your story paragraph 2...
</p>
```

### 7. Footer (`src/components/Footer.jsx`)

Update social links and contact info:

```jsx
const socialLinks = [
  { name: "GitHub", url: "https://github.com/yourusername", icon: "github" },
  { name: "LinkedIn", url: "https://linkedin.com/in/yourprofile", icon: "linkedin" },
  { name: "Twitter", url: "https://twitter.com/yourhandle", icon: "twitter" },
  { name: "Email", url: "mailto:your.email@example.com", icon: "email" }
];
```

```jsx
<p className="text-gray-300 text-sm">
  📧 your.email@example.com
</p>
<p className="text-gray-300 text-sm mt-1">
  📍 Your City, State
</p>
```

## 🖼️ Adding Images

### Profile Photo

1. Add your photo to `public/images/profile.jpg`
2. Update Hero component:
```jsx
<img 
  src="/images/profile.jpg" 
  alt="Juno Hope Cheung" 
  className="w-40 h-40 mx-auto rounded-full object-cover shadow-2xl"
/>
```

### Project Screenshots

1. Add screenshots to `public/images/projects/`
2. Update Projects component:
```jsx
<img 
  src="/images/projects/project-name.jpg" 
  alt={project.title}
  className="w-full h-full object-cover"
/>
```

### Background Images

For hero section background:
```jsx
<section
  className="min-h-screen flex items-center justify-center px-4 pt-16"
  style={{
    backgroundImage: 'url(/images/background.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
>
```

## 🎨 Color Customization

The site uses Tailwind's gradient colors. To change the color scheme:

### Update Primary Colors

Find and replace these gradient combinations:

**Current:** Blue to Purple gradient
```jsx
className="bg-gradient-to-r from-blue-600 to-purple-600"
```

**Example alternatives:**
```jsx
// Green to Teal
className="bg-gradient-to-r from-green-600 to-teal-600"

// Pink to Rose
className="bg-gradient-to-r from-pink-600 to-rose-600"

// Orange to Red
className="bg-gradient-to-r from-orange-600 to-red-600"
```

### Background Colors

Change the main background gradient in `App.jsx`:
```jsx
// Current
className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50"

// Alternative
className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50"
```

## 📝 Content Tips

### Writing Effective Descriptions

**Work Experience:**
- Use action verbs (Led, Developed, Implemented, Designed)
- Include metrics and numbers (Increased by 60%, Handled 1M+ users)
- Focus on impact and results

**Projects:**
- Explain the problem solved
- Highlight technical challenges
- Mention technologies used
- Include live demo and GitHub links

**Personal Section:**
- Show personality and interests
- Connect hobbies to professional skills
- Be authentic and genuine

### SEO Optimization

Update `index.html`:
```html
<title>Your Name | Portfolio Title</title>
<meta name="description" content="Your custom description..." />
<meta name="keywords" content="your, relevant, keywords" />
```

## 🚀 Advanced Customization

### Adding New Sections

1. Create new component in `src/components/YourSection.jsx`
2. Import and add to `App.jsx`:
```jsx
import YourSection from './components/YourSection';

// In the return statement
<main>
  <Hero />
  <YourSection /> {/* Add here */}
  <Education />
  // ...
</main>
```

3. Add to navbar in `Navbar.jsx`:
```jsx
const navItems = [
  // ...
  { name: 'Your Section', href: '#yoursection' },
];
```

### Using Icon Libraries

Install React Icons:
```bash
npm install react-icons
```

Use in components:
```jsx
import { FaGithub, FaLinkedin } from 'react-icons/fa';

<FaGithub className="w-6 h-6" />
```

### Adding Animations

Install Framer Motion:
```bash
npm install framer-motion
```

Add animations:
```jsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Your content
</motion.div>
```

## 📱 Testing

Always test your changes:

```bash
# Development
npm run dev

# Production build
npm run build
npm run preview
```

Check on different:
- Screen sizes (mobile, tablet, desktop)
- Browsers (Chrome, Firefox, Safari)
- Devices (phone, tablet)

---

Happy customizing! 🎉

