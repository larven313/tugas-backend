const {check} = require('express-validator');

const patientValidation = [
    check('name').not().isEmpty().withMessage("Nama tidak boleh kosong"),
    check('phone').not().isEmpty().withMessage("no.telepon tidak boleh kosong").isMobilePhone().withMessage('nomor telepon tidak valid'),
    check('address').not().isEmpty().withMessage('Alamat tidak boleh kosong'),
    check('status').not().isEmpty().withMessage('Status tidak boleh kosong'),
]

module.exports = patientValidation;