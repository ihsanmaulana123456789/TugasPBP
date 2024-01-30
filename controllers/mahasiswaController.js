const express = require('express');
const router = express.Router();
const db = reuire('../models/db');

//GET /mahasiswa
router.get('/', (req, res) => {
    db.query('SELECT * FROM mahasiswa', (error, results) => {
        if (error) {
            console.error('Error fetching mahasiswa:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }   else {
            res.json(results);
        }
    });
});

// GET /mahasiswa/:nim
router.get('/:nim', (req, res) => {
    const mahasiswaId = req.params.nim;
    db.query('SELECT * FORM mahasiswa WHERE nim = ?', (mahasiswaId), (error, results) =>{
        if (error) {
            console.error('Error fetching mahasiswa:', error);
            res.status(500).json({ message: 'Internal Server Error' });
        }   else if (results.length === 0) {
        }   else {
            res.json(results[0]);
        }
    });
});

//PUT /mahasiswa/:nim
router.put('/:nim', (req, res) => {
    const mahasiswaNim = req.params.nim;
    const { nama, gender, prodi, alamat } = req.body;
    db.query('UPDATE mahasiswa SET nama = ?,gender = ?,prodi = ?,alamat =? WHERE nim = ?,'
    [nama, gender, prodi, alamat, mahasiswaNim], (error) => {
     if (error) {
        console.error('Error updating mahasiswa:', error);
        res.status(500).json({ message: 'Internal Server Error' });
     }  else {
        res.json("Updating mahasiswa Seccessfullys");
     } 
    });
});

module.exports = router;
