// import express dan routing
const express = require("express");
const router = require("./routes/api.js");

// Membuat object express
const app = express();


// Menggunakan middleware
app.use(express.json());


// Menggunakan routing (router)
app.use(router);

// app.use((error, req, res, next) => {
//     const status = error.errorStatus || 500;
//     const message = error.message;
//     const data = error.data;
    
//     res.status(status).json({
//         message: message,
//         data : data
//     });
// });

// Mendefinisikan port.
app.listen(3000);
