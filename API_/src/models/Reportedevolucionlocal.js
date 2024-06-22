const { DataTypes } = require("sequelize");
const db = require("../db/database");

const ReporteDevolucionLocal = db.define("Reportedevolucionlocal", {
    Id_devolucion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Pk_fk_numlocal: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Fecha_devolucion: {
        type: DataTypes.DATE,
        allowNull: false
    },
    Motivo_devolucion: {
        type: DataTypes.TEXT,
        allowNull: false
    }
});

module.exports = ReporteDevolucionLocal;
