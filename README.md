# Soso Parajanashvili - Data Science Portfolio

A professional, bilingual (English/German) data science portfolio showcasing 6 featured projects with case study presentations.

## 🌟 Features

- **Bilingual Support**: Toggle between English and German
- **Responsive Design**: Works perfectly on all devices
- **Modern UI**: Creative Data Science aesthetic with cyan/blue color scheme
- **6 Featured Projects**: Each with detailed case studies including challenges, solutions, and results
- **Smooth Animations**: Professional transitions and hover effects
- **Data Visualization Background**: Animated hero section with data-themed visuals
- **Interactive Project Cards**: Click to view detailed case studies
- **Contact Integration**: Direct links to GitHub, LinkedIn, and email

## 🛠️ Tech Stack

### Frontend
- **React 19**: Modern React with hooks
- **TailwindCSS**: Utility-first CSS framework
- **Shadcn/ui**: Beautiful, accessible component library
- **Lucide React**: Modern icon library
- **React Router**: Client-side routing

### Backend (Ready for Integration)
- **FastAPI**: High-performance Python web framework
- **MongoDB**: NoSQL database
- **Motor**: Async MongoDB driver

## 📝 Project Structure

```
soso-portfolio/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx          # Navigation with language toggle
│   │   │   ├── Hero.jsx            # Hero section with animated background
│   │   │   ├── About.jsx           # About section with stats
│   │   │   ├── Skills.jsx          # Technical skills showcase
│   │   │   ├── Projects.jsx        # Project cards with modal details
│   │   │   ├── Contact.jsx         # Contact information
│   │   │   ├── Footer.jsx          # Footer with links
│   │   │   └── ui/                 # Shadcn UI components
│   │   ├── contexts/
│   │   │   └── LanguageContext.js  # i18n context
│   │   ├── data/
│   │   │   └── mock.js             # Mock data (translations, profile, skills, projects)
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.css
│   └── package.json
├── backend/
│   ├── server.py
│   └── requirements.txt
└── contracts.md            # API contracts for backend integration
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- Yarn package manager
- Python 3.8+ (for backend)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/sparajanashvili/soso-data-portfolio.git
cd soso-data-portfolio
```

2. **Install frontend dependencies**
```bash
cd frontend
yarn install
```

3. **Start the development server**
```bash
yarn start
```

The app will open at `http://localhost:3000`

## 🎨 Design Features

### Color Scheme
- **Primary**: Cyan (#06b6d4) to Blue (#0ea5e9) gradients
- **Background**: Soft cyan/blue/emerald gradient backgrounds
- **Text**: Gray scale for optimal readability
- **Accents**: Strategic use of gradients for CTAs and highlights

### Typography
- Clean, modern sans-serif fonts
- Clear hierarchy with varying weights
- Excellent readability and contrast

### Animations
- Smooth scroll behavior
- Fade-in animations on load
- Hover effects on interactive elements
- Smooth transitions between states

## 📊 Projects Showcase

The portfolio features 6 detailed data science projects:

1. **Churn Prediction Model**: XGBoost-based ML model (87% accuracy)
2. **ETL & Dashboard Automation**: Python pipelines with Power BI
3. **Pricing Sensitivity Analysis**: Price elasticity modeling
4. **Retail Analytics Dashboard**: Comprehensive BI solution
5. **Customer Segmentation System**: Advanced clustering analysis
6. **Time Series Forecasting System**: Demand prediction with Prophet/ARIMA

Each project includes:
- Challenge description
- Solution approach
- Measurable results
- Technologies used
- Links to code/demos

## 🌐 Deployment

### Option 1: Vercel (Recommended)

1. **Push to GitHub**
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/sparajanashvili/soso-data-portfolio.git
git push -u origin main
```

2. **Deploy on Vercel**
- Go to [vercel.com](https://vercel.com)
- Import your GitHub repository
- Set framework preset: **Create React App**
- Set build command: `yarn build`
- Set output directory: `build`
- Deploy!

### Option 2: Netlify

1. Build the project
```bash
yarn build
```

2. Deploy to Netlify
- Drag and drop the `build` folder to [netlify.com/drop](https://app.netlify.com/drop)
- Or connect your GitHub repo for continuous deployment

## 🔄 Updating Content

### Update Personal Information
Edit `/frontend/src/data/mock.js`:
- `profileData`: Personal info, links, stats
- `skillsData`: Technical skills by category

### Add/Edit Projects
Edit the `projectsData` array in `/frontend/src/data/mock.js`:
```javascript
{
  id: 7,
  title: 'New Project',
  shortDescription: 'Brief description',
  image: 'https://...',
  challenge: 'The problem...',
  solution: 'How I solved it...',
  results: ['Result 1', 'Result 2'],
  technologies: ['Python', 'SQL'],
  year: '2024',
  link: 'https://github.com/...'
}
```

### Update Translations
Edit translations in `/frontend/src/data/mock.js` under `translations.en` and `translations.de`

## 📧 Contact Information

- **Email**: sparajanashvili@gmail.com
- **Location**: Braunschweig, Germany
- **Phone**: +49 163 6613657
- **LinkedIn**: [linkedin.com/in/soso-parajanashvili1](https://www.linkedin.com/in/soso-parajanashvili1)
- **GitHub**: [github.com/sparajanashvili](https://github.com/sparajanashvili)

## 📄 License

This project is open source and available under the MIT License.

## 🚀 Future Enhancements

- [ ] Backend API integration for dynamic content
- [ ] Blog section for data science articles
- [ ] Dark mode toggle
- [ ] Project filtering by technology
- [ ] Contact form with email integration
- [ ] Analytics dashboard
- [ ] PDF resume generation

---

**Built with ❤️ by Soso Parajanashvili**

© 2025 Soso Parajanashvili. All rights reserved.