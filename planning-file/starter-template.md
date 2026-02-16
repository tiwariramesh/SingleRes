# Professional Resume Website - Starter Template

A modern, responsive portfolio and resume website template inspired by atutgorkhali.com.np. Built with HTML5, Tailwind CSS, jQuery, and Lucide Icons.

## Features

- ✨ **Modern Design**: Clean, professional, and visually appealing
- 🌙 **Dark Mode**: Built-in dark mode with localStorage persistence
- 📱 **Responsive**: Fully responsive design for mobile, tablet, and desktop
- ⚡ **Fast Loading**: Lightweight, optimized for performance
- 🎨 **Customizable**: Easy to customize colors, content, and layout
- 🔄 **Modular Architecture**: Component-based structure for easy maintenance
- ✅ **Accessibility**: Semantic HTML and WCAG compliant
- �� **Smooth Animations**: Scroll-triggered animations and transitions

## Project Structure

```
project-root/
├── index.html                          # Main entry point
├── assets/
│   ├── css/
│   │   └── styles.css                 # Custom animations and utilities
│   ├── img/
│   │   └── profile.jpg                # Your profile image
│   └── documents/
│       ├── resume.pdf                 # Your resume (PDF)
│       └── resume.txt                 # Your resume (ATS-friendly)
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
└── README.md                          # This file
```

## Technologies Used

| Technology | Purpose |
|---|---|
| **HTML5** | Semantic markup and page structure |
| **Tailwind CSS** | Utility-first CSS framework |
| **jQuery** | DOM manipulation and component loading |
| **Lucide Icons** | SVG icon library |
| **Google Fonts** | Typography (Inter font) |

## Getting Started

### 1. Clone or Download

Download the template files to your local machine.

### 2. Customize Content

Edit the component files in `src/components/` to add your information:

- **header.html**: Update your name/initials and navigation links
- **hero.html**: Add your headline, subtitle, and profile image
- **skills.html**: List your skills and competencies
- **experience.html**: Add your work experience
- **education.html**: Include your academic credentials
- **services.html**: Describe services you offer
- **contact.html**: Add your contact information
- **footer.html**: Update footer information

### 3. Add Your Images

Replace placeholder images:
- `assets/img/profile.jpg`: Your professional profile photo

### 4. Add Your Documents

Place your resume files in `assets/documents/`:
- `resume.pdf`: Visual resume for human recruiters
- `resume.txt`: ATS-friendly plain text version

### 5. Update Links

Update all links to point to your actual pages and resources:
- Email links
- Social media profiles
- External websites
- Document downloads

### 6. Test Locally

Open `index.html` in your web browser to test locally. For best results, use a local development server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## Customization Guide

### Change Colors

Edit the Tailwind configuration in `index.html`:

```javascript
tailwind.config = {
    theme: {
        extend: {
            // Customize colors here
        }
    }
}
```

Or modify the color classes in component files:
- `.from-indigo-600` → `.from-blue-600`
- `.to-indigo-700` → `.to-blue-700`

### Change Fonts

Update the Google Fonts link in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@100..900&display=swap" rel="stylesheet">
```

Then update the font-family in `index.html`:

```javascript
fontFamily: { sans: ['YourFont', 'sans-serif'] }
```

### Modify Layout

Adjust grid columns and spacing:
- `.md:grid-cols-3` → `.md:grid-cols-2` (change number of columns)
- `.gap-6` → `.gap-8` (increase gap between items)
- `.py-20` → `.py-32` (increase vertical padding)

### Add/Remove Sections

To add a new section:

1. Create a new HTML file in `src/components/`
2. Add a container div in `index.html`
3. Add component loader in the JavaScript section

```javascript
loadComponent('new-section', './src/components/new-section.html');
```

## Features Explained

### Dark Mode

The website includes built-in dark mode support:
- Toggle button in header
- Preference saved in localStorage
- Smooth transitions between modes
- All components styled for both modes

### Responsive Design

The template uses Tailwind CSS breakpoints:
- **Mobile**: < 640px (default styles)
- **Tablet**: 640px - 1024px (`md:` prefix)
- **Desktop**: > 1024px (`lg:` prefix)

### Animations

Smooth animations are triggered when elements enter the viewport:
- Fade-in-up animation for sections
- Floating animation for badges
- Gradient animation for text
- Hover effects on interactive elements

### Component Loading

Components are loaded dynamically using jQuery:
- Modular structure for easy maintenance
- Lazy loading of components
- Automatic Lucide icon initialization
- Intersection Observer for scroll animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Optimize Images**: Compress images before uploading
   - Use tools like TinyPNG or ImageOptim
   - Consider WebP format for better compression

2. **Minify CSS/JS**: Reduce file sizes
   - Use online minifiers or build tools
   - Remove unused CSS with PurgeCSS

3. **Lazy Load Images**: Load images on demand
   - Add `loading="lazy"` attribute to images
   - Use Intersection Observer for custom loading

4. **Cache Static Assets**: Enable browser caching
   - Set cache headers on your server
   - Use a CDN for faster delivery

5. **Reduce HTTP Requests**: Combine files where possible
   - Inline small CSS/JS
   - Use CSS sprites for icons (or stick with SVG)

## Deployment

### Option 1: GitHub Pages

1. Create a GitHub repository
2. Push your files to the repository
3. Enable GitHub Pages in repository settings
4. Your site will be live at `username.github.io/repo-name`

### Option 2: Netlify

1. Connect your GitHub repository
2. Set build command: (leave empty for static sites)
3. Set publish directory: `.` (root)
4. Deploy!

### Option 3: Vercel

1. Import your GitHub repository
2. Vercel automatically detects it's a static site
3. Deploy with one click!

### Option 4: Traditional Hosting

1. Upload files to your web host via FTP/SFTP
2. Ensure `index.html` is in the root directory
3. Visit your domain to see the live site

## Accessibility

The template includes accessibility features:
- Semantic HTML structure
- ARIA labels on buttons
- Keyboard navigation support
- Color contrast compliance (WCAG AA)
- Focus indicators on interactive elements

To further improve accessibility:
- Add alt text to all images
- Use descriptive link text
- Test with screen readers
- Ensure keyboard-only navigation works

## SEO Optimization

To improve search engine visibility:

1. **Update Meta Tags** in `index.html`:
   ```html
   <title>Your Name - Your Title</title>
   <meta name="description" content="Your professional summary">
   ```

2. **Add Open Graph Tags**:
   ```html
   <meta property="og:title" content="Your Name">
   <meta property="og:description" content="Your summary">
   <meta property="og:image" content="path/to/image.jpg">
   ```

3. **Add Structured Data**:
   ```html
   <script type="application/ld+json">
   {
     "@context": "https://schema.org",
     "@type": "Person",
     "name": "Your Name",
     "jobTitle": "Your Title"
   }
   </script>
   ```

4. **Create Sitemap**: Generate and submit to search engines

## Troubleshooting

### Components Not Loading

**Problem**: Components appear blank or don't load.

**Solution**:
- Check browser console for errors (F12)
- Verify file paths are correct
- Ensure jQuery is loaded before component loader
- Check that files exist in `src/components/` directory

### Dark Mode Not Working

**Problem**: Dark mode toggle doesn't work or colors look wrong.

**Solution**:
- Verify localStorage is enabled in browser
- Check that `.dark` class is applied to `<html>` element
- Ensure `styles.css` is linked correctly
- Test in a different browser

### Images Not Showing

**Problem**: Images appear as broken links.

**Solution**:
- Verify image file paths are correct
- Check that images are in `assets/img/` directory
- Ensure image file names match exactly (case-sensitive)
- Try using absolute paths instead of relative paths

### Animations Not Smooth

**Problem**: Animations are choppy or don't play.

**Solution**:
- Check that `styles.css` is loaded
- Verify Tailwind CSS CDN is accessible
- Disable browser extensions that might interfere
- Try a different browser

## Customization Examples

### Change Primary Color

Replace all instances of `indigo` with your preferred color:

```bash
# Find and replace in all files
# indigo-600 → blue-600
# indigo-400 → blue-400
# indigo-500 → blue-500
```

### Add Social Media Links

In `footer.html`, add social media icons:

```html
<div class="flex gap-4 justify-center mt-4">
    <a href="https://twitter.com/yourhandle" class="hover:text-indigo-400">
        <i data-lucide="twitter" class="w-5 h-5"></i>
    </a>
    <a href="https://linkedin.com/in/yourprofile" class="hover:text-indigo-400">
        <i data-lucide="linkedin" class="w-5 h-5"></i>
    </a>
</div>
```

### Add Contact Form

In `contact.html`, add a form:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="max-w-md mx-auto">
    <input type="email" name="email" placeholder="Your email" required>
    <textarea name="message" placeholder="Your message" required></textarea>
    <button type="submit" class="bg-indigo-600 text-white px-6 py-2 rounded-lg">Send</button>
</form>
```

## License

This template is free to use and modify for personal and commercial projects.

## Credits

- **Template Inspiration**: atutgorkhali.com.np
- **CSS Framework**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide Icons](https://lucide.dev/)
- **Fonts**: [Google Fonts](https://fonts.google.com/)
- **DOM Manipulation**: [jQuery](https://jquery.com/)

## Support

For questions or issues:
1. Check the documentation files included
2. Review the component structure guide
3. Test in different browsers
4. Check browser console for error messages

## Version History

**v1.0** (February 2026)
- Initial release
- 11 component templates
- Dark mode support
- Responsive design
- Smooth animations

---

**Happy Building! 🚀**

For more information, refer to:
- `WEBSITE_ANALYSIS.md` - Detailed technical analysis
- `COMPONENT_STRUCTURE_GUIDE.md` - Component documentation
