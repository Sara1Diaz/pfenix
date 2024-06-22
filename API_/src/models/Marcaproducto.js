const { DataTypes } = require("sequelize");
const db = require("../db/database");

const Marcaproducto = db.define("marcaproducto", {
    Id_marca_producto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Nom_marca_producto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Estado_marca_producto: {
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

module.exports = Marcaproducto;
