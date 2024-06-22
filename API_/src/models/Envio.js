const { DataTypes } = require("sequelize");
const db = require("../db/database");

const Envio = db.define("envio", {
    Id_envio: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Pk_fk_id_pedido: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Tipo_envio: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Nom_transportadora: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Ciudad_envio: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Direccion_entrega: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Valor_envio: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false
    },
    Fecha_estimada_entrega_pedido: {
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

module.exports = Envio;
