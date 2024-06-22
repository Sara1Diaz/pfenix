const { DataTypes } = require("sequelize");
const db = require("../db/database");

const Bodega = db.define("bodega", {
    Id_bodega: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    PK_fk_Id_marca_producto: {
        type: DataTypes.INTEGER,
        allowNull: false // Dependiendo de tus necesidades, puedes modificar allowNull
    },
    Ubicacion_bodega: {
        type: DataTypes.STRING,
        allowNull: false
    },
    PK_fk_Id_usuariobodeguero: {
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

module.exports = Bodega;
