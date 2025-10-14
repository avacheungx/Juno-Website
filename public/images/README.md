# Images Directory

Drop your images here!

## How to Use

1. **Add your images to this folder:**
   - Profile photo: `profile.jpg` or `profile.png`
   - Project screenshots: `project1.jpg`, `bodega-cat.png`, etc.
   - Any other images you want

2. **Reference them in your components:**

### Profile Photo (Hero Section)
In `src/components/Hero.jsx`, replace the placeholder:
```jsx
<img 
  src="/images/profile.jpg" 
  alt="Juno Hope Cheung" 
  className="w-40 h-40 mx-auto object-cover border-2 border-blue-500 shadow-2xl shadow-blue-500/20"
/>
```

### Project Images
In `src/components/Projects.jsx`, replace emojis:
```jsx
<div className="h-48 bg-zinc-900 border-b border-blue-500/30">
  <img 
    src="/images/bodega-cat-finder.jpg" 
    alt={project.title}
    className="w-full h-full object-cover"
  />
</div>
```

### Personal/Interests Section
In `src/components/Personal.jsx`:
```jsx
<div className="w-48 h-48 mx-auto bg-black border-2 border-blue-500">
  <img 
    src="/images/climbing.jpg" 
    alt="Climbing"
    className="w-full h-full object-cover"
  />
</div>
```

## File Naming Tips
- Use lowercase and hyphens: `profile-photo.jpg` not `Profile Photo.jpg`
- Keep file sizes reasonable (under 1MB for web)
- Use `.jpg` for photos, `.png` for graphics/logos
- Use descriptive names: `bodega-cat-project.jpg` not `IMG_1234.jpg`

## Recommended Sizes
- Profile photo: 400x400px (square)
- Project screenshots: 800x600px (landscape)
- Background images: 1920x1080px

---

All images in this folder are automatically accessible at `/images/filename.ext`

