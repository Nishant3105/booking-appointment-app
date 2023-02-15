const Sequelize=require('sequelize')

const sequelize=require('../util/database')

const User=sequelize.define('formuser',{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        unique: true
    },
    phonenumber: {
        type: Sequelize.INTEGER,
        unique: true
    },
    email: {
        type: Sequelize.STRING,
        unique: true
    }


})

module.exports = User