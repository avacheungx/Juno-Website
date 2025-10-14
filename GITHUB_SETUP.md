# GitHub Setup Instructions

Your initial commit has been created! Now let's push it to GitHub.

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com/new)
2. Repository name: `Juno-Website` (or your preferred name)
3. Description: "Personal portfolio website showcasing my skills and experience"
4. Keep it **Public** (required for free GitHub Pages)
5. **DO NOT** check "Add a README file" (we already have one)
6. **DO NOT** check "Add .gitignore" (we already have one)
7. Click "Create repository"

## Step 2: Push to GitHub

After creating the repository, run these commands:

```bash
# Add your GitHub repository as remote
# Replace YOUR_USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR_USERNAME/Juno-Website.git

# Push the code
git push -u origin main
```

**Example:**
If your GitHub username is `junocheung`:
```bash
git remote add origin https://github.com/junocheung/Juno-Website.git
git push -u origin main
```

## Step 3: Update Configuration Files

After pushing, update these files with your actual GitHub username:

### Update `package.json`:
Find the line with `homepage` and replace `yourusername`:
```json
"homepage": "https://YOUR_USERNAME.github.io/Juno-Website"
```

### Update `vite.config.js`:
The base path should already be correct, but verify:
```javascript
base: process.env.NODE_ENV === 'production' ? '/Juno-Website/' : '/',
```

If you renamed your repository, change `/Juno-Website/` to `/YOUR_REPO_NAME/`

### Commit the changes:
```bash
git add package.json vite.config.js
git commit -m "Update GitHub username in configuration"
git push origin main
```

## Step 4: Deploy to GitHub Pages

```bash
npm run deploy
```

This will:
1. Build your production site
2. Push it to the `gh-pages` branch
3. GitHub will automatically deploy it

## Step 5: Enable GitHub Pages (if needed)

1. Go to your repository on GitHub
2. Click **Settings** > **Pages**
3. Under **Source**, select `gh-pages` branch
4. Click **Save**
5. Wait 1-5 minutes for deployment

Your site will be live at:
```
https://YOUR_USERNAME.github.io/Juno-Website
```

## Quick Reference

```bash
# Check what remote is configured
git remote -v

# Change remote if you made a mistake
git remote set-url origin https://github.com/YOUR_USERNAME/Juno-Website.git

# Check your commits
git log --oneline

# Future updates
git add .
git commit -m "Your commit message"
git push origin main
npm run deploy  # Deploy to GitHub Pages
```

## Troubleshooting

**"remote origin already exists"**
```bash
git remote remove origin
git remote add origin https://github.com/YOUR_USERNAME/Juno-Website.git
```

**"Authentication failed"**
- Use a Personal Access Token instead of password
- Go to GitHub Settings > Developer settings > Personal access tokens
- Or use SSH instead: `git@github.com:YOUR_USERNAME/Juno-Website.git`

**"Repository not found"**
- Make sure you created the repository on GitHub first
- Check that the username and repository name are correct
- Ensure the repository is public

---

Need help? Check the [Git documentation](https://git-scm.com/doc) or [GitHub Guides](https://guides.github.com/).

