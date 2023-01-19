const {check} = require('express-validator');

const authValidation = [
    check('email').not().isEmpty().withMessage("email tidak boleh kosong").not().isEmail().withMessage('email tidak valid'),
    check('password').not().isEmpty().withMessage('password tidak boleh kosong')
]

module.exports = authValidation;