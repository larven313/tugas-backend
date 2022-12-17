// import express
const express = require("express");

// buat objek express
const app = express();

// menggunakan middleware
app.use(express.json());

// definisikan route
const router = require("./routes/api");
app.use(router);
app.use(express.urlencoded());

// definisi port
app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});