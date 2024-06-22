const { DataTypes } = require("sequelize");
const db = require("../db/database");

const Detalledevolucionlocal = db.define("detalledevolucionlocal", {
    Id_detalle_devolucion: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    PK_fk_Id_devolucion: {
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
    Cantidad_devuelta: {
        type: DataTypes.INTEGER,
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

module.exports = Detalledevolucionlocal;
