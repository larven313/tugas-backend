// import database
const { connect } = require("../config/database");
const db = require("../config/database");

// membuat class Model Student
class Student {
  /**
   * Membuat method static all.
   */
  static all() {
    // return Promise sebagai solusi Asynchronous
    return new Promise((resolve, reject) => {
      const sql = "SELECT * from students";
      /**
       * Melakukan query menggunakan method query.
       * Menerima 2 params: query dan callback
       */
      db.query(sql, (err, results) => {
        resolve(results);
      });
    });
  }

  /**
   * TODO 1: Buat fungsi untuk insert data.
   * Method menerima parameter data yang akan diinsert.
   * Method mengembalikan data student yang baru diinsert.
   */
  static async create(data) {
    // Promise 1
     const id = await new Promise((resolve, reject) => {
      // insert data ke database
      const sql = "INSERT INTO students SET ?";

      db.query(sql,data,function(err, results){
        resolve(results.insertId);
      });
    });

    // Promise 2
    const student = await this.find(id);
    return student;
  }

  static find(id){
    // lakukan promise, select by id
    return new Promise((resolve, reject) => {
      const sql = "SELECT * FROM students WHERE id = ?";
      db.query(sql, id,(err, results) => {
        resolve(results[0]);
      });
    });
  }

  static async update(id, data){
    // update data
   await new Promise((resolve, reject) => {
      // query untuk update data
      const sql = "UPDATE students SET ? WHERE id = ?";
      db.query(sql, [data, id], (err, results)=>{
        resolve(results);
      });
    });

    // select data by id
    const student = await this.find(id);
    return student;
  }

  static delete(id){
    // query delete
    return new Promise((resolve, rejecet) => {
      // query sql
      const sql = "DELETE from students WHERE id = ?"
      db.query(sql, id, (err, results) => {
        resolve(results);
      })
    })
  }
}

// export class Student
module.exports = Student;
