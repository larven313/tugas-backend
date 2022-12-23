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
  static create(request) {
    // code here
    const  student = request;
    return new Promise((resolve, reject) => {
      const insert_sql = "INSERT INTO students SET ?";

      db.query(insert_sql,student,function(err, result){
        err ? console.log(err): console.log(result);
        resolve(result);
      });
    });
  }
}

// export class Student
module.exports = Student;
