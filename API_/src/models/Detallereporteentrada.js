const { DataTypes } = require("sequelize");
const db = require("../db/database");

const Detallereporteentrada = db.define("detallereporteentrada", {
    Id_Detalle_reporte_entrada: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    PK_fk_Id_entrada: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    PK_fk_Id_bodega_destino: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    PK_fk_Id_producto: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Cantidad_total_entradas: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Valor_entradas: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    Subtotal_entradas: {
        type: DataTypes.BIGINT,
        allowNull: false
    }
});

module.exports = Detallereporteentrada;
