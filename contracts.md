# API Contracts for Backend Integration

This document outlines the API contracts and data flow between frontend and backend for future integration.

## Current State

**Status**: Frontend-only implementation with mock data
**Data Source**: `/frontend/src/data/mock.js`
**Backend**: Not yet integrated

## Mock Data Structure

### 1. Translations (`translations`)
```javascript
{
  en: { nav, hero, about, skills, projects, contact, footer },
  de: { nav, hero, about, skills, projects, contact, footer }
}
```

### 2. Profile Data (`profileData`)
```javascript
{
  name: String,
  title: String,
  location: String,
  email: String,
  phone: String,
  linkedin: String,
  github: String,
  resumeUrl: String,
  yearsExperience: Number,
  projectsCompleted: Number,
  clientSatisfaction: Number
}
```

### 3. Skills Data (`skillsData`)
```javascript
{
  programming: [String],
  visualization: [String],
  engineering: [String],
  tools: [String]
}
```

### 4. Projects Data (`projectsData`)
```javascript
[
  {
    id: Number,
    title: String,
    shortDescription: String,
    image: String (URL),
    challenge: String,
    solution: String,
    results: [String],
    technologies: [String],
    year: String,
    link: String (URL)
  }
]
```

## Backend API Endpoints (To Be Implemented)

### Base URL
```
Development: http://localhost:8001/api
Production: https://your-domain.com/api
```

### 1. Profile Endpoint

**GET /api/profile**

Returns profile information.

**Response:**
```json
{
  "success": true,
  "data": {
    "name": "Soso Parajanashvili",
    "title": "Data Scientist | Data Analyst | BI Specialist",
    "location": "Braunschweig, Germany",
    "email": "sparajanashvili@gmail.com",
    "phone": "+49 163 6613657",
    "linkedin": "https://www.linkedin.com/in/soso-parajanashvili1",
    "github": "https://github.com/sparajanashvili",
    "resumeUrl": "/resume.pdf",
    "yearsExperience": 5,
    "projectsCompleted": 15,
    "clientSatisfaction": 98
  }
}
```

### 2. Skills Endpoint

**GET /api/skills**

Returns categorized technical skills.

**Response:**
```json
{
  "success": true,
  "data": {
    "programming": ["Python (Pandas, NumPy, Scikit-learn)", ...],
    "visualization": ["Power BI (DAX, Power Query)", ...],
    "engineering": ["ETL Pipeline Development", ...],
    "tools": ["Git & GitHub", ...]
  }
}
```

### 3. Projects Endpoint

**GET /api/projects**

Returns all projects.

**Response:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "title": "Churn Prediction Model",
      "shortDescription": "XGBoost-based machine learning model...",
      "image": "https://images.unsplash.com/...",
      "challenge": "Wolly SaaS platform faced...",
      "solution": "Engineered behavioral and temporal features...",
      "results": [
        "Improved marketing campaign ROI by 20%",
        "87% prediction accuracy (F1-score: 0.84)"
      ],
      "technologies": ["Python", "XGBoost", "Pandas"],
      "year": "2023",
      "link": "https://github.com/sparajanashvili"
    }
  ]
}
```

**GET /api/projects/:id**

Returns a single project by ID.

### 4. Translations Endpoint

**GET /api/translations/:lang**

Returns translations for specified language (en/de).

**Response:**
```json
{
  "success": true,
  "language": "en",
  "data": {
    "nav": { "about": "About", ... },
    "hero": { "greeting": "Hi, I'm", ... },
    ...
  }
}
```

### 5. Contact Form Endpoint (Future)

**POST /api/contact**

Submits a contact form message.

**Request:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Job Opportunity",
  "message": "I'd like to discuss..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

## MongoDB Schema Definitions

### Profile Collection
```javascript
{
  _id: ObjectId,
  name: String,
  title: String,
  location: String,
  email: String,
  phone: String,
  linkedin: String,
  github: String,
  resumeUrl: String,
  yearsExperience: Number,
  projectsCompleted: Number,
  clientSatisfaction: Number,
  updatedAt: Date,
  createdAt: Date
}
```

### Projects Collection
```javascript
{
  _id: ObjectId,
  id: Number,
  title: String,
  shortDescription: String,
  image: String,
  challenge: String,
  solution: String,
  results: [String],
  technologies: [String],
  year: String,
  link: String,
  featured: Boolean,
  order: Number,
  updatedAt: Date,
  createdAt: Date
}
```

### Skills Collection
```javascript
{
  _id: ObjectId,
  category: String, // 'programming', 'visualization', 'engineering', 'tools'
  skills: [String],
  updatedAt: Date,
  createdAt: Date
}
```

### Translations Collection
```javascript
{
  _id: ObjectId,
  language: String, // 'en' or 'de'
  section: String,  // 'nav', 'hero', 'about', etc.
  translations: Object,
  updatedAt: Date,
  createdAt: Date
}
```

## Frontend Integration Points

### Current (Mock Data)
```javascript
import { profileData, skillsData, projectsData, translations } from '../data/mock';
```

### Future (API Integration)
```javascript
import axios from 'axios';

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

// Profile
const { data } = await axios.get(`${API}/profile`);

// Skills
const { data } = await axios.get(`${API}/skills`);

// Projects
const { data } = await axios.get(`${API}/projects`);

// Translations
const { data } = await axios.get(`${API}/translations/${language}`);
```

## Migration Steps

### Phase 1: Backend Setup
1. Create MongoDB collections
2. Seed database with data from `mock.js`
3. Implement API endpoints in FastAPI
4. Add CORS configuration
5. Test endpoints with Postman/curl

### Phase 2: Frontend Integration
1. Create API service file (`/frontend/src/services/api.js`)
2. Replace mock imports with API calls
3. Add loading states
4. Add error handling
5. Implement data caching (optional)

### Phase 3: Admin Panel (Optional)
1. Create admin routes
2. Add authentication
3. Build CRUD interfaces for:
   - Profile editing
   - Project management
   - Skills management
   - Translation updates

## Environment Variables

### Frontend `.env`
```
REACT_APP_BACKEND_URL=http://localhost:8001
```

### Backend `.env`
```
MONGO_URL=mongodb://localhost:27017
DB_NAME=portfolio
CORS_ORIGINS=["http://localhost:3000", "https://soso-portfolio.vercel.app"]
```

## Error Handling

All API responses should follow this format:

**Success:**
```json
{
  "success": true,
  "data": { ... }
}
```

**Error:**
```json
{
  "success": false,
  "error": {
    "code": "ERROR_CODE",
    "message": "Human-readable error message"
  }
}
```

## Notes

- All API endpoints use `/api` prefix to match Kubernetes ingress rules
- Images are currently hosted on Unsplash (consider self-hosting for production)
- Resume PDF should be served from `/public` directory or CDN
- Consider implementing rate limiting for contact form
- Add pagination for projects if count exceeds 20
- Implement caching strategy (Redis) for better performance