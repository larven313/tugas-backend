// TODO 3: Import data students dari folder data/students.js
const students = require("../data/students");



// Membuat Class StudentController
class StudentController {
    index(req, res) {
      // TODO 4: Tampilkan data students
    
      const data = {
        message: "Menampilkan semua students",
        data: students,
      };
  
      res.json(data);
    }
  
    store(req, res) {
      const { id } = req.body;
      const { nama } = req.body;
      const { kelas } = req.body;
      // TODO 5: Tambahkan data students
      students.push({id, nama, kelas});
      
      const data = {
        message: `Menambahkan data student: ${nama}`,
        data: students,
      };
  
      res.json(data);
    }
  
    update(req, res) {
      const { id } = req.params;
      const { nama } = req.body;
      const { kelas } = req.body;
  
      // TODO 6: Update data students
      students[id-1].nama = nama;
      students[id-1].kelas = kelas;
      const data = {
        message: `Mengedit student id ${id}, nama ${nama}`,
        data: students,
      };
  
      res.json(data);
    }
  
    destroy(req, res) {
      const { id } = req.params;
  
      // TODO 7: Hapus data students
      students.splice(id-1,1);
      const data = {
        message: `Menghapus student id ${id}`,
        data: students,
      };
  
      res.json(data);
    }
  }
  
  // Membuat object StudentController
  const object = new StudentController();
  
  // Export object StudentController
  module.exports = object;