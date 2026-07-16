````markdown id="d0y5s8"
# Hostel Mess Management System - Backend

A RESTful backend API for the **Hostel Mess Management System** built using the **MERN Stack**. The backend provides secure authentication using **JWT (JSON Web Token)** and supports **role-based authorization** for **Admin** and **Student** users.

---

## Features

- JWT Authentication
- Role-Based Authorization (Admin & Student)
- RESTful CRUD APIs
- MongoDB Database Integration
- Student Management
- Attendance Management
- Leave Management
- Monthly Mess Cost Management
- Push Notifications
- Secure Password Hashing with bcrypt

---

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (JSON Web Token)
- bcrypt
- dotenv

---

## User Roles

### Admin

- Login
- Add Student
- Update Student Details
- Remove Student
- Mark Daily Attendance
- Put Students on Leave
- Send Push Notifications
- Set Monthly Mess Cost
- Generate Monthly Mess Cost for Students

### Student

- Login
- View Profile
- View Attendance
- View Leave Status
- View Notifications
- View Monthly Mess Cost

---

## Demo

### Live Website

https://hostel-mess-management-ruddy.vercel.app/

## Demo Credentials

### Admin

| Username | Password |
|----------|----------|
| ADMIN001| sejal23 |

### Student

| Username | Password |
|----------|----------|
| 124103011 | vikas|

##important if login page doesn't respond it may have lost mongodb connection as i am using free version of it which stops monitoring after some days, in that case open this pdf :
https://1drv.ms/b/c/af09d61bb0b79bdd/IQDjwcHMLJA3Sb7aa7lKBvthARLMcgyU5rBHLtxRSvgWsWE?e=7AbBYz

## Authentication

Protected routes require a JWT token.

Include the token in every authorized request:

```http
Authorization: Bearer <JWT_TOKEN>
```

---

## API Modules

- Authentication
- Student Management
- Attendance
- Leave Management
- Notifications
- Monthly Cost Management

---

## Project Structure

```
backend/
│
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── utils/
├── app.js
├── server.js
├── package.json
└── .env
```

---

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/hostel-mess-management.git
```

### 2. Navigate to Backend

```bash
cd backend
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file in the root directory.

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

## Running the Server

### Development

```bash
npm run dev
```

### Production

```bash
npm start
```

Server will start at:

```
http://localhost:5000
```

---

## Security

- JWT Authentication
- Role-Based Authorization
- Password Hashing using bcrypt
- Protected Routes
- Environment Variables for Sensitive Data

---

## Future Improvements

- QR Code Based Attendance
- Email Notifications
- Mess Menu Management
- Student Complaint Module
- Reports & Analytics Dashboard
- Fee Payment Integration

---

Built as a MERN Stack project to simplify hostel mess management through secure REST APIs.
````
