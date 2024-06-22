const { DataTypes } = require("sequelize");
const db = require("../db/database");

const Tipodocumento = db.define("tipodocumentos", {
    Id_tdoc: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Tdoc: {
        type: DataTypes.STRING,
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

module.exports = Tipodocumento;
