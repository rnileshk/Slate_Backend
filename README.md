## Slate Backend Developer Assignment

A secure role-based authentication system for Schools, Parents, and Students with JWT authentication and PostgreSQL.

---

## 🚀 Features

- Role-based authentication (School, Parent, Student)
- JWT token generation & validation
- Password hashing with bcrypt
- Secure API endpoints
- Student achievements management
- PostgreSQL database integration

---

## 📦 Prerequisites

- Node.js v18+
- npm v9+
- PostgreSQL v15+
- Postman (for API testing)
- Git

---

## 🛠️ Installation

1. **Clone the repository**
   ```bash
  git clone https://github.com/rnileshk/slate-backend.git
   cd slate-backend
   npm install

---

2. Set up PostgreSQL database
   ```bash
   createdb 'DB_Name'
   psql -U your_username -d slate -f init.sql

---

3. Environment Configuration
   ```bash
   Create a .env file

---

4. Setup .env 
   ```bash
   DB_USER='Your_DB_UserName'
   DB_HOST=localhost
   DB_NAME='DB_Name'
   DB_PASSWORD='Your_DB_Password'
   DB_PORT=5432
   JWT_SECRET='Your_JWT_Secret_Key'
   JWT_EXPIRES_IN='Time_In_Hours'

---

5. Start the server
   ```bash
   node app.js

---

6. 🧪 Testing

   Set Up Postman Environment
   Use the provided Slate-API-Tests.postman_collection.json

---

7. Import Slate-Local.postman_environment.json with variables:
   ```bash
    {
     "base_url": "http://localhost:3000",
   }

---

8. Seed Test Data
   ```bash
   INSERT INTO users (name, email, password, role, linked_student_id) 
   VALUES
   ('ABC School', 'school@slate.com', crypt('123456', gen_salt('bf')), 'School', NULL),
   ('Rahul Gupta', 'parent@slate.com', crypt('654321', gen_salt('bf')), 'Parent', 101),
   ('Riya Sharma', 'student@slate.com', crypt('987654', gen_salt('bf')), 'Student', 101);
  
   INSERT INTO student_achievements 
   VALUES (101, 'Riya Sharma', 'ABC School', 'Science Olympiad Winner');

---
   
