// TODO 4: SETUP CONTROLLER
// import model Patient
const patient = require('../models/Patient');
const controller = {};
const { validationResult } = require('express-validator');

controller.getAll = async (req, res) => {
    try {
        await patient.findAll()
        .then ((result) => {
            if (result.length > 0 ) {
                const data = {
                    message: 'Get All Resource',
                    data: result
                };

                res.status(200).json(data);
            }else{
                const data = {
                    message: 'Data is empty',
                };
                
                res.status(200).json(data);
            }
        })
    } catch (error) {
        const data = {
            message: error
        };

        res.status(404).json(data);
    }
}

controller.store = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const data = {
            error: errors.array()
        }
        return res.status(400).json(data);
    }
    try {
        await patient.create(req.body)
            .then((result) => {
                const data = {
                    message: "Resource is added successfully",
                    data: result
                }
            res.status(201).json(data);
            });
    } catch (error) {
        const data = {
            message: error
        };
        res.status(404).json(data);
    }
}

controller.update = async  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const data = {
            error: errors.array()
        }
        return res.status(400).json(data);
    }
    try {
        // tangkap id
        const id = req.params.id;
        
        await patient.update(req.body,{
            where:{ id }
        })
        .then((result) => {
            const data = {
                message: "Resource is update successfully",
                data: req.body
            }
        res.status(200).json(data);

        })
    } catch (error) {
        const data = {
            message: error
        };
        res.status(404).json(data);
    }
}

controller.destroy = async (req, res) => {
    try {
        const _id = req.params.id;
        const destroyed = await patient.destroy({
            where:{
                id:_id
            }
        });
        

        if (destroyed === 0) {
            const data = {
                message:"Data not found"
            }    
            return res.status(404).json(data);
        }

        const data = {
            message:"Data deleted successfully"
        }    
        return res.status(200).json(data);
    } catch (error) {
        const data = {
            message: error.message
        };
        res.status(404).json(data);
    }
}

controller.show = async (req, res) => {
    try {
        const _id = req.params.id;

        await patient.findOne({
            where:{id:_id}
        })
        .then((result) => {
            if (result) {
                const data = {
                    message: "Get detail resource",
                    data: result
                }
            res.status(200).json(data);
            } else {
                const data = {
                    message: "Resource not found",
                }
            res.status(404).json(data);
            }
        })
    } catch (error) {
        const data = {
            message: error
        };
        res.status(404).json(data);
    }
}

controller.search = async (req, res) => {
    try {
        const _name = req.params.name;
        await patient.findOne({
            where:{
                name:_name
            }
        })
        .then((result) => {
            if (result) {
                const data = {
                    message: `Get ${_name} resource`,
                    data: result
                }
            res.status(200).json(data);
            } else {
                const data = {
                    message: "Resource not found",
                }
            res.status(404).json(data);
            }
        })
    } catch (error) {
        const data = {
            message: error
        };
        res.status(404).json(data);
    }
}

controller.positive = async (req, res) => {
    try {
        const _positive = req.params.positive;
        await patient.findAll({
            where:{
                status:_positive
            }
        })
        .then((result) => {
            if (result) {
                const data = {
                    message: `Get ${_positive} resource`,
                    data: result
                }
            res.status(200).json(data);
            } else {
                const data = {
                    message: "Resource not found",
                }
            res.status(404).json(data);
            }
        })
    } catch (error) {
        const data = {
            message: error
        };
        res.status(404).json(data);
    }
}

controller.negative = async (req, res) => {
    try {
        const _negative = req.params.negative;
        await patient.findAll({
            where:{
                status:_negative
            }
        })
        .then((result) => {
            if (result) {
                const data = {
                    message: `Get ${_negative} resource`,
                    data: result
                }
            res.status(200).json(data);
            } else {
                const data = {
                    message: "Resource not found",
                }
            res.status(404).json(data);
            }
        })
    } catch (error) {
        const data = {
            message: error
        };
        res.status(404).json(data);
    }
}

controller.recovered = async (req, res) => {
    try {
        const _recovered = req.params.recovered;
        await patient.findAll({
            where:{
                status:_recovered
            }
        })
        .then((result) => {
            if (result) {
                const data = {
                    message: `Get ${_recovered} resource`,
                    data: result
                }
            res.status(200).json(data);
            } else {
                const data = {
                    message: "Resource not found",
                }
            res.status(404).json(data);
            }
        })
    } catch (error) {
        const data = {
            message: error
        };
        res.status(404).json(data);
    }
}

controller.dead = async (req, res) => {
    try {
        const _dead = req.params.dead;
        await patient.findAll({
            where:{
                status:_dead
            }
        })
        .then((result) => {
            if (result) {
                const data = {
                    message: `Get ${_dead} resource`,
                    data: result
                }
            res.status(200).json(data);
            } else {
                const data = {
                    message: "Resource not found",
                }
            res.status(404).json(data);
            }
        })
    } catch (error) {
        const data = {
            message: error
        };
        res.status(404).json(data);
    }
}

// const object = new PatientController();
module.exports = controller;