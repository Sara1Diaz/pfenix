// models/Usuario.js
const { DataTypes } = require('sequelize');
const db = require('../db/database');

const Usuario = db.define('Usuario', {
    Id_usuario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    PK_fk_Id_tdoc: {
        type: DataTypes.STRING
    },
    Numero_documento: {
        type: DataTypes.STRING
    },
    Primer_nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Segundo_nombre: {
        type: DataTypes.STRING
    },
    Primer_apellido: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Segundo_apellido: {
        type: DataTypes.STRING
    },
    Telefono_contacto: {
        type: DataTypes.STRING
    },
    Email: {
        type: DataTypes.STRING
    },
    Pk_fk_Id_Cod_rol: {
        type: DataTypes.INTEGER
    },
    Clave: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Estado_usuario: {
        type: DataTypes.STRING
    }
});

module.exports = Usuario;
