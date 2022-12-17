// import student controller
const StudentController =  require("../controllers/StudentController");

// import express
const express = require("express");
const object = require("../controllers/StudentController");

//  buat objek router
const router = express.Router();

// buat routing home
router.get("/",(req, res) => {
    res.send("Hello express");
})

// buat routing students
router.get("/students", StudentController.index);

router.post("/students", StudentController.store);

router.put("/students/:id", StudentController.update);

router.delete("/students/:id", StudentController.destroy);

module.exports = router;