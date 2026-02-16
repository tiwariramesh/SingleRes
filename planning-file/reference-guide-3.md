# Component Structure Guide

This document provides detailed specifications for each component in the resume website template.

---

## Overview

The website is built using a modular component architecture where each section is loaded dynamically using jQuery. This makes the site easy to maintain, update, and customize.

### Component Loading Flow

```
index.html (Main Container)
    ↓
jQuery .load() method
    ↓
src/components/*.html (Individual Components)
    ↓
Lucide Icons Initialization
    ↓
Intersection Observer (Reveal Animations)
    ↓
Theme Toggle Setup
```

---

## 1. Header Component (`header.html`)

### Purpose
Navigation bar with branding, menu links, theme toggle, and call-to-action button.

### Key Features
- **Sticky positioning** at the top of the page
- **Responsive design** with mobile hamburger menu
- **Dark mode support** with smooth transitions
- **Glass-morphism effect** on mobile menu
- **Theme toggle button** with localStorage persistence

### Structure

```html
<nav class="sticky top-0 z-50">
  <!-- Logo Section -->
  <div class="flex items-center gap-2">
    <!-- Gradient background logo -->
    <!-- Brand name -->
  </div>
  
  <!-- Desktop Navigation -->
  <div class="hidden md:flex gap-8">
    <!-- Navigation links -->
  </div>
  
  <!-- Mobile Menu Toggle + Theme Toggle + CTA -->
  <div class="flex items-center gap-3">
    <!-- Mobile menu button -->
    <!-- Theme toggle button -->
    <!-- CTA button -->
  </div>
  
  <!-- Mobile Menu (Hidden by default) -->
  <div id="mobile-menu" class="hidden md:hidden">
    <!-- Mobile navigation links -->
  </div>
</nav>
```

### Customization Points
- **Logo**: Change "AG" to your initials
- **Brand Name**: Update "YOUR NAME" in the logo area
- **Navigation Links**: Add/remove links as needed
- **CTA Button**: Change text and link destination
- **Colors**: Modify gradient colors and hover states

### CSS Classes Used
- `.sticky`, `.top-0`, `.z-50`: Positioning
- `.glass-nav`: Glass-morphism effect
- `.transition-colors`, `.duration-300`: Smooth transitions
- `.dark:`: Dark mode variants

---

## 2. Hero Component (`hero.html`)

### Purpose
Main landing section with headline, profile image, and call-to-action buttons.

### Key Features
- **Two-column layout** (text left, image right)
- **Animated gradient text** on subtitle
- **Floating certification badge** with animation
- **Responsive stacking** on mobile
- **Professional profile image** with shadow effects

### Structure

```html
<section id="home" class="relative py-20 md:py-32">
  <div class="max-w-6xl mx-auto">
    <div class="grid md:grid-cols-7 gap-8 items-center">
      
      <!-- Left Content (4 columns) -->
      <div class="md:col-span-4 space-y-6">
        <!-- Badge/Label -->
        <!-- Headline -->
        <!-- Description -->
        <!-- CTA Buttons -->
        <!-- Expertise Tags -->
      </div>
      
      <!-- Right Image (3 columns) -->
      <div class="lg:col-span-3 relative">
        <!-- Background gradient -->
        <!-- Profile image -->
        <!-- Floating badge -->
      </div>
    </div>
  </div>
</section>
```

### Customization Points
- **Headline**: Main title (e.g., "Your Title Here")
- **Subtitle**: Animated gradient text (e.g., "Your Subtitle Here")
- **Description**: Professional summary
- **Profile Image**: Replace `assets/img/profile.jpg`
- **Expertise Tags**: Add/remove skills
- **Floating Badge**: Change certification text
- **Button Links**: Update scroll targets and URLs

### CSS Classes Used
- `.grid`, `.md:grid-cols-7`: Layout grid
- `.animate-gradient`: Animated gradient text
- `.animate-float`: Floating animation on badge
- `.bg-gradient-to-tr`: Gradient backgrounds
- `.hover:scale-105`: Image zoom on hover

---

## 3. Resume Component (`resume.html`)

### Purpose
Section for downloading resume in different formats.

### Key Features
- **Two-column layout** for different resume versions
- **File format information** (PDF, Text)
- **Pro tips** for each format
- **Last updated timestamp**
- **Download buttons** with icons

### Structure

```html
<section id="resume" class="py-20 md:py-32 bg-slate-50 dark:bg-slate-800/50">
  <div class="max-w-6xl mx-auto">
    <!-- Section Header -->
    <h2>Professional Resume</h2>
    
    <!-- Resume Cards Grid -->
    <div class="grid md:grid-cols-2 gap-8">
      <!-- Visual CV Card -->
      <div class="bg-white dark:bg-slate-900 rounded-2xl p-8">
        <!-- Icon -->
        <!-- Title -->
        <!-- Format info -->
        <!-- Pro tip -->
        <!-- Download button -->
        <!-- Last updated -->
      </div>
      
      <!-- ATS Version Card -->
      <div class="bg-white dark:bg-slate-900 rounded-2xl p-8">
        <!-- Similar structure -->
      </div>
    </div>
  </div>
</section>
```

### Customization Points
- **Resume Files**: Update file paths and sizes
- **Last Updated Date**: Change timestamp
- **Pro Tips**: Customize recommendations
- **Download Links**: Update file URLs
- **Card Titles**: Modify format names

---

## 4. Skills Component (`skills.html`)

### Purpose
Display core competencies organized by category.

### Key Features
- **Three-column grid** layout
- **Card-based design** with hover effects
- **Colored accent bars** for each category
- **Bullet-point descriptions** with sub-details
- **Responsive stacking** on mobile

### Structure

```html
<section id="skills" class="py-20 md:py-32 bg-slate-50 dark:bg-slate-800/50">
  <div class="max-w-6xl mx-auto">
    <!-- Section Header -->
    
    <!-- Skills Grid -->
    <div class="grid md:grid-cols-3 gap-6">
      <!-- Skill Card 1 -->
      <div class="bg-white dark:bg-slate-900 rounded-2xl p-6">
        <!-- Category Header with colored bar -->
        <!-- Skills List -->
        <ul class="space-y-4">
          <li class="flex gap-3">
            <!-- Bullet point -->
            <!-- Skill name -->
            <!-- Skill description -->
          </li>
        </ul>
      </div>
      
      <!-- Skill Card 2 & 3 -->
      <!-- Similar structure -->
    </div>
  </div>
</section>
```

### Customization Points
- **Category Names**: Change "Category 1", "Category 2", etc.
- **Skill Names**: Update individual skills
- **Descriptions**: Add detailed descriptions
- **Accent Colors**: Modify gradient colors (indigo, blue, purple)
- **Number of Categories**: Add/remove columns

### CSS Classes Used
- `.grid`, `.md:grid-cols-3`: Three-column layout
- `.bg-gradient-to-b`: Gradient accent bars
- `.hover:shadow-lg`: Hover effects
- `.transition-all`: Smooth transitions

---

## 5. Experience Component (`experience.html`)

### Purpose
Display career timeline with job history.

### Key Features
- **Vertical timeline** on desktop
- **Left border timeline** on mobile
- **Color-coded status indicators** (current, past)
- **Alternating layout** on desktop
- **Responsive date badges** on mobile

### Structure

```html
<section id="experience" class="py-20 md:py-32">
  <div class="max-w-6xl mx-auto">
    <!-- Section Header -->
    
    <!-- Timeline -->
    <div class="space-y-8">
      <!-- Experience Item 1 (Current) -->
      <div class="group relative pl-8 md:pl-0 border-l-2 md:border-0">
        <div class="grid md:grid-cols-12 gap-4">
          <!-- Date Section (Desktop) -->
          <div class="md:col-span-3 text-right hidden md:block">
            <!-- Date range -->
            <!-- Duration -->
          </div>
          
          <!-- Date Section (Mobile) -->
          <div class="md:hidden pl-4">
            <!-- Date badge -->
          </div>
          
          <!-- Experience Card -->
          <div class="md:col-span-9 bg-white dark:bg-slate-800 rounded-xl p-5">
            <!-- Timeline dot (hidden on mobile) -->
            <!-- Job title -->
            <!-- Company name -->
            <!-- Description -->
          </div>
        </div>
      </div>
      
      <!-- Experience Item 2 & 3 -->
      <!-- Similar structure -->
    </div>
  </div>
</section>
```

### Customization Points
- **Job Titles**: Update position names
- **Company Names**: Add company information
- **Date Ranges**: Specify employment dates
- **Descriptions**: Add detailed job descriptions
- **Status Colors**: Change emerald, blue, slate colors
- **Duration**: Update years of experience

### CSS Classes Used
- `.border-l-2`: Left border for mobile timeline
- `.absolute`, `.top-5`, `.left-[25px]`: Timeline dot positioning
- `.grayscale`: Grayscale effect for past jobs
- `.hover:grayscale-0`: Remove grayscale on hover

---

## 6. Education Component (`education.html`)

### Purpose
Display academic qualifications and certifications.

### Structure

```html
<section id="education" class="py-20 md:py-32 bg-slate-50 dark:bg-slate-800/50">
  <div class="max-w-6xl mx-auto">
    <!-- Section Header -->
    
    <!-- Education Grid -->
    <div class="grid md:grid-cols-2 gap-8">
      <!-- Degree Card -->
      <div class="bg-white dark:bg-slate-900 rounded-2xl p-8">
        <!-- Degree type badge -->
        <!-- Degree name -->
        <!-- Duration -->
        <!-- Institution -->
        <!-- GPA/Honors -->
        <!-- Description -->
      </div>
    </div>
    
    <!-- Certifications Section -->
    <div class="mt-16">
      <!-- Certification cards -->
    </div>
  </div>
</section>
```

### Customization Points
- **Degree Names**: Update degree titles
- **Institution Names**: Add your schools/universities
- **Dates**: Specify graduation years
- **GPA/Honors**: Add academic achievements
- **Certifications**: List relevant certifications

---

## 7. Services Component (`services.html`)

### Purpose
Showcase services offered.

### Features
- **Icon-based service cards**
- **Category labels** (STRATEGY, COMMUNITY, etc.)
- **Brief descriptions**
- **Hover effects**

### Structure

```html
<section id="services" class="py-20 md:py-32">
  <div class="max-w-6xl mx-auto">
    <!-- Section Header -->
    
    <!-- Services Grid -->
    <div class="grid md:grid-cols-3 gap-6">
      <!-- Service Card -->
      <div class="bg-white dark:bg-slate-900 rounded-2xl p-8">
        <!-- Icon -->
        <!-- Category label -->
        <!-- Service name -->
        <!-- Description -->
      </div>
    </div>
  </div>
</section>
```

### Customization Points
- **Service Names**: Update service titles
- **Descriptions**: Add service details
- **Icons**: Change Lucide icon names
- **Categories**: Update category labels
- **Number of Services**: Add/remove cards

---

## 8. Social Proof Component (`social-proof.html`)

### Purpose
Display statistics and trust indicators.

### Features
- **Large number displays**
- **Descriptive labels**
- **Industry/domain tags**

### Structure

```html
<section id="social-proof" class="py-20 md:py-32 bg-slate-50 dark:bg-slate-800/50">
  <div class="max-w-6xl mx-auto">
    <!-- Statistics Grid -->
    <div class="grid md:grid-cols-4 gap-8">
      <!-- Stat Card -->
      <div class="text-center">
        <!-- Large number -->
        <!-- Label -->
      </div>
    </div>
    
    <!-- Industries/Domains -->
    <div class="mt-12">
      <!-- Industry tags -->
    </div>
  </div>
</section>
```

### Customization Points
- **Statistics Numbers**: Update metrics
- **Labels**: Change stat descriptions
- **Industries**: List relevant industries/domains

---

## 9. Contact Component (`contact.html`)

### Purpose
Call-to-action section with contact information.

### Features
- **Prominent headline**
- **Contact links** (email, LinkedIn, etc.)
- **Location information**
- **Multiple CTA buttons**

### Structure

```html
<section id="contact" class="py-20 md:py-32">
  <div class="max-w-6xl mx-auto text-center">
    <!-- Headline -->
    <!-- Subtitle -->
    
    <!-- Contact Links -->
    <div class="flex flex-wrap justify-center gap-4 mt-8">
      <!-- Email link -->
      <!-- LinkedIn link -->
      <!-- Other contact links -->
    </div>
    
    <!-- Location -->
    <div class="mt-8">
      <!-- Location badge -->
    </div>
  </div>
</section>
```

### Customization Points
- **Headline**: Update call-to-action text
- **Contact Links**: Add your contact information
- **Location**: Update your location
- **Button Styles**: Modify button appearances

---

## 10. Footer Component (`footer.html`)

### Purpose
Footer with branding, links, and copyright information.

### Features
- **Logo and tagline**
- **Service/category links**
- **Contact information**
- **Copyright notice**
- **Credits**

### Structure

```html
<footer class="bg-slate-900 dark:bg-slate-950 text-white py-16">
  <div class="max-w-6xl mx-auto">
    <!-- Footer Grid -->
    <div class="grid md:grid-cols-4 gap-8 mb-8">
      <!-- Branding Section -->
      <!-- Services Links -->
      <!-- Contact Section -->
      <!-- Additional Links -->
    </div>
    
    <!-- Divider -->
    
    <!-- Copyright -->
    <div class="text-center text-slate-400 text-sm">
      <!-- Copyright notice -->
      <!-- Credits -->
    </div>
  </div>
</footer>
```

### Customization Points
- **Tagline**: Update brand description
- **Links**: Add/remove footer links
- **Contact Info**: Update contact details
- **Copyright Year**: Change year
- **Credits**: Update attribution

---

## 11. Projects Component (`projects.html`)

### Purpose
Showcase portfolio projects (optional, not displayed in original).

### Structure

```html
<section id="projects" class="py-20 md:py-32 bg-slate-50 dark:bg-slate-800/50">
  <div class="max-w-6xl mx-auto">
    <!-- Section Header -->
    
    <!-- Projects Grid -->
    <div class="grid md:grid-cols-3 gap-6">
      <!-- Project Card -->
      <div class="bg-white dark:bg-slate-900 rounded-2xl overflow-hidden">
        <!-- Project image -->
        <!-- Project details -->
        <!-- Links -->
      </div>
    </div>
  </div>
</section>
```

---

## Common Tailwind Classes Reference

### Layout
- `.max-w-6xl`: Container max-width
- `.mx-auto`: Center horizontally
- `.px-4`, `.md:px-6`, `.lg:px-8`: Responsive padding
- `.py-20`, `.md:py-32`: Vertical padding
- `.grid`, `.md:grid-cols-3`: Grid layout
- `.flex`, `.gap-4`: Flexbox layout

### Colors
- `.bg-white`, `.dark:bg-slate-900`: Background colors
- `.text-slate-900`, `.dark:text-white`: Text colors
- `.bg-gradient-to-r`: Gradient backgrounds
- `.text-transparent`, `.bg-clip-text`: Gradient text

### Effects
- `.rounded-2xl`: Border radius
- `.shadow-lg`: Box shadow
- `.hover:shadow-xl`: Hover shadow
- `.transition-all`, `.duration-300`: Transitions
- `.opacity-0`, `.hover:opacity-100`: Opacity changes

### Responsive
- `.hidden`, `.md:flex`: Hide/show at breakpoints
- `.text-sm`, `.md:text-lg`: Responsive typography
- `.px-4`, `.md:px-8`: Responsive padding
- `.grid-cols-1`, `.md:grid-cols-2`: Responsive grid

---

## Animation Classes

### Custom Animations (from styles.css)
- `.animate-fade-in-up`: Fade in and move up
- `.animate-float`: Floating animation
- `.animate-pulse-slow`: Slow pulsing
- `.animate-gradient`: Gradient animation

### Tailwind Animations
- `.animate-spin`: Spinning animation
- `.animate-pulse`: Pulsing animation
- `.hover:scale-105`: Scale on hover
- `.group-hover:translate-x-1`: Translate on group hover

---

## Best Practices for Customization

1. **Maintain Consistency**: Use the same color palette throughout
2. **Responsive Design**: Always test on mobile, tablet, and desktop
3. **Accessibility**: Keep text contrast high, use semantic HTML
4. **Performance**: Optimize images, minimize CSS/JS
5. **Dark Mode**: Test all components in dark mode
6. **Animations**: Keep animations smooth and purposeful
7. **Typography**: Use consistent font weights and sizes
8. **Spacing**: Maintain consistent spacing between elements

---

## Troubleshooting

### Components Not Loading
- Check file paths in `index.html`
- Ensure jQuery is loaded before component loader
- Check browser console for errors

### Animations Not Working
- Verify `styles.css` is linked correctly
- Check Tailwind CSS CDN is loaded
- Ensure `.reveal` class is applied to elements

### Dark Mode Not Working
- Verify `.dark` class is toggled on `<html>` element
- Check localStorage is enabled
- Ensure dark mode CSS is in `styles.css`

### Responsive Issues
- Test with browser DevTools responsive mode
- Check Tailwind breakpoints are correct
- Verify mobile-first approach is used

---

**Document Version:** 1.0  
**Last Updated:** February 16, 2026

