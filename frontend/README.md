# 🧒 Child Vaccine Management System

A full-stack web application to manage child vaccination records, track vaccine status, and monitor healthcare data efficiently.

---

## 🚀 Project Overview

This project is a **Child Vaccine Management System** developed using:

- 🔹 Frontend: React.js
- 🔹 Backend: Flask (Python)
- 🔹 Database: SQLite

The system allows users to:

- Register children
- View all registered records
- Check vaccination status
- Delete records
- View detailed child information

---

## 🏗️ Architecture

This project follows a **3-tier architecture**:

Frontend (React)
↓
Backend API (Flask)
↓
Database (SQLite)

---

## ⚙️ Features

### 👶 Child Management
- Register child with details
- Auto-generate unique register number
- Delete child records

### 📋 Dashboard
- View all registered children
- Click to view full details

### 🔍 Vaccination Status
- Search child using register number
- View vaccinated and pending counts

### 📄 Child Details
- View complete child profile
- Vaccination progress

---

## 🧰 Technologies Used

### Frontend
- React.js
- JSX
- useState, useEffect
- React Router
- Axios

### Backend
- Flask
- Flask-CORS
- SQLAlchemy ORM

### Database
- SQLite (Relational Database)

---

## 🗄️ Database Type

This project uses:

**SQLite (Relational Database Management System - RDBMS)**

### Characteristics:
- File-based database (database.db)
- No server required
- Stores data in tables (rows & columns)

### Tables:

#### Child Table
- id → Primary Key
- reg_no → Unique Register Number
- name → Child Name
- dob → Date of Birth
- parent_name → Parent Name
- phone → Contact
- vaccinated_count → Vaccines completed
- pending_count → Vaccines pending

---

## 📁 Project Structure

child-vaccine-react/

backend/
- app.py
- models.py
- database.db

frontend/
- src/
  - components/
    - Navbar.js
    - ChildCard.js
  - pages/
    - Home.js
    - Register.js
    - Dashboard.js
    - ChildDetails.js
    - CheckStatus.js
  - services/
    - api.js
  - App.js
  - App.css
  - index.js

---

## ▶️ How to Run the Project

### 🔹 Backend Setup (Flask)

cd backend  
pip install flask flask-cors flask-sqlalchemy  
python app.py  

Backend runs on:  
http://127.0.0.1:5001  

---

### 🔹 Frontend Setup (React)

cd frontend  
npm install  
npm start  

Frontend runs on:  
http://localhost:3000  

---

## 🔄 API Endpoints

POST   /register_child        → Register child  
GET    /children              → Get all children  
GET    /child/<reg_no>        → Get child by register number  
GET    /child_details/<id>    → Get full details  
DELETE /delete_child/<id>     → Delete child  

---

## 🔥 Improvements with React

Old (HTML + JS):
- Direct DOM manipulation
- Hard to scale
- Code duplication

React Version:
- Component-based architecture
- Reusable UI components
- State-driven rendering
- Better scalability and maintainability

---

## 🚀 Future Enhancements

- Vaccine schedule automation
- SMS/Email reminders
- User authentication system
- Cloud database integration
- Mobile app version
- Data visualization dashboard

---

## 👨‍💻 Author

Jaya Prasad P  

- IEEE Chairman & Student President (ECE)
- Interested in Cloud Computing, IoT, AI, and Full-Stack Development

---

## 📜 License

This project is developed for educational and academic purposes.