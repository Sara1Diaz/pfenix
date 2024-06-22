const Rol = require('../models/Rol');
const router = require('express').Router();

// Obtener todos los roles
router.get("/", async (req, res) => {
    try {
        const rol= await Rol.findAll();
        res.json(rol);
    } catch (error) {
        console.error("Error al obtener los roles:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

// Obtener un solo rol por su ID
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const rol = await Rol.findByPk(id);
        if (!rol) {
            return res.status(404).json({ error: "Rol no encontrado." });
        }
        res.json(rol);
    } catch (error) {
        console.error("Error al obtener el rol:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

// Crear un nuevo rol
router.post("/", async (req, res) => {
    // Verificar si los campos requeridos están presentes en la solicitud
    const { Desc_rol, Estado_rol } = req.body;
    if ( !Desc_rol || Estado_rol === undefined) {
        return res.status(400).json({ error: "Uno o más campos requeridos están vacíos." });
    }

    try {
        const rol = await Rol.create({
            Desc_rol,
            Estado_rol,
        });
        res.status(201).json(rol);
    } catch (error) {
        console.error("Error al crear el rol:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

// Actualizar un rol por su ID
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    try {
        const rol = await Rol.findByPk(id);
        if (!rol) {
            return res.status(404).json({ error: "Rol no encontrado." });
        }
        await rol.update(newData);
        res.json(rol);
    } catch (error) {
        console.error("Error al actualizar el rol:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

// Eliminar un rol por su ID
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const rol = await Rol.findByPk(id);
        if (!rol) {
            return res.status(404).json({ error: "Rol no encontrado." });
        }
        await rol.destroy();
        res.status(204).end();
    } catch (error) {
        console.error("Error al eliminar el rol:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

module.exports = router;
