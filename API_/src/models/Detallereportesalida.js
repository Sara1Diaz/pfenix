const { DataTypes } = require("sequelize");
const db = require("../db/database");

const Detallereportesalida = db.define("Detallereportesalida", {
    Id_Detalle_reporte_salida: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    PK_fk_Id_salida: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    PK_fk_Id_bodega: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    PK_fk_Id_producto: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Cantidad_total_salidas: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Detallereportesalida;
