# Device End Time Calculator ⏱️

This is a simple web application that calculates the end time of a device operation (washing machine, oven, etc.) based on:

- The current start time
- A duration in minutes
- An operation (add or subtract)

🧮 Example: If you start a washing machine at 09:00 and it runs for 53 minutes, the app tells you to come back at **09:53**.

---

## 🧰 Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js with Express (v5)
- **Docker**: Containerized both frontend and backend
- **Docker Compose**: For service orchestration
- **Render**: For free 24/7 deployment

---

## 📁 Project Structure

project-root/
├── time-api/ # Node.js backend API
│ ├── index.js
│ └── Dockerfile
├── time-frontend/ # Static frontend (served by Nginx)
│ ├── index.html
│ ├── script.js
│ ├── styles.css
│ └── Dockerfile
├── docker-compose.yml
└── README.md

