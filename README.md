# SingleRes - Modern Resume Website

A modern, full-stack resume website built with React, Strapi CMS, and PostgreSQL, fully containerized with Docker.

## 🚀 Features

- **Modern Frontend**: React 18 + Vite + Tailwind CSS
- **Headless CMS**: Strapi 4 with built-in admin panel
- **Database**: PostgreSQL for robust data storage
- **Fully Dockerized**: One-command setup with Docker Compose
- **Responsive Design**: Mobile-first approach
- **Easy Content Management**: Update content without coding via Strapi admin

## 📋 Prerequisites

- Docker Desktop installed
- Docker Compose installed
- Git

## 🛠️ Quick Start

### 1. Clone the Repository

```bash
git clone git@github.com:tiwariramesh/SingleRes.git
cd SingleRes
```

### 2. Environment Setup

The `.env` file is already configured with development settings. For production, update the values:

```bash
# Review and update if needed
cat .env
```

### 3. Start All Services

```bash
docker-compose up -d
```

This will start:
- PostgreSQL database (port 5432)
- Strapi backend (port 1337)
- React frontend (port 3000)

### 4. Access the Applications

- **Frontend**: http://localhost:3000
- **Strapi Admin**: http://localhost:1337/admin
- **Strapi API**: http://localhost:1337/api

### 5. Create Strapi Admin User

On first run, navigate to http://localhost:1337/admin and create your admin account.

## 📁 Project Structure

```
SingleRes/
├── frontend/          # React + Vite application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom hooks
│   │   ├── lib/           # Utilities and API client
│   │   └── store/         # State management
│   ├── Dockerfile
│   └── nginx.conf
│
├── backend/           # Strapi CMS
│   ├── config/        # Strapi configuration
│   ├── src/
│   │   └── api/       # Content types and APIs
│   ├── public/        # Uploaded files
│   └── Dockerfile
│
├── docker-compose.yml # Docker orchestration
├── .env              # Environment variables
└── README.md
```

## 🔧 Development

### Frontend Development

```bash
cd frontend
npm install
npm run dev
```

### Backend Development

```bash
cd backend
npm install
npm run develop
```

### View Logs

```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f frontend
docker-compose logs -f strapi
docker-compose logs -f postgres
```

### Stop Services

```bash
docker-compose down
```

### Stop and Remove Volumes (⚠️ This will delete all data)

```bash
docker-compose down -v
```

## 📦 Tech Stack

### Frontend
- React 18
- Vite
- Tailwind CSS
- Framer Motion (animations)
- Axios (HTTP client)
- Zustand (state management)
- React Hook Form + Zod (forms & validation)
- Lucide React (icons)

### Backend
- Strapi 4 (Headless CMS)
- Node.js 20
- PostgreSQL 15

### DevOps
- Docker
- Docker Compose
- Nginx (production)

## 📝 Content Management

### Creating Content Types in Strapi

1. Navigate to http://localhost:1337/admin
2. Go to **Content-Type Builder**
3. Create collection types for:
   - Profile
   - Skills
   - Experience
   - Projects
   - Education
   - Services
   - Testimonials

4. Set API permissions in **Settings** → **Roles** → **Public** → Enable `find` and `findOne` for all content types

## 🚢 Deployment

### Production Build

Update `.env` for production:
```bash
NODE_ENV=production
VITE_API_URL=https://your-api-domain.com
```

Build and start:
```bash
docker-compose -f docker-compose.yml up -d --build
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👤 Author

**Ramesh Tiwari**
- GitHub: [@tiwariramesh](https://github.com/tiwariramesh)
- Email: ramestiwarii@gmail.com

## 🙏 Acknowledgments

- [Strapi](https://strapi.io/) - Headless CMS
- [React](https://react.dev/) - UI Library
- [Tailwind CSS](https://tailwindcss.com/) - CSS Framework
- [Vite](https://vitejs.dev/) - Build Tool

---

**Built with ❤️ using modern web technologies**
