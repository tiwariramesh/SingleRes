# Website Analysis: atutgorkhali.com.np

**Author:** Manus AI  
**Date:** February 16, 2026  
**Purpose:** Comprehensive technical documentation for cloning the website structure

---

## Executive Summary

The website https://atutgorkhali.com.np/ is a professional portfolio and resume website for Atut Gorkhali, an Agile Project Manager and Scrum Master. The site is built as a static, single-page application using modern front-end technologies with a modular component architecture. It features a clean, professional design with dark mode support, smooth animations, and responsive layout.

---

## 1. Technology Stack

### Core Technologies

| Technology | Version/Details | Purpose |
|---|---|---|
| **HTML5** | Standard | Semantic markup and page structure |
| **CSS (Tailwind CSS)** | CDN-based | Utility-first CSS framework for rapid styling |
| **JavaScript (jQuery)** | 3.6.0 | DOM manipulation and component loading |
| **Lucide Icons** | Latest (unpkg) | SVG icon library for UI elements |
| **Google Fonts** | Inter font family | Typography across all text elements |
| **Apache Server** | HTTP/2 support | Web server hosting the static files |

### Key Libraries and Dependencies

- **Tailwind CSS CDN**: Loaded directly from `https://cdn.tailwindcss.com`
- **jQuery 3.6.0**: Used for AJAX-based component loading via `.load()` method
- **Lucide Icons**: Unpacked from `https://unpkg.com/lucide@latest`
- **Google Fonts**: Inter font (weights: 100-900) from `https://fonts.googleapis.com`

### Architecture Pattern

The website uses a **component-based architecture** where the main `index.html` file serves as a container, and individual sections are loaded dynamically from separate HTML component files using jQuery's `.load()` method.

---

## 2. Website Structure and Layout

### Page Sections (in order of appearance)

The website is organized into 11 distinct sections, each loaded from a separate HTML file:

#### 2.1 Header Navigation (`src/components/header.html`)

The header contains:
- **Logo/Branding**: "AG ATUT GORKHALI." with a gradient text effect
- **Navigation Links**: Home, Skills, Experiences, Credentials, Services, Contact
- **Theme Toggle**: Button to switch between light and dark modes
- **Mobile Menu**: Responsive hamburger menu for smaller screens
- **CTA Button**: "Hire Me" button with gradient background

**Key Features:**
- Sticky/fixed positioning (implied by navigation behavior)
- Responsive design with hidden desktop nav on mobile
- Glass-morphism effect on mobile menu with backdrop blur
- Dark mode support with color transitions

#### 2.2 Hero Section (`src/components/hero.html`)

The hero section is the main landing area featuring:
- **Headline**: "Agile Project Manager" with animated gradient subtitle "Adaptive Teams. Reliable Delivery."
- **Subheading**: Professional description with bold emphasis on key phrases
- **Call-to-Action Buttons**: "Professional Journey" and "Contact Me"
- **Profile Image**: Professional photo with rounded corners and shadow effects
- **Floating Badge**: SAFe® 6.0 certification badge with animation
- **Expertise Tags**: SAFe, Scrum, Kanban with check-circle icons

**Key Features:**
- Two-column layout (text left, image right)
- Animated gradient text on subtitle
- Floating animation on certification badge
- Responsive stacking on mobile

#### 2.3 Resume Section (`src/components/resume.html`)

Provides downloadable resume options:
- **Visual CV (PDF)**: Designed for human recruiters, 250 KB
- **ATS Version (Text)**: Optimized for Applicant Tracking Systems, 45 KB
- **Last Updated**: January 6, 2026

**Key Features:**
- Two-column download cards
- File format and size information
- Pro tips for each format
- Last refined timestamp

#### 2.4 Skills Section (`src/components/skills.html`)

Organized into three categories:

**Management & Leadership:**
- Agile Leadership
- SAFe Scaling
- Product Ownership
- Change Management

**Engineering & Tools (Hands-on):**
- Technical Experience
- Enterprise Platforms
- Languages Experience
- Domain Experience

**Leadership & Communication:**
- Executive Communication
- Team Development
- Cultural Leadership
- Organizational Design

**Key Features:**
- Three-column grid layout
- Card-based design with hover effects
- Colored accent bars on each card
- Bullet-point descriptions with sub-details

#### 2.5 Experience Section (`src/components/experience.html`)

Career timeline showing:
1. **Project Manager II** (Dec 2021 - Present, 4+ years) - Infinite Computer Solutions
2. **Associate Team Lead** (Nov 2018 - Nov 2021, 3 years) - InfoDevelopers P Ltd
3. **Software Developer (.NET)** (Jul 2016 - Sep 2018, 2+ years) - Multiple Organizations

**Key Features:**
- Vertical timeline design with connecting line
- Alternating layout on desktop (left/right alignment)
- Color-coded status indicators (green for current, gray for past)
- Responsive mobile layout with left border instead of timeline
- Date badges for mobile view
- Detailed job descriptions

#### 2.6 Projects Section (`src/components/projects.html`)

Currently not displayed on the live site but exists in the component structure.

#### 2.7 Education Section (`src/components/education.html`)

Academic qualifications:
- **Postgraduate**: MCIS from Nepal College of Information Technology (2018-2021, 3.88 GPA)
- **Undergraduate**: B.Computing from The British College, Nepal (2013-2017, First Class Honours)

**Key Features:**
- Two-column layout
- Degree type badges
- GPA/honors information
- Institution and location details

#### 2.8 Credentials Section

Industry certifications:
- SAFe® 6 Certified Product Owner/Product Manager
- SAFe® 6 Certified Advanced Scrum Master
- SAFe® 6 Certified Scrum Master
- SAFe® 6 Certified Practitioner

#### 2.9 Services Section (`src/components/services.html`)

Five service offerings:
1. **Agile Consulting** - Strategy (Transformation strategy and process optimization)
2. **Volunteer Mentoring** - Community (Pro bono mentoring for students)
3. **Team Coaching** - Growth (Practical coaching for collaboration)
4. **Project Management** - Delivery (Delivery frameworks and governance)
5. **Business System Requirements** - Consult (Requirements analysis and system design)
6. **Guest Lecturer and Part-Time Teaching** - Academic (Mentoring and curriculum input)

**Key Features:**
- Icon-based service cards
- Category labels (STRATEGY, COMMUNITY, GROWTH, DELIVERY, CONSULT, ACADEMIC)
- Brief descriptions for each service

#### 2.10 Social Proof Section (`src/components/social-proof.html`)

Statistics and trust indicators:
- **150+** Students & Engineers Coached
- **10+** Products & Projects Delivered
- **~10** Years Experience
- **Multi** Health-Tech, Edu-Tech, Fin-Tech, TravelTech

#### 2.11 Contact Section (`src/components/contact.html`)

Call-to-action section with:
- Headline: "Ready to Scale Together?"
- Subtitle: "Let's connect and explore how we can drive meaningful transformation for your organization"
- **Contact Links**: Email and LinkedIn
- **Location**: Kathmandu, Nepal

#### 2.12 Footer (`src/components/footer.html`)

Footer contains:
- **Logo and Tagline**: "Transforming organizations through strategic agile leadership and proven enterprise methodologies"
- **Services Links**: Mentoring, Coaching, Education, Consultation
- **Contact Info**: Location and email
- **Copyright**: © 2026 Atut Gorkhali. All rights reserved.
- **Credits**: Built with GitHub Copilot and Gemini

---

## 3. Design System

### Color Palette

**Light Mode:**
- **Background**: White (#ffffff)
- **Text Primary**: Slate-900 (#0f172a)
- **Text Secondary**: Slate-600 (#475569)
- **Accent**: Indigo-600 (#4f46e5)
- **Accent Light**: Indigo-400 (#818cf8)

**Dark Mode:**
- **Background**: Dark Blue (#0b223a)
- **Alternate Background**: Slate (#2e363e)
- **Text Primary**: Light Blue (#e8f0f7)
- **Text Secondary**: Slate-400 (#cbd5e1)
- **Accent**: Indigo-500 (#6366f1)
- **Accent Light**: Indigo-400 (#818cf8)

### Typography

- **Font Family**: Inter (Google Fonts)
- **Font Weights Used**: 100-900
- **Heading Sizes**: 
  - H1: 5xl-7xl (80px-96px)
  - H2: 3xl-4xl (30px-36px)
  - H3: lg-xl (18px-20px)
- **Body Text**: sm-lg (14px-18px)
- **Small Text**: xs (12px)

### Spacing and Layout

- **Container Max-Width**: Standard responsive (likely 1280px)
- **Grid System**: 12-column grid on desktop
- **Gap Sizes**: 4px, 8px, 16px, 24px, 32px
- **Padding**: Responsive (16px mobile, 24px tablet, 32px desktop)

### Border Radius

- **Small**: 8px
- **Medium**: 12px
- **Large**: 16px-24px
- **Extra Large**: 32px

### Shadows

- **Subtle**: `shadow-sm` (0 1px 2px)
- **Medium**: `shadow-md` (0 4px 6px)
- **Large**: `shadow-lg` (0 10px 15px)
- **Extra Large**: `shadow-xl` (0 20px 25px)
- **Colored**: `shadow-indigo-500/20` (indigo shadow with opacity)

---

## 4. Animation and Interactions

### CSS Animations

The website uses several custom animations defined in `assets/css/styles.css`:

#### 4.1 Fade-In-Up Animation
```css
@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}
animation: fade-in-up 0.8s ease-out forwards;
```

**Used for:** Section reveals as user scrolls

#### 4.2 Float Animation
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-20px); }
}
animation: float 6s ease-in-out infinite;
```

**Used for:** Floating certification badge and floating elements

#### 4.3 Pulse Animation
```css
animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
```

**Used for:** Subtle pulsing effects on interactive elements

#### 4.4 Gradient Animation
```css
animation: animate-gradient (custom, likely 3-5s)
```

**Used for:** Animated gradient text on subtitle

### Intersection Observer

The website implements scroll-triggered animations using the Intersection Observer API:

```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
```

**Effect:** Elements with `.reveal` class fade in when they enter the viewport

### Hover Effects

- **Link Hover**: Color transition to indigo-600 with 300ms duration
- **Button Hover**: 
  - Shadow enhancement
  - Slight upward translation (-translate-y-0.5)
  - Background opacity changes
  - Smooth transition (300ms)
- **Card Hover**: Shadow increase, border color change

### Transitions

All interactive elements use smooth transitions:
- **Duration**: 300ms (standard), 700ms (images)
- **Timing Function**: ease-out, ease-in-out
- **Properties**: colors, transforms, shadows, opacity

---

## 5. Component Architecture

### Main Entry Point (`index.html`)

The main HTML file serves as a container with:
- Tailwind CSS CDN configuration
- Custom theme configuration
- jQuery loading
- Lucide icons initialization
- Component container divs
- jQuery-based component loader

### Component Loading System

**Method:** jQuery `.load()` with sequential loading

```javascript
function loadComponent(containerId, filePath) {
  $('#' + containerId).load(filePath, function(response, status) {
    loadedCount++;
    if (loadedCount === totalComponents) {
      setupThemeToggle();
      setupRevealObserver();
    }
  });
}
```

**Components Loaded:**
1. Header
2. Hero
3. Resume
4. Skills
5. Experience
6. Projects
7. Education
8. Services
9. Social Proof
10. Contact
11. Footer

### CSS Architecture

**File:** `assets/css/styles.css`

Contains:
- `.reveal` class for scroll animations
- `.glass-nav` class for glass-morphism effect
- Alternating background color utilities
- Tooltip styling
- Custom badge styling
- Dark mode specific styles

---

## 6. Responsive Design

### Breakpoints (Tailwind CSS)

- **Mobile**: < 640px (default)
- **Tablet**: 640px - 1024px (`md:`)
- **Desktop**: > 1024px (`lg:`)

### Responsive Adjustments

- **Navigation**: Hidden desktop nav on mobile, hamburger menu appears
- **Grid Layouts**: 1 column mobile → 2-3 columns tablet → 3-4 columns desktop
- **Typography**: Smaller sizes on mobile, larger on desktop
- **Spacing**: Reduced padding on mobile, increased on desktop
- **Timeline**: Vertical line on desktop, left border on mobile

---

## 7. Theme System

### Theme Toggle Implementation

```javascript
const html = document.documentElement;
const isDark = html.classList.toggle('dark');
localStorage.setItem('theme', isDark ? 'dark' : 'light');
```

**Storage:** Browser localStorage with key `theme`

**Default:** Light mode (unless explicitly saved as dark)

### Dark Mode CSS

Dark mode uses `.dark` class on `<html>` element:
- Background colors invert
- Text colors lighten
- Accent colors adjust for contrast
- Shadows become more pronounced

---

## 8. Performance Considerations

### Optimization Techniques

- **Lazy Loading**: Components loaded on demand via jQuery
- **CSS CDN**: Tailwind CSS served from CDN for caching
- **Icon Library**: Lucide icons loaded from unpkg CDN
- **Fonts**: Google Fonts with preconnect for faster loading
- **Static Assets**: Served from Apache with HTTP/2

### File Sizes (Approximate)

- **Main HTML**: 7.3 KB
- **Header Component**: 3-4 KB
- **Hero Component**: 4-5 KB
- **CSS File**: 2.9 KB
- **Total (uncompressed)**: ~30-40 KB

---

## 9. Accessibility Features

- **Semantic HTML**: Proper heading hierarchy, semantic tags
- **ARIA Labels**: Buttons have title attributes
- **Color Contrast**: Text meets WCAG AA standards
- **Keyboard Navigation**: All interactive elements keyboard accessible
- **Focus States**: Visible focus rings on interactive elements
- **Icon Labels**: Icons paired with text labels

---

## 10. SEO and Meta Information

- **Title**: "Atut Gorkhali - Agile Leadership & Delivery"
- **Meta Charset**: UTF-8
- **Viewport**: Responsive design meta tag
- **Semantic HTML**: Proper heading structure
- **Open Graph**: (Not visible in analysis, but recommended)

---

## 11. Key JavaScript Functions

### Theme Toggle
```javascript
function setupThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    lucide.createIcons(); // Reinitialize icons
  });
}
```

### Mobile Menu Toggle
```javascript
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
mobileMenuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
```

### Scroll to Top
Implied button with `scrollIntoView()` functionality

### Smooth Scrolling
```javascript
document.getElementById('experience').scrollIntoView({behavior: 'smooth'});
```

---

## 12. File Structure

```
atutgorkhali.com.np/
├── index.html                          # Main entry point
├── assets/
│   ├── css/
│   │   └── styles.css                 # Custom animations and utilities
│   ├── img/
│   │   └── img-profile.jpeg           # Profile photo
│   └── fonts/                         # (if any local fonts)
├── src/
│   └── components/
│       ├── header.html                # Navigation and branding
│       ├── hero.html                  # Main landing section
│       ├── resume.html                # Resume download section
│       ├── skills.html                # Skills and competencies
│       ├── experience.html            # Career timeline
│       ├── projects.html              # Projects showcase
│       ├── education.html             # Academic credentials
│       ├── services.html              # Services offered
│       ├── social-proof.html          # Statistics and trust
│       ├── contact.html               # Contact information
│       └── footer.html                # Footer
└── README.md                          # Documentation
```

---

## 13. Development Workflow

### To Clone This Website

1. **Set up HTML structure** with Tailwind CSS CDN
2. **Create component files** in `src/components/` directory
3. **Implement jQuery loader** in main `index.html`
4. **Add custom CSS** for animations and utilities
5. **Implement theme toggle** with localStorage
6. **Add responsive breakpoints** using Tailwind's responsive prefixes
7. **Optimize images** and compress assets
8. **Test across browsers** and devices

### Customization Points

- **Colors**: Modify Tailwind config in `<script>` tag
- **Fonts**: Change Google Fonts link
- **Content**: Update component HTML files
- **Animations**: Modify keyframes in `styles.css`
- **Layout**: Adjust grid columns and spacing

---

## 14. Browser Compatibility

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **Mobile Browsers**: iOS Safari, Chrome Mobile, Firefox Mobile
- **HTTP/2 Support**: Enabled on Apache server
- **CSS Support**: Flexbox, Grid, CSS Variables, Backdrop Filter

---

## 15. Hosting and Deployment

- **Server**: Apache HTTP Server
- **Protocol**: HTTP/2
- **Domain**: atutgorkhali.com.np
- **SSL/TLS**: Enabled (HTTPS)
- **Static Files**: Served with caching headers

---

## 16. Recommendations for Cloning

### Essential Elements to Replicate

1. **Component-based architecture** for maintainability
2. **Modular CSS** with Tailwind utilities
3. **Smooth animations** using CSS keyframes and Intersection Observer
4. **Dark mode support** with localStorage persistence
5. **Responsive design** with mobile-first approach
6. **Accessibility features** for inclusive design

### Tools and Libraries to Use

- **Tailwind CSS**: For rapid styling
- **jQuery or Vanilla JS**: For component loading
- **Lucide Icons**: For consistent iconography
- **Google Fonts**: For typography
- **Intersection Observer API**: For scroll animations

### Performance Tips

- Minify CSS and JavaScript
- Optimize images (use WebP format)
- Implement lazy loading for images
- Use CDN for external libraries
- Enable gzip compression on server
- Cache static assets aggressively

---

## References

1. [Tailwind CSS Documentation](https://tailwindcss.com/)
2. [jQuery Documentation](https://jquery.com/)
3. [Lucide Icons](https://lucide.dev/)
4. [Google Fonts](https://fonts.google.com/)
5. [MDN - Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
6. [Apache HTTP Server](https://httpd.apache.org)
