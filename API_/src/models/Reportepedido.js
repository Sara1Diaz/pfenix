const { DataTypes } = require("sequelize");
const db = require("../db/database");

const Reportepedido = db.define("reportepedido", {
    Id_pedido: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Pk_fk_numlocal: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Pk_fk_Id_envio: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Fecha_emision: {
        type: DataTypes.DATE,
        allowNull: false
    },
    Nombre_cliente: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Apellido_cliente: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Telefono_cliente: {
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

module.exports = Reportepedido;
