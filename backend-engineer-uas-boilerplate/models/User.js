const Sequelize = require('sequelize');
const bcrypt = require('bcrypt');
const db = require('../config/database');

const User = db.define('users',{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name:{
        type:Sequelize.STRING,
        unique: true,
        allowNull:false
    },
    email:{
        type:Sequelize.STRING,
        unique: true,
        allowNull:false
    },
    password:{
        type:Sequelize.STRING,
        allowNull:false
    }
})

// User.beforeCreate((user) => {
//     new Promise((resolve) => {
//         bcrypt.hash(user.password, 10, (err, hash) => {
//             user.password = hash;
//             resolve();
//         })
//     })
// })

module.exports = User;