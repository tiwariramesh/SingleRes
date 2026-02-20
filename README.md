# SingleRes - Modern Standalone Resume Website

A premium, modern resume website built with **React**, **Vite**, and **Tailwind CSS**. This version is a standalone frontend application using high-fidelity mock data, making it extremely fast and easy to deploy without needing a backend or database.

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
├── frontend/          # Main application directory
│   ├── src/
│   │   ├── components/    # Reusable UI components (Hero, Career, etc.)
│   │   ├── data/          # Centralized mockData.js configuration
│   │   ├── pages/         # Page components
│   │   ├── lib/           # Utility functions
│   │   └── App.jsx        # Main routing and entry point
│   ├── public/        # Static assets (images, logos)
│   └── package.json   # Dependencies and scripts
└── README.md          # Project documentation
```

## 🛠️ Quick Start

### 1. Clone the Repository

```bash
git clone git@github.com:tiwariramesh/SingleRes.git
cd SingleRes/frontend
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
`frontend/src/data/mockData.js`

All profile information, experiences, skills, and credentials are centralized in this file for easy modification.

## 🚢 Deployment

Since this is a static frontend application, you can deploy it to any static hosting provider like **Vercel**, **Netlify**, or **GitHub Pages**.

```bash
npm run build
```
The production-ready files will be generated in the `frontend/dist/` directory.

## 👤 Author

**Ramesh Tiwari**
- GitHub: [@tiwariramesh](https://github.com/tiwariramesh)
- Email: ramestiwarii@gmail.com

---
**Built with ❤️ using modern web technologies**
