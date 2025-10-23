// Mock data for Soso's Data Science Portfolio

export const translations = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact'
    },
    hero: {
      greeting: 'Hi, I\'m',
      name: 'Soso Parajanashvili',
      title: 'Junior Data Scientist',
      description: 'MSc in Informatics with hands-on experience in predictive modeling, ETL pipelines, and data visualization. Passionate about leveraging machine learning and analytics to drive business decisions.',
      downloadCV: 'Download CV',
      viewProjects: 'View Projects',
      contact: 'Get in Touch'
    },
    about: {
      title: 'About Me',
      subtitle: 'Transforming Data into Actionable Insights',
      description: 'I\'m a data-driven problem solver with a passion for turning complex business challenges into clear, actionable insights. With a Master\'s degree in Informatics (AI) and experience spanning SaaS, finance, and public sectors, I specialize in predictive modeling, ETL automation, and creating compelling data visualizations that drive growth and efficiency.',
      experience: 'Years Experience',
      projects: 'Projects Completed',
      satisfaction: 'Client Satisfaction'
    },
    skills: {
      title: 'Technical Skills',
      subtitle: 'Tools & Technologies I Work With',
      categories: {
        programming: 'Programming & Analysis',
        visualization: 'Visualization & BI',
        engineering: 'Data Engineering',
        tools: 'Tools & Platforms'
      }
    },
    projects: {
      title: 'Featured Projects',
      subtitle: 'Case Studies & Data Science Solutions',
      viewDetails: 'View Case Study',
      challenge: 'Challenge',
      solution: 'Solution',
      results: 'Results',
      technologies: 'Technologies Used'
    },
    contact: {
      title: 'Let\'s Connect',
      subtitle: 'Interested in working together? I\'d love to hear from you.',
      location: 'Location',
      email: 'Email',
      phone: 'Phone',
      linkedin: 'LinkedIn'
    },
    footer: {
      rights: 'All rights reserved',
      builtWith: 'Built with React & FastAPI'
    }
  },
  de: {
    nav: {
      about: 'Über mich',
      skills: 'Fähigkeiten',
      projects: 'Projekte',
      contact: 'Kontakt'
    },
    hero: {
      greeting: 'Hallo, ich bin',
      name: 'Soso Parajanashvili',
      title: 'Junior Datenwissenschaftler',
      description: 'MSc in Informatik mit praktischer Erfahrung in prädiktiver Modellierung, ETL-Pipelines und Datenvisualisierung. Leidenschaftlich daran interessiert, maschinelles Lernen und Analytik zu nutzen, um Geschäftsentscheidungen zu treffen.',
      downloadCV: 'Lebenslauf herunterladen',
      viewProjects: 'Projekte ansehen',
      contact: 'Kontakt aufnehmen'
    },
    about: {
      title: 'Über mich',
      subtitle: 'Daten in umsetzbare Erkenntnisse verwandeln',
      description: 'Ich bin ein datengetriebener Problemlöser mit einer Leidenschaft dafür, komplexe geschäftliche Herausforderungen in klare, umsetzbare Erkenntnisse zu verwandeln. Mit einem Master-Abschluss in Informatik (KI) und Erfahrung in SaaS, Finanzen und öffentlichen Sektoren spezialisiere ich mich auf prädiktive Modellierung, ETL-Automatisierung und die Erstellung überzeugender Datenvisualisierungen, die Wachstum und Effizienz fördern.',
      experience: 'Jahre Erfahrung',
      projects: 'Abgeschlossene Projekte',
      satisfaction: 'Kundenzufriedenheit'
    },
    skills: {
      title: 'Technische Fähigkeiten',
      subtitle: 'Werkzeuge & Technologien, mit denen ich arbeite',
      categories: {
        programming: 'Programmierung & Analyse',
        visualization: 'Visualisierung & BI',
        engineering: 'Daten-Engineering',
        tools: 'Werkzeuge & Plattformen'
      }
    },
    projects: {
      title: 'Ausgewählte Projekte',
      subtitle: 'Fallstudien & Datenwissenschaftliche Lösungen',
      viewDetails: 'Fallstudie ansehen',
      challenge: 'Herausforderung',
      solution: 'Lösung',
      results: 'Ergebnisse',
      technologies: 'Verwendete Technologien'
    },
    contact: {
      title: 'Kontakt aufnehmen',
      subtitle: 'Interesse an einer Zusammenarbeit? Ich würde mich freuen, von Ihnen zu hören.',
      location: 'Standort',
      email: 'E-Mail',
      phone: 'Telefon',
      linkedin: 'LinkedIn'
    },
    footer: {
      rights: 'Alle Rechte vorbehalten',
      builtWith: 'Erstellt mit React & FastAPI'
    }
  }
};

export const profileData = {
  name: 'Soso Parajanashvili',
  title: 'Data Scientist | Data Analyst | BI Specialist',
  location: 'Braunschweig, Germany',
  email: 'sparajanashvili@gmail.com',
  phone: '+49 163 6613657',
  linkedin: 'https://www.linkedin.com/in/soso-parajanashvili1',
  github: 'https://github.com/sparajanashvili',
  resumeUrl: '/resume.pdf',
  yearsExperience: 5,
  projectsCompleted: 15,
  clientSatisfaction: 98
};

export const skillsData = {
  programming: [
    'Python (Pandas, NumPy, Scikit-learn)',
    'XGBoost & Machine Learning',
    'SQL (PostgreSQL, MySQL)',
    'Statistical Modeling',
    'Feature Engineering',
    'Data Cleaning & Validation'
  ],
  visualization: [
    'Power BI (DAX, Power Query)',
    'Matplotlib & Seaborn',
    'Plotly',
    'Dashboard Development',
    'Data Storytelling',
    'KPI Design'
  ],
  engineering: [
    'ETL Pipeline Development',
    'Data Modeling',
    'Database Management',
    'API Integration',
    'Data Warehousing',
    'Automation Scripts'
  ],
  tools: [
    'Git & GitHub',
    'Jupyter Notebooks',
    'AWS/Azure Basics',
    'Jira & Agile',
    'Docker',
    'VS Code'
  ]
};

export const projectsData = [
  {
    id: 1,
    title: 'Churn Prediction Model',
    shortDescription: 'XGBoost-based machine learning model predicting customer churn for SaaS products',
    image: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?w=800&q=80',
    challenge: 'Wolly SaaS platform faced a 30% annual customer churn rate, significantly impacting revenue and growth. Marketing campaigns were inefficient due to lack of targeted strategies.',
    solution: 'Engineered behavioral and temporal features from user interaction data, transaction history, and engagement patterns. Built and tuned an XGBoost classifier to predict churn probability with 87% accuracy. Created Power BI dashboards visualizing lift charts and customer segments.',
    results: [
      'Improved marketing campaign ROI by 20%',
      '87% prediction accuracy (F1-score: 0.84)',
      'Reduced churn rate by 12% through targeted interventions',
      'Saved $45K annually in customer acquisition costs'
    ],
    technologies: ['Python', 'XGBoost', 'Pandas', 'Scikit-learn', 'Power BI', 'SQL'],
    year: '2023',
    link: 'https://github.com/sparajanashvili'
  },
  {
    id: 2,
    title: 'ETL & Dashboard Automation',
    shortDescription: 'End-to-end ETL pipeline with automated Power BI reporting system',
    image: 'https://images.unsplash.com/photo-1759661990336-51bd4b951fea?w=800&q=80',
    challenge: 'Data scattered across multiple sources (mobile app, CRM, payment gateway) required 15+ hours weekly for manual consolidation and reporting, with frequent errors and delays.',
    solution: 'Designed Python ETL pipelines to extract, transform, and load data from multiple sources into PostgreSQL data warehouse. Implemented data validation rules and automated Power BI dashboard refreshes with email distribution of KPI reports.',
    results: [
      'Reduced manual reporting time by 90%',
      '25% improvement in data accuracy',
      'Real-time KPI tracking for executives',
      'Automated weekly reports to 30+ stakeholders'
    ],
    technologies: ['Python', 'PostgreSQL', 'Power BI', 'Pandas', 'SQL', 'Power Query'],
    year: '2022',
    link: 'https://github.com/sparajanashvili'
  },
  {
    id: 3,
    title: 'Pricing Sensitivity Analysis',
    shortDescription: 'Price elasticity modeling and optimization for e-commerce platform',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    challenge: 'E-commerce client needed to optimize pricing strategy across 200+ products without losing market share or revenue. Historical pricing decisions were based on intuition rather than data.',
    solution: 'Analyzed 18 months of transaction data to model price elasticity using regression analysis. Performed customer segmentation via K-Means clustering to identify price-sensitive vs. premium segments. Simulated revenue impact across various pricing scenarios.',
    results: [
      'Identified optimal price points for 85% of products',
      'Projected 15% revenue increase with recommended pricing',
      'Segmented customers into 5 distinct price-sensitivity groups',
      'Enabled dynamic pricing strategy implementation'
    ],
    technologies: ['Python', 'Pandas', 'Scikit-learn', 'Seaborn', 'Regression', 'K-Means'],
    year: '2021',
    link: 'https://github.com/sparajanashvili'
  },
  {
    id: 4,
    title: 'Retail Analytics Dashboard',
    shortDescription: 'Comprehensive Power BI dashboard integrating sales, marketing, and logistics KPIs',
    image: 'https://images.unsplash.com/photo-1759661966728-4a02e3c6ed91?w=800&q=80',
    challenge: 'Retail organization had siloed data across departments with no unified view of business performance. Executives lacked real-time insights for strategic decision-making.',
    solution: 'Designed a centralized data model in Power BI combining data from sales systems, marketing platforms, and supply chain databases. Created interactive dashboards with drill-down capabilities, custom DAX measures, and role-based access.',
    results: [
      'Unified view of 50+ KPIs across departments',
      '35% improvement in inventory turnover',
      'Reduced stockouts by 28%',
      'Executive decision-making time reduced by 40%'
    ],
    technologies: ['Power BI', 'DAX', 'Power Query', 'SQL', 'Data Modeling', 'Excel'],
    year: '2022',
    link: 'https://github.com/sparajanashvili'
  },
  {
    id: 5,
    title: 'Customer Segmentation System',
    shortDescription: 'Advanced clustering analysis for targeted marketing and risk assessment',
    image: 'https://images.unsplash.com/photo-1684610529682-553625a1ffed?w=800&q=80',
    challenge: 'Bank of Georgia needed to segment customers for targeted product offerings and credit risk assessment. Traditional demographic segmentation was insufficient for personalized banking.',
    solution: 'Performed RFM (Recency, Frequency, Monetary) analysis combined with transactional behavior patterns. Applied DBSCAN and K-Means clustering algorithms to identify 7 distinct customer segments. Created segment profiles with actionable marketing recommendations.',
    results: [
      'Identified 7 actionable customer segments',
      'Improved campaign conversion by 18%',
      'Reduced non-performing loans by 7%',
      'Enabled personalized product recommendations'
    ],
    technologies: ['Python', 'Scikit-learn', 'DBSCAN', 'K-Means', 'Pandas', 'Plotly'],
    year: '2020',
    link: 'https://github.com/sparajanashvili'
  },
  {
    id: 6,
    title: 'Time Series Forecasting System',
    shortDescription: 'Automated forecasting model for demand planning and resource optimization',
    image: 'https://images.unsplash.com/photo-1646583288948-24548aedffd8?w=800&q=80',
    challenge: 'Service platform experienced high variability in demand, leading to either understaffing (poor service) or overstaffing (wasted resources). Manual forecasting was inaccurate and time-consuming.',
    solution: 'Built time series forecasting models using ARIMA and Prophet, incorporating seasonality, trends, and external factors (holidays, weather). Automated daily predictions with confidence intervals and anomaly detection alerts.',
    results: [
      '92% forecast accuracy (MAPE: 8%)',
      'Optimized staffing reducing costs by 18%',
      'Improved service level agreements by 22%',
      'Automated daily forecasts for 3 service regions'
    ],
    technologies: ['Python', 'Prophet', 'ARIMA', 'Pandas', 'Statsmodels', 'Matplotlib'],
    year: '2023',
    link: 'https://github.com/sparajanashvili'
  }
];