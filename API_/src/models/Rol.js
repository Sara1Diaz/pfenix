const { DataTypes } = require("sequelize");
const db = require("../db/database");

const Rol = db.define("rol", {
    Cod_rol: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Desc_rol: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Estado_rol: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    }
});

module.exports = Rol;
