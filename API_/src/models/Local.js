const { DataTypes } = require("sequelize");
const db = require("../db/database");

const Local = db.define("Local", {
    Num_local: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    Centro_comercial: {
        type: DataTypes.STRING,
        allowNull: false
    },
    PK_fk_Id_usuariovendedor: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
});

module.exports = Local;
