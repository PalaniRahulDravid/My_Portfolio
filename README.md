# 🚀 Rahul's Portfolio

Welcome to my personal portfolio!  
This project showcases my skills, projects, and contact information in a modern, responsive, and interactive web application built with **React**, **Node.js**, and **Tailwind CSS**.

---

## ✨ Features

- **Modern UI:** Clean, elegant, and fully responsive design.
- **Single Page Experience:** All sections (Home, About, Skills, Projects, Contact) are scrollable on the landing page.
- **Multi-Page Support:** Each section is also accessible as a standalone page.
- **Animated Navigation:** Smooth scroll and animated transitions using Framer Motion.
- **Contact Form:** Send me a message directly from the site (powered by Node.js/Nodemailer backend).
- **Mobile Friendly:** Optimized for all devices.
- **Live Project Links:** See my work in action with live demos and GitHub links.

---

## 🛠️ Tech Stack

- **Frontend:** React, Tailwind CSS, Framer Motion, React Icons, Vite
- **Backend:** Node.js, Express, Nodemailer
- **Deployment:** Vercel (Frontend), Render (Backend)
- **Other:** Responsive Design, Modern JavaScript (ES6+)

---

## 📂 Folder Structure

```
my-portfolio/
├── backend/           # Node.js/Express backend (API & email)
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── .env           # (NOT in repo)
│   ├── server.js
│   └── package.json
│
├── src/
│   ├── assets/
│   ├── components/    # Navbar, etc.
│   ├── pages/         # Home, About, Skills, Projects, Contact, Landing
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── public/            # Static files (profile.png, resume, etc.)
├── package.json
├── tailwind.config.js
└── README.md
```

---

## 🚦 How It Works

- **Landing Page (`/`):** Scroll through all sections (Home, About, Skills, Projects, Contact).
- **Navigation:** Navbar links scroll to sections on the landing page, or route to standalone pages.
- **Contact:** Fill out the contact form to send me an email (handled securely by the backend).
- **Responsive:** Looks great on desktop, tablet, and mobile.

---

## 🖥️ Local Development

1. **Clone the repository:**
   ```sh
   git clone https://github.com/PalaniRahulDravid/My_Portfolio.git
   cd My_Portfolio
   ```

2. **Frontend Setup:**
   ```sh
   npm install
   npm run dev
   ```

3. **Backend Setup:**
   ```sh
   cd backend
   npm install
   # Create a .env file with your email credentials (see below)
   npm start
   ```

4. **.env Example (backend/.env):**
   ```
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_gmail_app_password
   TO_EMAIL=your_email@gmail.com
   ```

---

## 🌐 Deployment

- **Frontend:** [Vercel](https://vercel.com/)
- **Backend:** [Render](https://render.com/)

> Make sure to set your environment variables in Render’s dashboard for production!


## 📬 Contact

- **Email:** rahuldravidpalani2005@gmail.com
- **GitHub:** [PalaniRahulDravid](https://github.com/PalaniRahulDravid)
- **LinkedIn:** [palani-rahul-dravid-a89916292](https://www.linkedin.com/in/palani-rahul-dravid-a89916292/)

---

## ⭐️ Show Your Support

If you like this project, please ⭐️ the repo and connect with me!

---

> **Made with ❤️ by Rahul Dravid
