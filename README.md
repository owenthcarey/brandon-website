# Dental Practice Website

A modern, responsive website for a dental practice built with HTML, CSS, and JavaScript. This is a completely static website that includes all the essential features for a professional dental practice online presence.

## Features

- **Modern, Responsive Design**: Clean layout that works on all devices from mobile to desktop
- **Comprehensive Website Structure**: Homepage with multiple sections (hero, about, services, appointments, testimonials, contact)
- **Calendly Integration**: Seamless appointment booking through Calendly
- **JavaScript-based Contact Form**: Static contact form with validation and feedback
- **Additional Pages**: Privacy Policy, Terms of Service, and 404 error page
- **Performance Optimized**: Configured with best practices for speed and performance

## Project Structure

```
├── index.html              # Main homepage with all sections
├── privacy.html            # Privacy policy page
├── terms.html              # Terms of service page
├── 404.html                # Custom 404 error page
├── css/
│   └── styles.css          # All styling for the website
├── js/
│   └── script.js           # JavaScript functionality
└── images/                 # Directory for website images
```

## Setup Instructions

### 1. Basic Setup

1. Download or clone this repository
2. Replace placeholder content with your dental practice information:
   - Business name
   - Contact details (address, phone, email)
   - Business hours
   - Services offered
   - Team information
   - Testimonials
   - Replace placeholder images with your own

### 2. Calendly Integration

1. Create a free account at [Calendly](https://calendly.com/)
2. Set up your available appointment types and times
3. Replace the Calendly URL in `index.html` (search for "calendly.com" to find it)
4. Customize the display settings as needed

### 3. Hosting Your Site

This is a static website, so it can be hosted on any web hosting service:

1. Purchase a domain name (ideally your practice name)
2. Choose a hosting provider (options include Netlify, Vercel, GitHub Pages, or traditional hosts)
3. Upload all files to your hosting provider
4. Point your domain to your hosting provider

### 4. Testing

Before launching, test:
- Form validation and submission
- Calendly integration
- Responsive design on various devices
- All links and navigation
- Check for any placeholder content that needs replacement

## Customization

### Styling

Edit `css/styles.css` to change colors, fonts, spacing, or other visual elements. The primary colors and fonts can be adjusted at the top of the file in the CSS variables section.

### Adding New Pages

To add new pages:
1. Create a new HTML file based on the existing page templates
2. Add navigation links to the new page in the header and footer of all pages

### Calendly

To customize the Calendly integration, modify the Calendly script at the bottom of `index.html`. You can adjust:
- URL (to point to your specific calendar)
- Size/dimensions
- Default information
- Colors (through your Calendly account)

## Technologies Used

- HTML5
- CSS3 (with Flexbox and Grid for layouts)
- JavaScript (ES6+)
- Google Fonts
- Font Awesome icons
- Calendly for appointment scheduling

## Browser Support

This website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## License

[Specify your preferred license]

## Credits

- Font Awesome for icons
- Google Fonts for typography
- Calendly for appointment integration

---

For questions or support, contact [Your Contact Information] 