// TODO 2: SETUP ROUTING (ROUTER)
// import PatientControllers
const PatientController = require('../controllers/PatientController');
const UserController = require('../controllers/UserController');

// import validation
const patientValidation = require('../validation/patientValidation');
const authValidation = require('../validation/authValidation');

// import middleware auth
const auth = require('../middleware/auth');


// import express
const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');


router.get("/",(req,res) => {
    res.send("Hello World");
});

// Route PatienController
router.get("/patients", auth, PatientController.getAll);
router.post("/patients", auth, patientValidation, PatientController.store);
router.put("/patients/:id", auth, patientValidation, PatientController.update);
router.delete("/patients/:id", auth, PatientController.destroy);
router.get("/patients/:id", auth, PatientController.show);
router.get("/patients/search/:name", auth, PatientController.search);
router.get("/patients/status/:positive", PatientController.positive);
router.get("/patients/status/:negative", PatientController.negative);
router.get("/patients/status/:recovered", PatientController.recovered);
router.get("/patients/status/:dead", PatientController.dead);


// Route autentikasi
router.post('/login',authValidation,UserController.login);
router.post('/register',authValidation,UserController.register);
router.get('/me',UserController.isLogin);
router.get('/logout',UserController.Logout);

module.exports = router;