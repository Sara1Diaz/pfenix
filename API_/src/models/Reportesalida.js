const { DataTypes } = require("sequelize");
const db = require("../db/database");

const ReporteSalida = db.define("Reportesalida", {
    Id_salida: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Fecha_emision: {
        type: DataTypes.DATE,
        allowNull: false
    },
    PK_fk_numlocal_destino: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Descripcion_salida: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = ReporteSalida;
