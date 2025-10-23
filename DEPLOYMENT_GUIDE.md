# 🚀 Deployment Guide - Soso's Data Science Portfolio

This guide will walk you through deploying your portfolio to GitHub and Vercel, making it accessible at **soso-portfolio.vercel.app**.

---

## 📋 Prerequisites

Before starting, make sure you have:
- ✅ GitHub account: https://github.com/sparajanashvili
- ✅ Vercel account: https://vercel.com/sparajanashvilis-projects
- ✅ Git installed on your local machine
- ✅ Portfolio code ready to deploy

---

## 🗂️ Step 1: Prepare Your Portfolio for Deployment

### 1.1 Create a `.gitignore` file

Create a file named `.gitignore` in the root directory (`/app/`) with the following content:

```
# Dependencies
node_modules/
frontend/node_modules/
backend/__pycache__/
backend/*.pyc

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# Build outputs
frontend/build/
frontend/dist/

# Logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
/var/log/

# IDE
.vscode/
.idea/
*.swp
*.swo
*~

# OS
.DS_Store
Thumbs.db

# Testing
coverage/

# Misc
.cache/
tmp/
temp/
```

### 1.2 Add Your Resume PDF

Place your resume PDF file in `/app/frontend/public/resume.pdf`. This will make it downloadable from your portfolio.

---

## 🐙 Step 2: Push to GitHub

### 2.1 Initialize Git Repository (if not already done)

Open terminal in your project directory and run:

```bash
cd /app
git init
```

### 2.2 Add All Files

```bash
git add .
```

### 2.3 Create Initial Commit

```bash
git commit -m "Initial commit: Soso Parajanashvili Data Science Portfolio"
```

### 2.4 Create GitHub Repository

1. Go to https://github.com/sparajanashvili
2. Click the "+" button in the top right corner
3. Select "New repository"
4. Repository name: `soso-data-portfolio`
5. Description: "Professional Data Science Portfolio showcasing projects in ML, ETL, BI, and Analytics"
6. Choose "Public" (recommended for portfolio)
7. **DO NOT** initialize with README (we already have one)
8. Click "Create repository"

### 2.5 Connect Local Repository to GitHub

Copy the commands from GitHub (should look like this):

```bash
git remote add origin https://github.com/sparajanashvili/soso-data-portfolio.git
git branch -M main
git push -u origin main
```

**Important**: You may need to authenticate with GitHub. Use a Personal Access Token if prompted.

---

## 🚀 Step 3: Deploy to Vercel

### Method 1: Deploy via Vercel Dashboard (Recommended)

#### 3.1 Go to Vercel
1. Open https://vercel.com/sparajanashvilis-projects
2. Click "Add New..." → "Project"

#### 3.2 Import GitHub Repository
1. Click "Import Git Repository"
2. Find and select `sparajanashvili/soso-data-portfolio`
3. Click "Import"

#### 3.3 Configure Project Settings

**Framework Preset**: Create React App

**Root Directory**: `frontend` (click "Edit" and select the frontend folder)

**Build and Output Settings**:
- Build Command: `yarn build` or `npm run build`
- Output Directory: `build`
- Install Command: `yarn install` or `npm install`

**Environment Variables**: (None needed for now)

#### 3.4 Deploy
1. Click "Deploy"
2. Wait 2-3 minutes for build to complete
3. Once done, you'll get a URL like: `soso-data-portfolio.vercel.app`

#### 3.5 Configure Custom Domain (Optional)
1. Go to Project Settings → Domains
2. Click "Add"
3. Enter your desired domain: `soso-portfolio.vercel.app`
4. Vercel will automatically configure it

---

### Method 2: Deploy via Vercel CLI

#### 3.1 Install Vercel CLI

```bash
npm install -g vercel
```

#### 3.2 Login to Vercel

```bash
vercel login
```

Follow the prompts to authenticate.

#### 3.3 Deploy from Frontend Directory

```bash
cd frontend
vercel
```

Follow the interactive prompts:
- Set up and deploy? → **Yes**
- Which scope? → Select your account
- Link to existing project? → **No**
- Project name? → `soso-data-portfolio`
- Which directory? → `./` (current directory)
- Override settings? → **No**

#### 3.4 Production Deployment

```bash
vercel --prod
```

---

## ✅ Step 4: Verify Deployment

### 4.1 Check Your Live Site

Visit your deployed URL (e.g., `https://soso-portfolio.vercel.app`)

**Test the following:**
- ✅ Hero section loads with animation
- ✅ Language toggle (EN ↔ DE) works
- ✅ Navigation buttons scroll smoothly
- ✅ All 6 projects display with images
- ✅ Project cards are clickable and show details
- ✅ Contact links work (GitHub, LinkedIn, Email)
- ✅ Download CV button works
- ✅ Responsive on mobile devices

### 4.2 Test on Multiple Devices

- Desktop/Laptop
- Tablet
- Mobile phone

---

## 🔄 Step 5: Update Your Portfolio (Future Updates)

### 5.1 Update Content

Edit files in your local repository:
- Update profile: `/app/frontend/src/data/mock.js` → `profileData`
- Add projects: `/app/frontend/src/data/mock.js` → `projectsData`
- Update skills: `/app/frontend/src/data/mock.js` → `skillsData`

### 5.2 Test Locally

```bash
cd /app/frontend
yarn start
```

Check that changes look good at `http://localhost:3000`

### 5.3 Commit and Push Changes

```bash
git add .
git commit -m "Update project details"
git push origin main
```

### 5.4 Automatic Redeployment

Vercel automatically detects changes and redeploys! Wait 2-3 minutes and refresh your live site.

---

## 🎨 Step 6: Customization Tips

### Update Personal Information

Edit `/app/frontend/src/data/mock.js`:

```javascript
export const profileData = {
  name: 'Your Name',
  email: 'your.email@example.com',
  // ... other fields
};
```

### Add New Projects

Add to the `projectsData` array in `/app/frontend/src/data/mock.js`:

```javascript
{
  id: 7,
  title: 'New Amazing Project',
  shortDescription: 'Brief description',
  image: 'https://images.unsplash.com/photo-...',
  challenge: 'The problem I solved...',
  solution: 'How I approached it...',
  results: [
    'Achieved X% improvement',
    'Saved Y hours per week'
  ],
  technologies: ['Python', 'TensorFlow', 'AWS'],
  year: '2024',
  link: 'https://github.com/your-username/project'
}
```

### Replace Resume PDF

1. Place new PDF in `/app/frontend/public/resume.pdf`
2. Commit and push changes
3. Vercel will automatically update

---

## 🔗 Step 7: Share Your Portfolio

### Add to LinkedIn

1. Go to your LinkedIn profile
2. Edit the "Contact Info" section
3. Add website: `https://soso-portfolio.vercel.app`
4. Make a post announcing your portfolio!

### Add to GitHub Profile

1. Edit your GitHub profile README
2. Add a link to your portfolio
3. Pin the `soso-data-portfolio` repository

### Update Resume/CV

Add your portfolio link to your resume:
- **Portfolio**: https://soso-portfolio.vercel.app

---

## 🛠️ Troubleshooting

### Build Failed on Vercel

**Problem**: Build fails with module not found errors

**Solution**:
1. Make sure all dependencies are in `package.json`
2. Check that root directory is set to `frontend`
3. Verify build command is `yarn build`

### Images Not Loading

**Problem**: Project images not displaying

**Solution**:
- Images are hosted on Unsplash (external)
- Check internet connection
- Verify image URLs are valid

### 404 Error on Refresh

**Problem**: Page shows 404 when refreshing non-home routes

**Solution**:
- This is expected with React Router
- Vercel should handle this automatically with Create React App preset
- If issue persists, add a `vercel.json` file:

```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

### Language Toggle Not Working

**Problem**: Clicking EN/DE doesn't change language

**Solution**:
- Clear browser cache
- Check console for errors
- Verify `LanguageContext` is properly imported

---

## 📞 Support

If you encounter issues:

1. **Check Vercel Deployment Logs**: https://vercel.com/dashboard → Your Project → Deployments → Click on deployment → View Function Logs

2. **GitHub Issues**: Check if similar issues exist in React or Vercel repos

3. **Vercel Documentation**: https://vercel.com/docs

---

## 🎉 Success!

Your portfolio is now live and accessible worldwide! 

**Next Steps:**
- Share it on LinkedIn, GitHub, and your resume
- Apply to data science positions with confidence
- Keep it updated with new projects
- Consider adding a blog section for thought leadership

---

## 📊 Analytics (Optional)

### Add Google Analytics

1. Create a Google Analytics account
2. Get your tracking ID
3. Add to `frontend/public/index.html` in the `<head>` section:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

Replace `GA_MEASUREMENT_ID` with your actual ID.

---

## 🔐 Security Notes

- Never commit API keys or secrets to GitHub
- Use environment variables for sensitive data
- Keep dependencies updated: `yarn upgrade --latest`
- Monitor Vercel deployment logs for errors

---

**Congratulations! Your professional Data Science portfolio is now live! 🎊**

Built with ❤️ using React, TailwindCSS, and deployed on Vercel.

For questions or updates, refer to the main README.md file.
