# Singapore Internet History (1998–2025)

A three-page responsive website exploring the history of internet development in Singapore from 1998 to 2025.  
Created as part of the **CM1040 Web Development** final coursework.

## 📜 Overview

The website is divided into three main historical phases:

1. **Early ISPs & Dial-up Era (1998–2003)**
2. **Nationwide Broadband & Wireless@SG (2004–2015)**
3. **Mobile Internet & 5G Era (2016–2025)**

Each page contains:

- A descriptive historical overview
- Dynamically generated timeline data from a JSON file
- Responsive design for desktop and mobile
- Themed buttons and consistent visual styling

## 🛠 Features

- **Template Engine**: Mustache.js is used to render JSON data into HTML templates.
- **JSON Data Validation**: Ensures JSON files have the correct structure before rendering.
- **Responsive Navigation**: Desktop horizontal menu & mobile hamburger menu.
- **Page Theming**: Each page has its own color scheme and button styles.
- **Clean Layout**: Flexbox and media queries for mobile optimization.

## 📂 Project Structure

project-root/
│── index.html
│── page1.html
│── page2.html
│── page3.html
│
├── css/
│ └── styles.css
│
├── js/
│ ├── main.js
│ └── validator.js
│
├── data/
│ ├── dialup.json
│ ├── broadband.json
│ └── mobile.json
│
├── templates/
│ └── timeline.mustache
│
└── images/
└── logo.png

## 🚀 How to Run Locally

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/singapore-internet-history.git
   ```
2. Open the project in VS Code (or your preferred editor).

3. Install the Live Server extension in VS Code.

4. Right-click index.html → Open with Live Server.

5. Navigate through the website in your browser.

📄 License
This project is for educational purposes only.
