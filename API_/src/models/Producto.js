const { DataTypes } = require("sequelize");
const db = require("../db/database");

const producto = db.define("producto", {
    Id_producto: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    PK_fk_Id_marca_producto: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    Modelo_producto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Tipo_producto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Color_producto: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Precio_producto: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    Talla_disponible_producto: {
        type: DataTypes.STRING
    },
    Cantidad_disponible_producto: {
        type: DataTypes.INTEGER
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

module.exports = producto;
