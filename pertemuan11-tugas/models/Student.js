// import database
const db = require("../config/database");
``
// buat Model Student
class Student{
//     static all(callback) {
// // lakukan query untuk ambil data
//     const sql = "SELECT * FROM students"        
//     db.query(sql, (error, result) => {
        
//         callback(result);
//     });
//     }
    static all(){
        return new Promise((resolve,reject) => {
            const sql = "SELECT * FROM students";

            db.query(sql, (err, results) => {
                console.log(results);
                resolve(results);
            })

        })

    }

    static create(){
        
    }
}

// export model
module.exports =  Student;
