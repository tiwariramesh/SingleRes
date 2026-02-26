# SingleRes - Modern Standalone Resume Website

A premium, modern resume website built with **React 19**, **Vite**, and **Tailwind CSS v4**. This application is a high-fidelity standalone frontend designed for professionals, utilizing a centralized data architecture for extreme speed and effortless deployment.

## 🚀 Key Features & Recent Improvements

- **Standardized Typography**: Fully integrated with the **Inter** font family across the entire project for a sleek, corporate aesthetic.
- **Ultra-Wide Layout**: Optimised for modern displays with a **1400px maximum width**, while maintaining fluid responsiveness for tablets and mobile.
- **Pure Frontend Architecture**: Blazing fast performance powered by **Vite**, with zero database dependencies.
- **Redesigned Education & Credentials**: 
    - Vertical-to-horizontal fluid grid for Academic Foundations.
    - Modular "Badge" style layout for Industry Certifications with custom hex-coded metadata tags.
- **Rich Aesthetics**: Premium dark mode support, glassmorphism, and subtle micro-animations using **Framer Motion**.
- **Dynamic Content Engine**: All professional data is managed via a centralized `mockData.js` configuration.

## 📁 Project Structure

```
SingleRes/
├── src/               # React source code
│   ├── components/    # Reusable UI components (Hero, Career, AboutMe, etc.)
│   │   ├── career/    # Specialized timeline & journey components
│   │   ├── hero/      # Hero section sub-components
│   │   └── ui/        # Atomic UI elements (Shadcn/ui base)
│   ├── data/          # Centralized mockData.js configuration
│   ├── pages/         # High-level page orchestrators
│   ├── hooks/         # Custom React hooks for data & logic
│   └── index.css      # Global styles & Tailwind v4 theme configuration
├── public/            # Static assets (favicon, assets)
├── package.json       # Dependencies (React 19, Tailwind v4, etc.)
├── tailwind.config.js # Tailwind extended configuration
└── README.md          # Project documentation
```

## 🛠️ Quick Start

### 1. Clone the Repository

```bash
git clone git@github.com:tiwariramesh/SingleRes.git
cd SingleRes
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

Visit `http://localhost:5173` to view your professional journey in action.

## 📦 Modern Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 7](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion 12](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Typography**: [Inter (Weights 100-900)](https://fonts.google.com/specimen/Inter)

## 📝 Content Customization

To update the website content, simply modify the centralized data store:
`src/data/mockData.js`

This file houses all profile details, experience timelines, skills, academic records, and certifications.

## 🚢 Smart Deployment

This project is fully automated with **GitHub Actions**.

1. Commit your changes to the `main` branch.
2. The CI/CD pipeline will automatically build and deploy the site to GitHub Pages.
3. Access your live portfolio at: `https://tiwariramesh.github.io/SingleRes/`

## 👤 Author

**Ramesh Tiwari**
- GitHub: [@tiwariramesh](https://github.com/tiwariramesh)
- LinkedIn: [Connect on LinkedIn](https://linkedin.com/in/iramesh)
- Email: ramestiwarii@gmail.com

---
**Built with ❤️ for professional excellence using the latest web standards.**
