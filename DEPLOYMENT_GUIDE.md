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
