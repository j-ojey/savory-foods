# 🍽️ Savory Bites - Fine Dining Restaurant Website

A fully responsive, multi-page restaurant website built with HTML5, CSS3, and JavaScript. This project demonstrates modern web development practices, interactive features, and a professional design suitable for a real-world fine dining establishment.

## 🌐 Live Demo

**Note:** This website is ready for deployment on platforms like GitHub Pages, Netlify, or Vercel.

## 📋 Project Overview

**Savory Bites** is a complete restaurant website featuring:

- Modern, responsive design that works on all devices
- Interactive menu filtering system
- Form validation for reservations and contact forms
- Smooth animations and transitions
- Accessibility-focused development
- Clean, organized code structure

## 🎯 Project Purpose

This website was created as a final project demonstrating:

- Multi-page website development
- Semantic HTML5 structure
- Responsive CSS design with animations
- JavaScript interactivity and form validation
- Professional code organization and best practices
- Production-ready deployment preparation

## 📁 Project Structure

```
savory-bites/
│
├── index.html              # Home page - Hero section, features, testimonials
├── about.html              # About page - Story, values, team, awards
├── menu.html               # Menu page - Interactive filterable menu
├── reservations.html       # Reservations page - Booking form with validation
├── contact.html            # Contact page - Contact form and info
│
├── css/
│   └── styles.css          # Main stylesheet with responsive design
│
├── js/
│   └── script.js           # JavaScript for interactivity and validation
│
├── images/                 # Folder for website images (external images currently used)
│
└── README.md              # Project documentation
```

## 🌟 Key Features

### 1. **Responsive Design**

- Mobile-first approach
- Breakpoints for tablets and desktops
- Collapsible mobile navigation menu
- Flexible grid layouts

### 2. **Interactive Navigation**

- Sticky header with scroll effects
- Mobile hamburger menu
- Active page indicators
- Smooth scroll to sections

### 3. **Menu Page**

- Filter menu by categories (All, Appetizers, Mains, Desserts, Beverages)
- Animated item displays
- Detailed item descriptions with prices
- Category tags for dietary information

### 4. **Form Validation**

- Real-time input validation
- Email format validation
- Phone number validation
- Date validation (future dates only)
- Required field checking
- User-friendly error messages
- Success confirmation messages

### 5. **Visual Enhancements**

- CSS animations and transitions
- Hover effects on cards and buttons
- Fade-in animations on scroll
- Smooth page transitions
- Gradient backgrounds
- Box shadows for depth

### 6. **Accessibility**

- Semantic HTML5 elements
- ARIA labels for buttons
- Focus states for keyboard navigation
- Alt text ready for images
- Proper heading hierarchy

## 💻 Technologies Used

- **HTML5**: Semantic markup and structure
- **CSS3**:
  - Flexbox and Grid layouts
  - CSS Variables for theming
  - Media queries for responsiveness
  - Animations and transitions
- **JavaScript (ES6+)**:
  - DOM manipulation
  - Event listeners
  - Form validation
  - Dynamic content filtering
  - Intersection Observer API

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code, Sublime Text, etc.) for modifications
- Basic knowledge of HTML, CSS, and JavaScript

### Installation

1. **Clone or download this repository**

   ```bash
   git clone <repository-url>
   cd savory-bites
   ```

2. **Open the project**

   - Simply open `index.html` in your web browser
   - Or use a local development server like Live Server (VS Code extension)

3. **View the website**
   - Navigate through all pages using the navigation menu
   - Test the interactive features (menu filter, forms)
   - Resize your browser to see responsive design

## 📱 Page Descriptions

### Home Page (`index.html`)

- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **Features Section**: Highlights restaurant's key selling points
- **Featured Menu**: Showcases chef's special dishes
- **Testimonials**: Customer reviews and ratings
- **Call to Action**: Encourages reservations

### About Page (`about.html`)

- **Our Story**: Restaurant's history and mission
- **Core Values**: Sustainability, passion, excellence, community
- **Meet the Team**: Key staff members with photos and bios
- **Awards & Recognition**: Achievements and certifications

### Menu Page (`menu.html`)

- **Interactive Filter**: Sort by food categories
- **Menu Categories**: Organized sections for easy browsing
- **Item Details**: Name, description, price, and dietary tags
- **Special Note**: Information about dietary accommodations

### Reservations Page (`reservations.html`)

- **Booking Information**: Hours, capacity, and contact details
- **Reservation Form**: Comprehensive booking form with validation
- **Policy Information**: Cancellation, dress code, and other policies
- **Success Confirmation**: Feedback after form submission

### Contact Page (`contact.html`)

- **Contact Information**: Address, phone, email, hours
- **Contact Form**: Message form with subject selection
- **Map Section**: Location placeholder with directions link
- **FAQ Section**: Common questions and answers

## 🎨 Design Features

### Color Palette

- **Primary**: `#d4a574` (Warm gold)
- **Secondary**: `#2c2c2c` (Dark gray)
- **Accent**: `#8b4513` (Saddle brown)
- **Background**: `#f9f9f9` (Light gray)
- **Text**: `#1a1a1a` (Near black)

### Typography

- **Headings**: Georgia (serif) - Classic, elegant
- **Body**: Segoe UI (sans-serif) - Clean, readable

### Layout Principles

- Consistent spacing using CSS variables
- Maximum content width for readability
- Balanced white space
- Clear visual hierarchy
- Card-based design for content sections

## ⚙️ JavaScript Functionality

### Mobile Menu Toggle

- Hamburger menu for mobile devices
- Smooth slide-in animation
- Closes on link click or outside click

### Form Validation

- **Reservation Form**:
  - Name validation (minimum length)
  - Email format verification
  - Phone number validation
  - Date validation (future dates only)
  - Required field checks
- **Contact Form**:
  - Name and email validation
  - Subject selection required
  - Message minimum length check

### Menu Filtering

- Dynamic category filtering
- Smooth animations on filter
- Show/hide categories based on selection

### Scroll Effects

- Header shadow on scroll
- Fade-in animations for cards
- Scroll-to-top button
- Smooth scrolling for anchor links

## 📝 Best Practices Implemented

1. **Code Organization**

   - Separated concerns (HTML, CSS, JS in different files)
   - Organized folder structure
   - Commented code for clarity

2. **Semantic HTML**

   - Proper use of semantic tags (`<header>`, `<nav>`, `<section>`, `<footer>`)
   - Meaningful class names
   - Accessible form labels

3. **CSS Methodology**

   - CSS variables for maintainability
   - Mobile-first responsive design
   - Reusable component classes
   - BEM-inspired naming conventions

4. **JavaScript**

   - Event delegation where appropriate
   - DRY (Don't Repeat Yourself) principles
   - Clear function names and purposes
   - Error handling in forms

5. **Performance**
   - Minimal DOM manipulations
   - Efficient event listeners
   - Optimized animations
   - No external dependencies

## 🌐 Browser Compatibility

Tested and working on:

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🚀 Deployment Instructions

### GitHub Pages

1. Push code to GitHub repository
2. Go to repository Settings > Pages
3. Select main branch as source
4. Save and wait for deployment
5. Access at `https://yourusername.github.io/repository-name`

### Netlify

1. Create account at [Netlify](https://www.netlify.com)
2. Drag and drop project folder or connect GitHub repo
3. Deploy automatically
4. Get live URL

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in project directory
3. Follow prompts
4. Get live URL

## 🔧 Customization Guide

### Changing Colors

Edit CSS variables in `css/styles.css`:

```css
:root {
  --primary-color: #your-color;
  --secondary-color: #your-color;
  /* etc. */
}
```

### Adding Images

You can either link to externally hosted, royalty-free images (as this project currently does), or place assets locally:

1. Use trusted, free sources like Unsplash or Pexels and link directly, e.g.:

```html
<img src="https://images.unsplash.com/photo-..." alt="Description" />
```

2. Or place images in `images/` and reference locally:

```html
<img src="images/your-image.jpg" alt="Description" />
```

### Updating Content

- Edit HTML files directly
- Update menu items in `menu.html`
- Change contact information in footer

## 📧 Contact Information (Demo)

**Savory Bites Restaurant**

- 📍 123 Culinary Avenue, Food District
- 📞 (555) 123-4567
- ✉️ info@savorybites.com
- 🌐 www.savorybites.com

## 👨‍💻 Development

### Local Development

```bash
# Using Python
python -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## 📄 License

This project is created for educational purposes as part of a web development course. Feel free to use it as a template for your own projects.

## 🙏 Acknowledgments

- Hero and content photography sourced from Unsplash (Unsplash License)
- Google Maps embedded for location display
- Design inspired by modern restaurant websites
- CSS animations and transitions for enhanced UX
- Web development best practices from industry standards

## 📚 Learning Outcomes

Through this project, the following skills were demonstrated:

✅ HTML5 semantic structure and best practices  
✅ CSS3 responsive design and animations  
✅ JavaScript DOM manipulation and event handling  
✅ Form validation and user feedback  
✅ Mobile-first responsive development  
✅ Code organization and file structure  
✅ Accessibility considerations  
✅ Cross-browser compatibility  
✅ Project documentation  
✅ Deployment preparation

## 🎓 Assignment Completion

This project fulfills all requirements of the final web development assignment:

- ✅ **Part 1**: Planned multi-page structure with clear user journey
- ✅ **Part 2**: Built with HTML5, CSS, and JavaScript with responsive design
- ✅ **Part 3**: Organized code structure with comments and best practices
- ✅ **Part 4**: Ready for deployment (deployment instructions included)

---

**Built with ❤️ for web development education**

_Last Updated: November 2025_
