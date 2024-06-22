const { DataTypes } = require("sequelize");
const db = require("../db/database");

const ReporteEntrada = db.define("Reporteentrada", {
    Id_entrada: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Fecha_emision: {
        type: DataTypes.DATE,
        allowNull: false
    },
    Pk_fk_Id_usuarioproveedor: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Descripcion_entrada: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = ReporteEntrada;
