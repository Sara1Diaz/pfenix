const { DataTypes } = require("sequelize");
const db = require("../db/database");

const Movimientoinventario = db.define("movimientoinventario", {
    Id_movimiento: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    PK_fk_Id_producto: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    PK_fk_Id_tmovimiento: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Fecha_movimiento: {
        type: DataTypes.DATE,
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

module.exports = Movimientoinventario;
