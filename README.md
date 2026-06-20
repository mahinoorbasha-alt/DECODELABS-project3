
# 🗄️ Database Integration using Node.js, Express.js and SQLite

## 📌 Project Overview

This project is a Database Integration System developed as part of my DecodeLabs Internship.

The application connects a Node.js backend with a SQLite database and performs CRUD (Create, Read, Update, Delete) operations on student records.

The system stores data permanently in a database and allows users to add, retrieve, update, and delete student information through REST APIs.

---

# 🚀 Features

✅ Database Integration

✅ Create Student Records

✅ View Student Records

✅ Update Student Details

✅ Delete Student Records

✅ REST API Endpoints

✅ JSON Data Handling

✅ SQLite Database Storage

---

# 🛠️ Technologies Used

- Node.js
- Express.js
- SQLite
- Thunder Client
- JavaScript

---

# 📂 Project Structure

```
Database-Integration/
│
├── server.js
├── package.json
├── package-lock.json
├── database.db
└── README.md
```

---

# ⚙️ How It Works

## Step 1

Start the Node.js server.

```bash
node server.js
```

---

## Step 2

Connect to the SQLite database.

---

## Step 3

Create the students table automatically if it does not exist.

---

## Step 4

Use Thunder Client to send API requests.

---

## Step 5

Perform CRUD Operations:

### Create Student

```http
POST /students
```

### Get Students

```http
GET /students
```

### Update Student

```http
PUT /students/:id
```

### Delete Student

```http
DELETE /students/:id
```

---

# 📸 Sample Request

```json
{
  "name": "Mahi",
  "email": "mahi@gmail.com",
  "course": "B.Tech"
}
```

---

# 🎯 Learning Outcomes

- Database Integration
- CRUD Operations
- Backend API Development
- SQLite Database Management
- REST API Design
- Data Storage and Retrieval

---

# 👩‍💻 Author

**Meharunnisa Noorbasha**

Linkdin:
https://www.linkedin.com/posts/meharunnisa-noorbasha-02706a377_decodelabs-internship-databaseintegration-activity-7472624912877117440-wLgP?utm_source=share&utm_medium=member_android&rcm=ACoAAF0XWZ8Bnz_oL82TzwLR23BTx2iD4D0MSTE


DecodeLabs Internship Project