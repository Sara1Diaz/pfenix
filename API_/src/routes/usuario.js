const Usuario = require('../models/Usuario');
const router = require('express').Router();

// Obtener todos los usuarios
router.get("/", async (req, res) => {
    try {
        const usuarios = await Usuario.findAll();
        res.json(usuarios);
    } catch (error) {
        console.error("Error al obtener los usuarios:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

// Obtener un solo usuario por su ID
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
            return res.status(404).json({ error: "Usuario no encontrado." });
        }
        res.json(usuario);
    } catch (error) {
        console.error("Error al obtener el usuario:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});


// Crear un nuevo usuario
router.post('/', async (req, res) => {
    const {
        PK_fk_Id_tdoc, Numero_documento, Primer_nombre, Segundo_nombre,
        Primer_apellido, Segundo_apellido, Telefono_contacto, Email,
        Pk_fk_Id_Cod_rol, Clave, Estado_usuario
    } = req.body;

    if (!PK_fk_Id_tdoc || !Numero_documento || !Primer_nombre || !Primer_apellido || !Clave) {
        return res.status(400).json({ error: 'Uno o más campos requeridos están vacíos.' });
    }

    try {
        const usuario = await Usuario.create({
            PK_fk_Id_tdoc, Numero_documento, Primer_nombre, Segundo_nombre,
            Primer_apellido, Segundo_apellido, Telefono_contacto, Email,
            Pk_fk_Id_Cod_rol, Clave, Estado_usuario
        });

        // Devuelve el usuario completo creado
        res.status(201).json(usuario);

    } catch (error) {
        console.error('Error al crear el usuario:', error);
        res.status(500).json({ error: 'Error interno del servidor.' });
    }
});

// Actualizar un usuario por su ID
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const newData = req.body;

    try {
        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
            return res.status(404).json({ error: "Usuario no encontrado." });
        }
        const updatedUsuario = await usuario.update(newData);
        res.json(updatedUsuario);
    } catch (error) {
        console.error("Error al actualizar el usuario:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

// Eliminar un usuario por su ID
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
            return res.status(404).json({ error: "Usuario no encontrado." });
        }
        await usuario.destroy();  // Asegúrate de que 'destroy' está disponible
        res.status(204).end();
    } catch (error) {
        console.error("Error al eliminar el usuario:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

module.exports = router;
