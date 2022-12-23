// import database
const mysql = require("mysql");

// import dotenv
require("dotenv").config()

// konfigurasi mysql
const db = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE
})

// konek ke database
db.connect(function(err){
    if (err) {
        console.log(`koneksi error ${err}`);
        return;
    }else{
        console.log("Koneksi Berhasil");
        return;
    }
})

// export db
module.exports = db;