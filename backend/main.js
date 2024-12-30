const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'MDIsql1223@#',
    database: 'student_management'
});

app.use(express.json());

// Root route (to fix "Cannot GET /")
app.get('/', (req, res) => {
    res.send('Welcome to the Student Management System!');
});

// Fetch all students
app.get('/students', (req, res) => {
    db.query('SELECT * FROM students', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// Add a student
app.post('/students', (req, res) => {
    const { IndexNo, Name, DoB, GPA } = req.body;
    db.query('INSERT INTO students SET ?', { IndexNo, Name, DoB, GPA }, (err, results) => {
        if (err) throw err;
        res.json({ id: results.insertId });
    });
});

// Delete a student by ID
app.delete('/students/:id', (req, res) => {
    const studentId = req.params.id;
    db.query('DELETE FROM students WHERE id = ?', [studentId], (err, results) => {
        if (err) throw err;
        res.json({ message: 'Student deleted successfully' });
    });
});


// Start server
app.listen(3000, () => console.log('Server started on port 3000'));
