const { Sequelize} = require("sequelize");

const db =  new Sequelize ("fenix_technology2", "root", "",{    
    host : 'localhost',
    dialect: "mysql"
     });


module.exports = db;