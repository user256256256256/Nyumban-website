# **NPS Landing Page**
A **modern web application** built with **React, Tailwind CSS, Node.js, and PostgreSQL**, designed to provide a seamless user experience with efficient backend data handling.

## **Project Overview**
This application serves as a landing page for NPS, integrating a frontend built with **React & Tailwind CSS**, and a backend powered by **Node.js & PostgreSQL**.

## **Tech Stack**
- **Frontend:** React, Tailwind CSS, Vite
- **Backend:** Node.js, Express, PostgreSQL
- **Deployment:** GitHub Pages (frontend), Node server (backend)
- **Build Tool:** Vite
- **Linting:** ESLint
- **Package Management:** npm

## **Folder Structure**
```plaintext
your-project/
│── server/                 # Backend
│   ├── database.js         # Database connection
│   ├── server.js           # Express app entry point
│   ├── routes/             # API routes
│── src/                    # Frontend
│   ├── components/         # Reusable UI components
│   ├── pages/              # Individual pages
│   ├── sections/           # Reusable Sections
│   ├── services/           # API request functions
│   ├── utils.jsx           # Utility librabries
│   ├── services/           # API request functions
│   ├── index.css/          # Styling 
│   ├── App.jsx             # Root component
│   ├── main.jsx/           # Initializes  App
│── public/                 # Public assets
│── package.json            # Project metadata
│── .env                    # Environment variables
│── .index.html             # App main entry point
```

## **Scripts**
```json
"scripts": {
  "dev": "vite",
  "build": "vite build",
  "lint": "eslint .",
  "preview": "vite preview",
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist",
  "server": "nodemon server/server.js"
}
```
- **`npm run dev`** – Start the development server.
- **`npm run build`** – Build the production-ready application.
- **`npm run lint`** – Check code quality using ESLint.
- **`npm run preview`** – Preview the built app.
- **`npm run server`** – Start the backend with `nodemon`.

## **Dependencies**
### Production
- **React** (`^19.0.0`) – Frontend framework
- **Tailwind CSS** (`^4.0.14`) – Utility-based styling
- **Express** (`^4.21.2`) – Web server framework
- **PostgreSQL (pg)** (`^8.14.1`) – Database integration
- **Cors** (`^2.8.5`) – Handles cross-origin requests

### Development
- **Vite** (`^6.2.0`) – Fast build tool
- **ESLint** (`^9.21.0`) – Code quality & linting
- **gh-pages** (`^6.3.0`) – GitHub Pages deployment
- **Nodemon** (`^3.1.9`) – Automatic backend server restarts

## **Environment Variables**
Create a `.env` file in the root directory with:
```plaintext
DATABASE_URL=your-database-url
PORT=5000
```

## **Setup & Installation**
1. Clone the repository:
```sh
git clone https://github.com/user256256256256/Nyumbani-verified.git
```
2. Navigate into the project:
```sh
cd your-project
```
3. Install dependencies:
```sh
npm install
```
4. Start the frontend:
```sh
npm run dev
```
5. Start the backend:
```sh
npm run server
```

## **Deployment**
- **Frontend:** Hosted via **GitHub Pages** (`npm run deploy`)
- **Backend:** Hosted on **a server** (`npm run server`)

## **Contributing**
Only those with access are allowed to Contribute to the Project.
- Fork the repository
- Create feature branches
- Submit pull requests


## **Icons Provide**
The icons used in the landing page are provided by ICONS8 and a link should be added where their icons are use. 
"<a target="_blank" href="https://icons8.com/icon/PpSBa7iaIak3/menu">Menu</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
"

## **Copyright**
© 2025 **NPS**. All rights reserved.
