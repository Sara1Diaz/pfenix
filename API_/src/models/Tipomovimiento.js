const { DataTypes } = require("sequelize");
const db = require("../db/database");

const Tipomovimiento = db.define("tipomovimiento", {
    Id_tp_movimiento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Descrip_tp_movimiento: {
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

module.exports = Tipomovimiento;
