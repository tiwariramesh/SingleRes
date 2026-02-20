# SingleRes - Modern Standalone Resume Website

A premium, modern resume website built with **React**, **Vite**, and **Tailwind CSS**. This version is a standalone frontend application using high-fidelity mock data, making it extremely fast and easy to deploy.

## 🚀 Features

- **Pure Frontend**: Blazing fast performance with no database dependencies.
- **Modern Stack**: React 19 + Vite + Tailwind CSS.
- **Rich Aesthetics**: Premium dark mode, glassmorphism, and smooth animations using Framer Motion.
- **Dynamic Content**: Data-driven components managed via a centralized mock data configuration.
- **Responsive Design**: Flawless experience across mobile, tablet, and desktop.
- **Interactive Elements**: Case studies, service highlights, and a dynamic career journey timeline.

## 📁 Project Structure

```
SingleRes/
├── src/               # React source code
│   ├── components/    # Reusable UI components (Hero, Career, etc.)
│   ├── data/          # Centralized mockData.js configuration
│   ├── pages/         # Page components
│   ├── lib/           # Utility functions
├── public/            # Static assets (favicon, etc.)
├── package.json       # Dependencies and scripts
├── vite.config.js     # Vite configuration
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

Visit `http://localhost:5173` to see the website in action.

## 📦 Tech Stack

- **Framework**: [React](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: [Inter](https://fonts.google.com/specimen/Inter)

## 📝 Customization

To update the website content, simply edit the file:
`src/data/mockData.js`

All profile information, experiences, skills, and credentials are centralized in this file for easy modification.

## 🚢 Deployment (GitHub Pages)

This project is configured with **GitHub Actions** for automatic deployment to GitHub Pages.

1. Push your changes to the `main` branch.
2. Go to your GitHub Repository **Settings** > **Pages**.
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. The site will automatically deploy to `https://tiwariramesh.github.io/SingleRes/`.

## 👤 Author

**Ramesh Tiwari**
- GitHub: [@tiwariramesh](https://github.com/tiwariramesh)
- Email: ramestiwarii@gmail.com

---
**Built with ❤️ using modern web technologies**
