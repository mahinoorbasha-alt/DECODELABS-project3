const express = require("express");
const sqlite3 = require("sqlite3").verbose();
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(express.json());
 
// Database Connection
const db = new sqlite3.Database("./database.db", (err) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Connected to SQLite Database");
  }
});
// Create Table
db.run(`
CREATE TABLE IF NOT EXISTS students (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    course TEXT NOT NULL
)
`);
// Home Route
app.get("/", (req, res) => {
  res.send("Student Management API Running");
});
// CREATE Student
app.post("/students", (req, res) => {
  const { name, email, course } = req.body;
  if (!name || !email || !course) {
    return res.status(400).json({
      message: "All fields are required"
    });
  }

  db.run(
    "INSERT INTO students(name,email,course) VALUES(?,?,?)",
    [name, email, course],
    function (err) {
      if (err) {
        return res.status(500).json({
          error: err.message
        });
      }

      res.status(201).json({
        message: "Student Added Successfully",
        studentId: this.lastID
      });
    }
  );
});

// READ All Students
app.get("/students", (req, res) => {
  db.all("SELECT * FROM students", [], (err, rows) => {
    if (err) {
      return res.status(500).json({
        error: err.message
      });
    }

    res.json(rows);
  });
});

// READ Single Student
app.get("/students/:id", (req, res) => {
  db.get(
    "SELECT * FROM students WHERE id = ?",
    [req.params.id],
    (err, row) => {
      if (err) {
        return res.status(500).json({
          error: err.message
        });
      }

      if (!row) {
        return res.status(404).json({
          message: "Student Not Found"
        });
      }

      res.json(row);
    }
  );
});

// UPDATE Student
app.put("/students/:id", (req, res) => {
  const { name, email, course } = req.body;

  db.run(
    "UPDATE students SET name=?, email=?, course=? WHERE id=?",
    [name, email, course, req.params.id],
    function (err) {
      if (err) {
        return res.status(500).json({
          error: err.message
        });
      }

      if (this.changes === 0) {
        return res.status(404).json({
          message: "Student Not Found"
        });
      }

      res.json({
        message: "Student Updated Successfully"
      });
    }
  );
});

// DELETE Student
app.delete("/students/:id", (req, res) => {
  db.run(
    "DELETE FROM students WHERE id=?",
    [req.params.id],
    function (err) {
      if (err) {
        return res.status(500).json({
          error: err.message
        });
      }

      if (this.changes === 0) {
        return res.status(404).json({
          message: "Student Not Found"
        });
      }

      res.json({
        message: "Student Deleted Successfully"
      });
    }
  );
});

// Server Start
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});