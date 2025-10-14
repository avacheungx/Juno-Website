# Juno (Ava) Hope Cheung - Personal Portfolio

A beautiful, modern personal portfolio website showcasing my background, skills, and projects.

## 🚀 Tech Stack

- **Frontend**: React 19
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Deployment**: GitHub Pages

## 📦 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/Juno-Website.git
cd Juno-Website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The site will be available at `http://localhost:5173`

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run deploy` - Deploy to GitHub Pages

## 📤 Deployment to GitHub Pages

### Initial Setup

1. Create a new repository on GitHub named `Juno-Website` (or your preferred name)

2. Update the `homepage` in `package.json`:
```json
"homepage": "https://yourusername.github.io/Juno-Website"
```

3. Update the `base` in `vite.config.js`:
```javascript
base: '/Juno-Website/'
```

### Deploy

1. Initialize git (if not already done):
```bash
git init
git add .
git commit -m "Initial commit"
```

2. Add your GitHub repository as remote:
```bash
git remote add origin https://github.com/yourusername/Juno-Website.git
git branch -M main
git push -u origin main
```

3. Deploy to GitHub Pages:
```bash
npm run deploy
```

4. Enable GitHub Pages in your repository settings:
   - Go to Settings > Pages
   - Source should be set to `gh-pages` branch
   - Your site will be published at `https://yourusername.github.io/Juno-Website`

## 🎨 Customization

### Updating Personal Information

Edit the following components with your own information:

- **Hero Section**: `src/components/Hero.jsx`
- **Education**: `src/components/Education.jsx`
- **Work Experience**: `src/components/WorkExperience.jsx`
- **Skills**: `src/components/Skills.jsx`
- **Projects**: `src/components/Projects.jsx`
- **Personal**: `src/components/Personal.jsx`
- **Footer**: `src/components/Footer.jsx`

### Adding Images

Replace the emoji placeholders with actual images:

1. Add images to `public/images/` directory
2. Update the components to use image paths:
```jsx
<img src="/images/your-photo.jpg" alt="Description" />
```

## 📝 Features

- ✨ Modern, responsive design
- 🎨 Beautiful gradient color schemes
- 📱 Mobile-friendly navigation
- 🖼️ Smooth scrolling between sections
- 💼 Professional sections for education, work, and skills
- 🏔️ Personal interests showcase
- 📊 Interactive skill bars
- 🎯 Project portfolio cards

## 🤝 Contributing

This is a personal portfolio, but feel free to fork it and use it as a template for your own site!

## 📄 License

MIT License - feel free to use this template for your own portfolio.

## 📧 Contact

- Email: juno@example.com
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

---

Built with ❤️ using React and Tailwind CSS
