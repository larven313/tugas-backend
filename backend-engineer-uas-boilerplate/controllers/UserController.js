const User = require('../models/User');
const controller = {};
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET_KEY = 'UAS';
controller.register = async (req, res) => {

    const { name, email, password } = req.body;
    try {
        const existingUser = await User.findOne({where:{
            email:email
        }})
        if (existingUser) {
            const data = {
                message: "User alredy exist"
            }
            return res.status(400).json(data)
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await User.create({
            name:name,
            email:email,
            password:hashedPassword
        })

        const token = jwt.sign({email: result.email, id: result.id}, SECRET_KEY);

        const data = {
            user: result, token: token
        }
        res.status(201).json(data)
    } catch (error) {
        const data = { 
            message: 'Error on the server' 
        }
        return res.status(500).json(data);
    }
}

controller.login = async (req, res) => {
    const { email, password } = req.body;

try {
    const errors = validationResult(req);
    const existingUser = await User.findOne({where:{
        email:email
    }})
    if (!existingUser) {
        const data = {
            message: "User alredy exist"
        }
        return res.status(404).json(data)
    }

    const matchPassword = await bcrypt.compare(password, existingUser.password);

    if (!matchPassword) {
        const data = {
            message: "Something went wrong"
        }
        return res.status(400).json(data);
    }

    const token = jwt.sign({email: existingUser.email, id: existingUser.id}, SECRET_KEY);
    const data = {
        user: existingUser, token: token
    }
    res.status(201).json(data)
} catch (error) {
   console.error(error.message);
    res.status(500).send('Server error');
}

}

controller.isLogin = async (req, res) => {
    try {
        await User.findByPk(req.user.id)
        .then(user => {
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            return res.json(user);
        })
    } catch (error) {
        const data = { 
            message: 'Error on the server' 
        }
        return res.status(500).json(data);
    }
}

controller.Logout = async (req, res) => {
    try {
        res.clearCookie('token');
        res.json({ auth: false, token: null });
    } catch (error) {
        
    }
}

module.exports = controller;