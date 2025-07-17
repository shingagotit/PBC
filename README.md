# Plan B Construction - Professional Construction Website

A modern, responsive website for Plan B Construction featuring 24/7 emergency response services, admin dashboard, and comprehensive service management.

## 🌟 Features

### Core Website Features
- **Responsive Design** - Works perfectly on all devices
- **Modern UI/UX** - Clean, professional interface
- **Service Management** - Dynamic service listings
- **Project Gallery** - Showcase construction projects
- **Contact Forms** - Multiple contact methods
- **Search Functionality** - Find services quickly
- **PWA Support** - Install as mobile app

### Admin Dashboard
- **Service Management** - Add/edit/delete services
- **Booking System** - Manage quote requests
- **Calendar Integration** - Schedule appointments
- **Quote Processing** - Handle customer quotes
- **Email Notifications** - Automated responses
- **Real-time Updates** - Live admin notifications

## 🚀 Quick Start

### Local Development
```bash
# Start local server
npm start
# or
npx serve . -l 3000

# Open browser to http://localhost:3000
```

### Direct File Access
1. Download all files
2. Open `index.html` in a web browser
3. Website will redirect to `main.html`

## 📁 File Structure

```
Plan B Construction Website/
├── index.html          # Landing page (redirects to main.html)
├── main.html           # Main website
├── quote.html          # Quote request form
├── manifest.json       # PWA manifest
├── sw.js              # Service worker
├── robots.txt         # SEO robots file
├── sitemap.xml        # SEO sitemap
├── .htaccess          # Apache configuration
├── _redirects         # Netlify redirects
├── package.json       # Node.js configuration
└── src/
    └── img/           # Images and assets
```

## 🌐 Deployment Options

### 1. Netlify (Recommended)
- Push code to GitHub repository
- Connect to Netlify
- Set build command: (leave empty)
- Set publish directory: .
- Deploy!

### 2. Vercel
```bash
npm i -g vercel
vercel --prod
```

### 3. Apache Server
- Upload files to web root
- .htaccess file handles configuration
- Ensure mod_rewrite is enabled

### 4. GitHub Pages
- Push to GitHub repository
- Enable GitHub Pages in repository settings
- Select source: main branch

## 🔧 Configuration

### Admin Dashboard Access
- **Activation**: Click the logo 5 times
- **Username**: `Admin`
- **Password**: `Admin`

### Contact Information
- **Phone**: (404) 374-7675
- **Email**: office@planbconstructioninc.com
- **Address**: Georgia, USA

## 📱 Mobile App (PWA)

### Install on Mobile
1. Open website in Chrome/Safari
2. Look for "Add to Home Screen" prompt
3. Follow installation steps
4. App will work offline

## 🔒 Security Features

- **HTTPS Enforcement** - Automatic redirect
- **Security Headers** - XSS protection, CSP
- **Input Validation** - Form protection
- **Admin Protection** - Secure access

## 📞 Support

### Contact Information
- **Website**: https://planbconstructioninc.com
- **Email**: office@planbconstructioninc.com
- **Phone**: (404) 374-7675

### Emergency Services
- **24/7 Availability**: Yes
- **Emergency Line**: (404) 374-7675
- **Response Time**: Immediate
- **Coverage Area**: Georgia

---

**Plan B Construction** - Professional construction services with 24/7 emergency response.