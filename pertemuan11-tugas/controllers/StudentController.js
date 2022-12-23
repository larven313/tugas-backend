// import model Students
const Student = require("../models/Student");

// TODO 3: Import data students dari folder data/students.js
// const students = require("../data/students");



// Membuat Class StudentController
class StudentController {
   async index(req, res) {
      // TODO 4: Tampilkan data students
      // Student.all(function(result) {
      //   const data = {
      //     message: "Menampilkan semua student",
      //     data :result
      //   }
      // })
    const students = await Student.all();
    const data = {
      message : "Menampilkan semua student",
      data: students
    }
  
      
      res.status(200).json(data);
    }
  
    store(req, res) {
      // const { id } = req.body;
      // TODO 5: Tambahkan data students
      
      
      const data = {
        message: `Menambahkan data student: `,
        // data: students,
      };
  
      res.json(data);
    }
  
    update(req, res) {
      // const { id } = req.params;
  
      // TODO 6: Update data students
      // students[id-1].nama = nama;
      // students[id-1].kelas = kelas;
      const data = {
        message: `Mengedit student id ${id}, nama `,
        // data: students,
      };
  
      res.json(data);
    }
  
    destroy(req, res) {
      const { id } = req.params;
  
      // TODO 7: Hapus data students
      
      const data = {
        message: `Menghapus student id ${id}`,
        // data: students,
      };
  
      res.json(data);
    }
  }
  
  // Membuat object StudentController
  const object = new StudentController();
  
  // Export object StudentController
  module.exports = object;