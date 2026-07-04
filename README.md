# 🏥 Hospital Appointment Management System

A modern **full-stack Hospital Appointment Management System** built with the **PERN Stack (PostgreSQL, Express, React, Node.js)**.

The project allows **patients** to find doctors, schedule appointments, receive prescriptions, and manage invoices. **Doctors** can manage their schedules, appointments, and prescriptions, while **administrators** oversee the entire platform through a dedicated dashboard.

This project was built to demonstrate **real-world full-stack development**, including authentication, authorization, relational database design, REST API development, responsive frontend architecture, and scalable backend practices.

---

# 📸 Project Preview

> Add screenshots here after deployment.

## Home Page

<p align="center">
<img src="./screenshots/home.png" width="900">
</p>

---

## Doctor Listing

<p align="center">
<img src="./screenshots/doctors.png" width="900">
</p>

---

## Patient Dashboard

<p align="center">
<img src="./screenshots/patient-dashboard.png" width="900">
</p>

---

## Doctor Dashboard

<p align="center">
<img src="./screenshots/doctor-dashboard.png" width="900">
</p>

---

## Admin Dashboard

<p align="center">
<img src="./screenshots/admin-dashboard.png" width="900">
</p>

---

# ✨ Features

## 👤 Authentication

- User Registration
- User Login
- Secure JWT Authentication
- HTTP-only Cookie Authentication
- Password Hashing using bcrypt
- Logout
- Protected Routes
- Role-based Authorization

---

## 👥 User Roles

### Patient

- Browse doctors
- Search doctors
- Filter doctors
- Book appointments
- Cancel appointments
- View appointment history
- Track appointment using Tracking ID
- View prescriptions
- View invoices
- Update profile
- Submit doctor reviews

---

### Doctor

- Manage profile
- Manage availability
- View appointment schedule
- Confirm appointments
- Complete appointments
- Write prescriptions
- View patient information
- Dashboard analytics

---

### Admin

- Dashboard overview
- Manage doctors
- Manage patients
- Manage appointments
- Manage reviews
- View system statistics
- Approve doctors
- Suspend doctors

---

# 🚀 Main Features

- Responsive Design
- Modern Healthcare UI
- Role Based Access Control (RBAC)
- Secure Authentication
- RESTful API
- PostgreSQL Relational Database
- Prisma ORM
- Pagination
- Searching
- Filtering
- Sorting
- Form Validation
- Error Handling
- Reusable Components
- Modular Backend Architecture
- Clean Code Structure

---

# 🛠 Tech Stack

## Frontend

- React
- React Router DOM
- Tailwind CSS
- JavaScript

---

## Backend

- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- JWT
- bcrypt
- Cookie Parser
- CORS
- dotenv

---

## Database

- PostgreSQL

---

## Authentication

- JWT
- HTTP-only Cookies
- bcrypt Password Hashing

---

# 📁 Project Structure

```
hospital-management-system/

│
├── client/
│
├── server/
│
├── README.md
│
└── .gitignore
```

---


# 🗄 Database Schema

Main entities

- Users
- Doctors
- Patients
- Appointments
- Prescriptions
- Medicines
- Reviews
- Invoices
- Notifications
- Doctor Availability

Relationship

```
User

├── Doctor

├── Patient

└── Admin

Doctor

├── Availability

├── Appointment

├── Review

└── Prescription

Patient

├── Appointment

├── Review

├── Invoice

└── Prescription
```

---

# 🛡 Authorization

Three roles are supported.

- Patient
- Doctor
- Admin

Every protected route verifies

- JWT Token
- Logged In User
- User Role
- Resource Ownership

---

# 🌐 API Endpoints

## Authentication

| Method | Endpoint |
|----------|----------------------|
| POST | /auth/register |
| POST | /auth/login |
| POST | /auth/logout |

---

## Doctors

| Method | Endpoint |
|----------|------------------|
| GET | /doctors |
| GET | /doctors/:id |
| PATCH | /doctor/profile |
| POST | /doctor/availability |

---

## Patients

| Method | Endpoint |
|----------|-----------------------|
| GET | /me |
| PATCH | /me |
| GET | /me/appointments |
| GET | /me/invoices |
| GET | /me/prescriptions |

---

## Appointment

| Method | Endpoint |
|----------|-----------------------------|
| POST | /appointments |
| PATCH | /appointments/:id/cancel |
| PATCH | /appointments/:id/confirm |
| PATCH | /appointments/:id/complete |
| GET | /track/:trackingId |

---

## Reviews

| Method | Endpoint |
|----------|----------------|
| POST | /reviews |
| GET | /reviews |

---

## Admin

| Method | Endpoint |
|----------|----------------------------|
| GET | /admin/dashboard |
| GET | /admin/doctors |
| GET | /admin/patients |
| GET | /admin/appointments |
| GET | /admin/reviews |

---

# ⚙️ Environment Variables

## Backend (.env)

```env
PORT=5000

DATABASE_URL=

JWT_SECRET=

NODE_ENV=development

CLIENT_URL=http://localhost:5173
```

---

## Frontend (.env)

```env
VITE_API_URL=http://localhost:5000/api/v1
```

---

# 🚀 Installation Guide

## 1. Clone Repository

```bash
git clone https://github.com/Fahmid-run/MediCare-Hospital-Management.git
```

```
cd MediCare-Hospital-Management
```

---

# Install Frontend

```
cd client
```

```
npm install
```

Start frontend

```
npm run dev
```

Frontend runs on

```
http://localhost:5173
```

---

# Install Backend

Open another terminal

```
cd server
```

Install dependencies

```
npm install
```

---

# Setup Database

Create PostgreSQL Database

Example

```
hospital_management
```

---

Update

```
DATABASE_URL
```

inside

```
server/.env
```

---

Run Prisma Migration

```
npx prisma migrate dev
```

Generate Prisma Client

```
npx prisma generate
```

(Optional) Seed dummy data

```
npm run seed
```

---

Start Backend

```
npm run dev
```

Backend runs on

```
http://localhost:5000
```

---


# 🧩 Challenges Faced During Development

Building a real-world healthcare application introduced several backend and frontend challenges.

### Backend Challenges

- Designing a scalable relational database
- Preventing appointment time conflicts
- Implementing secure JWT authentication
- Managing role-based authorization
- Creating reusable middleware
- Designing RESTful APIs
- Handling Prisma relationships
- Managing transactions for appointment and prescription creation
- Maintaining consistent API responses
- Preventing unauthorized resource access

---

### Frontend Challenges

- Building reusable UI components
- Managing nested routes
- Creating responsive dashboards
- Implementing protected routes
- Designing role-specific layouts
- Handling loading and empty states
- Managing form validation
- Maintaining consistent UI across multiple pages

---

# 📚 Future Improvements

- Online Payment Gateway Integration
- Email Notifications
- SMS Notifications
- Video Consultation
- Live Chat
- Medical History Timeline
- File Uploads
- Doctor Verification System
- Multi-language Support
- Dark Mode
- Real-time Notifications
- Calendar Synchronization
- Analytics Dashboard
- Appointment Reminder System

---

# 📈 What I Learned

Throughout this project, I gained practical experience with:

- Full-stack application architecture
- REST API development
- Authentication & Authorization
- Prisma ORM
- PostgreSQL database design
- Database relationships
- Role-based access control
- Clean folder organization
- Responsive frontend development
- Modular backend architecture
- Error handling strategies
- Scalable project structure

---

# 🤝 Contributing

Contributions, issues, and feature requests are welcome.

Feel free to fork the repository and submit a pull request.

---

# 📄 License

This project is licensed under the MIT License.

---
