# Quick Reference Guide

A fast lookup guide for common tasks and customizations.

---

## File Paths Quick Reference

```
starter-files/
├── index.html                          ← Main entry point
├── README.md                           ← Setup instructions
├── assets/
│   ├── css/
│   │   └── styles.css                 ← Custom animations
│   ├── img/
│   │   └── profile.jpg                ← Profile image (replace this)
│   └── documents/
│       ├── resume.pdf                 ← Your resume
│       └── resume.txt                 ← ATS version
└── src/
    └── components/
        ├── header.html                ← Navigation bar
        ├── hero.html                  ← Hero section
        ├── resume.html                ← Resume downloads
        ├── skills.html                ← Skills section
        ├── experience.html            ← Career timeline
        ├── projects.html              ← Projects showcase
        ├── education.html             ← Education section
        ├── services.html              ← Services section
        ├── social-proof.html          ← Statistics
        ├── contact.html               ← Contact section
        └── footer.html                ← Footer
```

---

## Common Customizations

### Change Your Name

**File**: `src/components/header.html`
```html
<!-- Find this line -->
<span class="hidden sm:inline font-black text-slate-900 dark:text-white">YOUR NAME.</span>

<!-- Change to -->
<span class="hidden sm:inline font-black text-slate-900 dark:text-white">JOHN DOE.</span>
```

### Change Your Title

**File**: `src/components/hero.html`
```html
<!-- Find this -->
<h1 class="text-5xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
    Your Title Here
```

<!-- Change to -->
<h1 class="text-5xl md:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.1]">
    Full Stack Developer
```

### Change Your Subtitle

**File**: `src/components/hero.html`
```html
<!-- Find this -->
<span class="block text-3xl md:text-4xl mt-2 font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600 dark:from-indigo-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent bg-300% animate-gradient">
    Your Subtitle Here.
</span>

<!-- Change to -->
<span class="block text-3xl md:text-4xl mt-2 font-bold bg-gradient-to-r from-indigo-600 via-blue-600 to-indigo-600 dark:from-indigo-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent bg-300% animate-gradient">
    Building Digital Solutions.
</span>
```

### Change Profile Image

**File**: `src/components/hero.html`
```html
<!-- Find this -->
<img src="assets/img/profile.jpg" alt="Your Name"

<!-- Change to -->
<img src="assets/img/your-image.jpg" alt="Your Name"
```

Then replace the image file at `assets/img/profile.jpg`

### Change Primary Color (Indigo to Blue)

**Global Search & Replace** in all files:
```
indigo-600 → blue-600
indigo-500 → blue-500
indigo-400 → blue-400
indigo-900 → blue-900
indigo-50  → blue-50
```

### Add Social Media Links

**File**: `src/components/footer.html`

Add before the copyright section:
```html
<div class="flex gap-4 justify-center mt-8">
    <a href="https://twitter.com/yourhandle" class="text-slate-400 hover:text-indigo-400 transition-colors">
        <i data-lucide="twitter" class="w-5 h-5"></i>
    </a>
    <a href="https://linkedin.com/in/yourprofile" class="text-slate-400 hover:text-indigo-400 transition-colors">
        <i data-lucide="linkedin" class="w-5 h-5"></i>
    </a>
    <a href="https://github.com/yourprofile" class="text-slate-400 hover:text-indigo-400 transition-colors">
        <i data-lucide="github" class="w-5 h-5"></i>
    </a>
</div>
```

### Update Contact Email

**File**: `src/components/contact.html`
```html
<!-- Find -->
<a href="mailto:your@email.com" class="...">

<!-- Change to -->
<a href="mailto:john@example.com" class="...">
```

Also update in `src/components/header.html` and `src/components/footer.html`

### Add New Navigation Link

**File**: `src/components/header.html`

In the desktop nav section:
```html
<div class="hidden md:flex gap-8 text-xs font-bold text-slate-700 dark:text-slate-300">
    <!-- Add this line -->
    <a href="#your-section" class="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300">Your Link</a>
</div>
```

Also add to mobile menu:
```html
<div id="mobile-menu" class="hidden md:hidden ...">
    <div class="flex flex-col p-4 gap-2">
        <!-- Add this line -->
        <a href="#your-section" class="px-4 py-2 text-sm font-bold ...">Your Link</a>
    </div>
</div>
```

---

## Tailwind CSS Common Classes

### Spacing
```css
p-4       /* Padding: 16px */
px-8      /* Horizontal padding: 32px */
py-20     /* Vertical padding: 80px */
mt-4      /* Margin-top: 16px */
gap-6     /* Gap between flex/grid items: 24px */
```

### Colors
```css
bg-white              /* White background */
dark:bg-slate-900    /* Dark mode background */
text-slate-600       /* Gray text */
dark:text-slate-300  /* Dark mode text */
border-slate-200     /* Gray border */
```

### Sizing
```css
w-full    /* Width: 100% */
h-auto    /* Height: auto */
max-w-md  /* Max width: 448px */
max-w-6xl /* Max width: 1280px */
```

### Display
```css
flex              /* Display: flex */
grid              /* Display: grid */
hidden            /* Display: none */
md:flex           /* Flex on medium screens and up */
md:grid-cols-3    /* 3 columns on medium screens and up */
```

### Effects
```css
rounded-2xl       /* Border radius: 16px */
shadow-lg         /* Large shadow */
hover:shadow-xl   /* Extra large shadow on hover */
transition-all    /* Transition all properties */
duration-300      /* Transition duration: 300ms */
```

---

## Component Snippets

### Add a New Skill

**File**: `src/components/skills.html`

```html
<li class="flex gap-3">
    <span class="text-indigo-600 font-bold text-lg leading-none mt-0.5">•</span>
    <div class="flex-1">
        <div class="font-bold text-slate-900 dark:text-slate-50 text-sm">Your Skill</div>
        <div class="text-slate-600 dark:text-slate-400 text-xs mt-1">Brief description</div>
    </div>
</li>
```

### Add a New Experience

**File**: `src/components/experience.html`

```html
<div class="group relative pl-8 md:pl-0 border-l-2 border-slate-200 md:border-0 pb-4">
    <div class="grid md:grid-cols-12 gap-4">
        <div class="md:col-span-3 text-right hidden md:block pr-8">
            <div class="text-slate-900 dark:text-slate-100 font-bold text-xs">Month Year - Month Year</div>
            <div class="text-slate-400 text-xs font-medium mt-2">X Years</div>
        </div>
        <div class="md:hidden pl-4 pb-2">
            <span class="text-xs font-bold bg-slate-200 dark:bg-slate-700 px-2 py-1 rounded text-slate-600 dark:text-slate-300">Year — Year</span>
        </div>
        <div class="md:col-span-9 bg-white dark:bg-slate-800 p-4 md:p-5 rounded-xl shadow-sm dark:shadow-none border border-slate-100 dark:border-slate-700 hover:shadow-md dark:hover:shadow-slate-900/50 transition-shadow relative">
            <div class="absolute top-5 -left-[25px] w-4 h-4 rounded-full border-3 border-slate-50 dark:border-slate-800 bg-emerald-600 hidden md:block"></div>
            <div class="flex justify-between items-start mb-1">
                <h3 class="text-base font-black text-slate-900 dark:text-slate-50">Job Title</h3>
                <span class="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-[9px] font-bold rounded">X+ yrs</span>
            </div>
            <p class="text-emerald-600 dark:text-emerald-400 font-bold text-xs mb-2">Company Name</p>
            <p class="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">Job description</p>
        </div>
    </div>
</div>
```

### Add a New Service

**File**: `src/components/services.html`

```html
<div class="group">
    <div class="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/30 hover:border-slate-300 dark:hover:border-slate-600/50 hover:shadow-lg dark:hover:shadow-slate-900/30 transition-all duration-300 h-full">
        <div class="flex items-center gap-4 mb-4">
            <div class="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg">
                <i data-lucide="icon-name" class="w-6 h-6 text-indigo-600 dark:text-indigo-400"></i>
            </div>
            <div>
                <p class="text-[10px] font-bold text-slate-400 uppercase tracking-wider">CATEGORY</p>
                <h3 class="font-bold text-slate-900 dark:text-slate-50">Service Name</h3>
            </div>
        </div>
        <p class="text-slate-600 dark:text-slate-400 text-sm">Service description</p>
    </div>
</div>
```

---

## Icon Names (Lucide)

Common icons you can use:

```
<!-- Professional -->
briefcase, award, star, trophy, target, zap

<!-- Social -->
linkedin, twitter, github, mail, phone, map-pin

<!-- UI -->
menu, x, chevron-down, arrow-right, check-circle-2

<!-- Content -->
file-pdf, file-text, download, link, external-link

<!-- Status -->
check, x, alert-circle, info, help-circle

<!-- Other -->
heart, share-2, eye, edit, delete, settings
```

Usage:
```html
<i data-lucide="briefcase" class="w-5 h-5"></i>
```

---

## Dark Mode Classes

Every color class has a dark mode variant:

```css
bg-white              → dark:bg-slate-900
text-slate-900       → dark:text-white
border-slate-200     → dark:border-slate-700
hover:text-indigo-600 → dark:hover:text-indigo-400
```

---

## Responsive Breakpoints

```css
/* Mobile (default) */
.text-sm, .px-4, .grid-cols-1

/* Tablet and up (640px+) */
.sm:text-base, .sm:px-6

/* Desktop and up (1024px+) */
.md:text-lg, .md:px-8, .md:grid-cols-2

/* Large desktop (1280px+) */
.lg:text-xl, .lg:px-12, .lg:grid-cols-3
```

---

## Common Issues & Fixes

### Links Not Working
- Check href attributes are correct
- Use `#section-id` for internal links
- Use `https://` for external links

### Images Not Showing
- Verify file path is correct
- Check image file exists
- Use relative paths from project root
- Check file name capitalization

### Styling Not Applied
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+Shift+R or Cmd+Shift+R)
- Check Tailwind CSS CDN is loaded
- Verify class names are spelled correctly

### Dark Mode Not Working
- Check localStorage is enabled
- Verify `.dark` class on `<html>` element
- Check dark mode CSS in `styles.css`
- Test in private/incognito window

---

## Deployment Checklist

- [ ] Replace all placeholder text with your content
- [ ] Update profile image
- [ ] Add resume files
- [ ] Update email and contact links
- [ ] Test all links work
- [ ] Test dark mode
- [ ] Test on mobile devices
- [ ] Check all images load
- [ ] Verify animations work smoothly
- [ ] Test form submissions (if added)
- [ ] Update meta tags for SEO
- [ ] Minify CSS/JS (optional)
- [ ] Set up analytics (optional)

---

## Performance Optimization

### Image Optimization
```bash
# Compress images
# Use tools: TinyPNG, ImageOptim, or ImageMagick

# Recommended sizes:
# Profile: 400x400px (100-150KB)
# Hero: 1200x800px (200-300KB)
```

### CSS Optimization
```bash
# Remove unused Tailwind classes
# Use PurgeCSS or Tailwind's built-in purge

# Minify CSS
# Use online minifiers or build tools
```

### Caching Headers
```
# Set in your web server config
Cache-Control: max-age=31536000 for images
Cache-Control: max-age=3600 for HTML
```

---

## SEO Quick Tips

1. **Title**: Make it descriptive and include keywords
2. **Description**: Write a compelling meta description
3. **Headings**: Use proper H1, H2, H3 hierarchy
4. **Images**: Add alt text to all images
5. **Links**: Use descriptive anchor text
6. **Mobile**: Ensure mobile-friendly design
7. **Speed**: Optimize images and minimize CSS/JS
8. **Structured Data**: Add schema.org markup

---

## Browser DevTools Tips

### Debug Dark Mode
```javascript
// In browser console
document.documentElement.classList.add('dark')      // Enable dark mode
document.documentElement.classList.remove('dark')   // Disable dark mode
```

### Check localStorage
```javascript
localStorage.getItem('theme')  // Check saved theme
localStorage.clear()           // Clear all data
```

### Test Responsive
- Press F12 to open DevTools
- Click device icon (top-left)
- Select different device sizes
- Test touch interactions

---

**Last Updated**: February 16, 2026
