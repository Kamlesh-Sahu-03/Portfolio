# Kamlesh Kumar Sahu - Portfolio

A responsive personal portfolio website showcasing skills, projects, and experience as a Full-Stack Web Developer.

## 🌐 About This Portfolio

This is a modern, fully responsive portfolio website built to showcase professional work, technical skills, and educational background. The site features smooth navigation, interactive elements, and a contact form for potential clients and recruiters.

## 📋 Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Interactive Navigation** - Mobile-friendly hamburger menu
- **Hero Section** - Eye-catching introduction with profile image and CTA button
- **Skills Showcase** - Visual display of technical competencies with icons
- **Projects Gallery** - Showcase of completed projects with tech stacks and links
- **Education Timeline** - Academic background and credentials
- **Contact Form** - Fully functional contact form with EmailJS integration
- **Social Links** - Direct links to LinkedIn, GitHub, WhatsApp, and Email
- **Smooth Animations** - Enhanced user experience with CSS transitions

## 🛠️ Technologies Used

### Frontend
- **HTML5** - Semantic markup and structure
- **CSS3** - Styling with custom properties and animations (53.9%)
- **JavaScript** - Interactivity and form validation (5.3%)
- **Bootstrap 5** - Responsive grid framework
- **Font Awesome 6** - Icon library

### Backend Services
- **EmailJS** - Email service for contact form

### Development Tools
- **Git & GitHub** - Version control
- **Responsive CSS** - Media queries for multi-device support

## 📁 Project Structure

```
Portfolio/
├── index.html           # Main HTML file with all sections
├── style.css            # Primary styles and layouts
├── responsive.css       # Media queries for responsive design
├── script.js            # JavaScript for interactivity
├── images/              # Image assets folder
│   ├── KK3.jpeg        # Profile photo
│   ├── project1.jpg    # E-Commerce Platform project image
│   ├── project3.jpg    # Task Management App project image
│   └── resume.pdf      # Resume download link
└── README.md           # Project documentation (this file)
```

## 🎯 Sections Overview

### 1. **Navigation Bar**
- Sticky header with logo
- Mobile hamburger menu
- Quick links to all sections

### 2. **Hero Section**
- Professional introduction
- Profile image
- Download resume CTA button

### 3. **Technical Skills**
- 12+ skill categories displayed as cards
- Includes: Java, HTML, CSS, Bootstrap, Tailwind, JavaScript, React, Node.js, Express.js, MongoDB, MySQL, Git & GitHub

### 4. **Projects**
- **E-Commerce Platform** - Full-stack application with React, Node.js, MongoDB, and Stripe
- **Task Management App** - Mobile app using React Native, Firebase, and Redux

### 5. **Education**
- **MCA (Master of Computer Application)** - 2024-Present at MCRPV, Bhopal
- **BCA (Bachelor of Computer Application)** - 2021-2024 at MCRPV, Bhopal (CGPA: 6.78)

### 6. **Contact Form**
- Full Name input
- Email input
- Mobile Number validation (10 digits)
- Message textarea
- Form validation and error handling
- EmailJS integration for sending messages

### 7. **Footer**
- Social media links (LinkedIn, GitHub, WhatsApp, Email)
- Copyright information

## 🚀 Getting Started

### Prerequisites
- A modern web browser
- No additional installations required

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Kamlesh-Sahu-03/Portfolio.git
```

2. Navigate to the project directory:
```bash
cd Portfolio
```

3. Open the `index.html` file in your web browser:
```bash
# On Windows
start index.html

# On macOS
open index.html

# On Linux
firefox index.html
```

## 📧 Contact Form Setup

The contact form uses **EmailJS** for email delivery. To enable it:

1. Visit [EmailJS](https://www.emailjs.com/) and create an account
2. Create an email service and template
3. Replace the service ID and template ID in the code:
```javascript
// In index.html - line 18
emailjs.init("YOUR_PUBLIC_KEY");
```

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Customization

### Colors
Edit the CSS variables in `style.css` to change the color scheme:
```css
:root {
    --primary-color: #your-color;
    --secondary-color: #your-color;
}
```

### Content
Update text, images, and links directly in `index.html`:
- Profile information in the Hero section
- Skills in the Technical Skills section
- Project details in the Projects section
- Education details in the Education section

### Resume
Replace `images/resume.pdf` with your own resume file

## 📈 Performance

- Lightweight CSS framework (Bootstrap CDN)
- Optimized image assets
- Minimal JavaScript footprint
- Fast loading times

## 🔗 Links & Resources

- **Portfolio Website**: [kamlesh-sahu-03.github.io/Portfolio](https://github.com/Kamlesh-Sahu-03/Portfolio)
- **GitHub Profile**: [github.com/Kamlesh-Sahu-03](https://github.com/Kamlesh-Sahu-03)
- **LinkedIn**: [linkedin.com/in/kamleshsahu03](https://www.linkedin.com/in/kamleshsahu03/)
- **Email**: kamleshsahu1620@gmail.com
- **WhatsApp**: [+91 8602398996](https://wa.me/918602398996)

## 📊 Language Composition

- CSS: 53.9%
- HTML: 40.8%
- JavaScript: 5.3%

## 🤝 Contributing

This is a personal portfolio project. For suggestions or improvements, feel free to fork and create a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Made with ❤️ by Kamlesh Kumar Sahu**

Last Updated: July 7, 2026
