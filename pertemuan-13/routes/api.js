// Import Student Controller
const StudentController = require("../controllers/StudentController");

const express = require("express");
const router = express.Router();

// import express validator
const {body} = require('express-validator');

router.get("/", (req, res) => {
  res.send("Hello Express");
});

router.get("/students",StudentController.index);
router.post("/students",[
  body('nim').isLength({min:4}).withMessage("Input nim minimum 4 karakter"),
  body('nama').isLength({min:3}).withMessage("Input nama minimum 3 karakter")
], StudentController.store);
router.put("/students/:id",[
  body('nim').isLength({min:4}).withMessage("Input nim minimum 4 karakter"),
  body('nama').isLength({min:3}).withMessage("Input nama minimum 3 karakter")
], StudentController.update);
router.delete("/students/:id", StudentController.destroy);
router.get("/students/:id",StudentController.show);

// Export router
module.exports = router;
