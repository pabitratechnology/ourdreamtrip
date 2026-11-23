# Our Dream Trip — Premier Odisha & Incredible India Travel Platform

A full-stack, enterprise-grade travel and tourism portal built with React, Node.js/Express, Nodemailer, TipTap editor, and responsive CSS.

Official Repository: [https://github.com/pabitratechnology/ourdreamtrip.git](https://github.com/pabitratechnology/ourdreamtrip.git)

---

## 🌟 Key Features

1. **Frontend Experience (React + Vite)**:
   - **32+ Handcrafted Tour Packages**: 18 Odisha itineraries & 14 Incredible India holiday circuits with real authentic photography.
   - **Interactive Mega Menus**: Tabbed car rental categories and multi-column Odisha/India tour packages with spotlight offer cards.
   - **Smart Slug & Typo Resilience**: Handles direct slugs and fuzzy matches without 404 errors.
   - **Real Photo Gallery**: Authentic destination gallery with category filtering and interactive lightboxes.
   - **Travel Blogs & Guides**: Rich article content with TipTap support.
   - **SEO & Compliance Ready**: Includes `/robots.txt`, `/sitemap.xml`, `/sitemap.html`, and comprehensive policies (Privacy, Terms, Cancellation).

2. **Backend Engine (Node.js + Express)**:
   - **Automated Nodemailer Integration**: Instant dispatch of customer tour inquiries and custom trip requests directly to `ourdreamtrip1@gmail.com`.
   - **Dedicated Admin Management Portal**: Independent pages for Dashboard, Bookings, Packages, Real Gallery, Blogs, Contacts, and SMTP Settings.
   - **Rich Media Uploads**: Secure image file upload endpoints for mobile and desktop photos.

---

## 🚀 Getting Started

### 1. Prerequisites
- Node.js >= 18.x
- npm >= 9.x

### 2. Installation
Install root dependencies and submodule dependencies:
```bash
npm run install:all
```
*(Or install individually: `cd frontend && npm install` and `cd backend && npm install`)*

### 3. Environment Variables
Copy the example environment configuration in `backend/.env.example` to `backend/.env`:
```env
PORT=5000
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=ourdreamtrip1@gmail.com
SMTP_PASS=azugiplrtirgejnf
ADMIN_NOTIFICATION_EMAIL=ourdreamtrip1@gmail.com
JWT_SECRET=your_jwt_secret_key_here
ADMIN_USER=odt_manager
ADMIN_PASS=Odishatrip@2026#Secure
```

### 4. Running the Platform
Start both Frontend (Port 5173) and Backend API (Port 5000) simultaneously:
```bash
npm run dev
```

---

## 📂 Project Architecture

```
travel-new-main/
├── backend/
│   ├── data/            # JSON data storage (db.json)
│   ├── routes/          # Express API routes (packages, bookings, blogs, gallery, upload, admin)
│   ├── services/        # Nodemailer email dispatcher
│   ├── uploads/         # Destination and blog uploads
│   └── server.js        # Backend entrypoint
├── frontend/
│   ├── public/          # Static assets, images, robots.txt, sitemap.xml, sitemap.html
│   └── src/
│       ├── components/  # Header, Footer, Hero, SearchPanel, Lightbox, etc.
│       ├── data/        # Packages dataset, vehicle fleet, 30 districts data
│       ├── pages/       # Home, Packages, VehicleDetails, Blogs, Admin, Static
│       ├── routes/      # AppRoutes with smart slug resolution
│       └── styles/      # Global styling & responsive breakpoints
├── package.json         # Workspace scripts
└── README.md
```

---

## 📄 License & Attribution
Maintained and created with love by **[Pabitra Technology](https://www.pabitratechnology.com)** for **Our Dream Trip - Holidays & Tours**.
