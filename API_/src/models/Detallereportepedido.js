const { DataTypes } = require("sequelize");
const db = require("../db/database");

const Detallereportepedido = db.define("Detallereportepedido", {
    Id_detalle_pedido: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    Pk_fk_id_pedido: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Metodo_pago: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Pk_fk_Idproducto: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Cantidad_producto: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    Valor_producto: {
        type: DataTypes.BIGINT,
        allowNull: false
    },
    Total_pedido: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Detallereportepedido;
