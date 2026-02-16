# Website Analysis: atutgorkhali.com.np

This document provides a detailed analysis of the website https://atutgorkhali.com.np/, covering its technology stack, content structure, and design. The goal is to provide a blueprint for creating a similar resume website.

## 1. Technology Stack

The website is a static, single-page application built with modern front-end technologies. It does not use a complex backend or database, which is typical for a personal portfolio.

| Technology | Usage |
|---|---|
| **HTML** | The core structure of the website is standard HTML5. |
| **CSS (Tailwind CSS)** | The website uses [Tailwind CSS](https://tailwindcss.com/) for its styling. This is a utility-first CSS framework that allows for rapid UI development. Custom styles and animations are defined in a separate `styles.css` file. |
| **JavaScript (jQuery)** | The site uses [jQuery](https://jquery.com/) for DOM manipulation and for dynamically loading different sections of the page from separate HTML files. This modular approach keeps the main `index.html` file clean and organized. |
| **Lucide Icons** | The website uses [Lucide](https://lucide.dev/) for its icons. |
| **Google Fonts** | The "Inter" font is used throughout the website, loaded from [Google Fonts](https://fonts.google.com/). |
| **Apache Server** | The website is hosted on an Apache server. This is a popular, open-source web server. |

## 2. Website Structure

The website is a single-page design, with a clear and logical structure. The content is divided into the following sections, each loaded from a separate HTML file:

- **Header (`header.html`)**: Contains the navigation bar, logo, and a "Hire Me" call-to-action button.
- **Hero (`hero.html`)**: The main landing area with a prominent headline, a brief introduction, and a picture of the individual.
- **Resume (`resume.html`)**: A section for downloading the resume in different formats.
- **Skills (`skills.html`)**: Lists the individual's core competencies.
- **Experience (`experience.html`)**: A timeline of the individual's career journey.
- **Projects (`projects.html`)**: A section to showcase projects (currently not implemented in the live site).
- **Education (`education.html`)**: Details of academic qualifications.
- **Services (`services.html`)**: An overview of the services offered.
- **Social Proof (`social-proof.html`)**: A section for testimonials or logos of trusted companies.
- **Contact (`contact.html`)**: Contact information and links to social media.
- **Footer (`footer.html`)**: The website footer with copyright information and other links.

## 3. Content and Design

The website has a clean, modern, and professional design. Here are some key design elements:

- **Single-Page Layout**: All content is on a single page, accessible by scrolling or through the navigation bar.
- **Modular Loading**: The use of jQuery to load content from separate files makes the site easy to manage and update.
- **Responsive Design**: The website is fully responsive and adapts well to different screen sizes.
- **Dark Mode**: A theme toggle allows users to switch between light and dark modes.
- **Animations**: Subtle animations, such as fade-in effects and floating elements, are used to enhance the user experience.
- **Clear Call-to-Actions**: Buttons like "Hire Me" and "Contact Me" are prominently displayed.

## 4. Cloning the Website

To clone this website, you would need to recreate the HTML, CSS, and JavaScript files. The modular structure makes this relatively straightforward. You would create a main `index.html` file and then separate HTML files for each section (header, hero, skills, etc.). The CSS would be handled by Tailwind CSS, and the dynamic loading of sections would be managed by jQuery.
