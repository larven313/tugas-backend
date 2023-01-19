/**
 * TODO 1: SETUP SERVER USING EXPRESS.JS.
 * UBAH SERVER DI BAWAH MENGGUNAKAN EXPRESS.JS.
 * SERVER INI DIBUAT MENGGUNAKAN NODE.JS NATIVE.
 */
// import express dan routing
const express = require("express");
const router = require("./routes/api");

// membuat object express
const app = express();

const { expressjwt } = require('express-jwt');
const authMiddleware = require('./middleware/auth');

// menggunakan middleware
app.use(express.json());
app.use((req, res, next) => {
    console.log("HTTP Method : " + req.method + ", URL : " + req.url);
    next();
});

// menggunakan routing
app.use(router);

// mendefiniskan port
const PORT = 3000;
app.listen(PORT,()=>(
    console.log(`Server running at http://localhost:${PORT}`)
));
