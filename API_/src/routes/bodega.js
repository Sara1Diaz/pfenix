const Bodega = require('../models/Bodega'); // Cambio de Usuario a Bodega
const router = require('express').Router();

// Obtener todas las bodegas
router.get("/", async (req, res) => {
    try {
        const bodegas = await Bodega.findAll(); // Cambio de Usuario a Bodega
        res.json(bodegas); // Cambio de usuario a bodegas
    } catch (error) {
        console.error("Error al obtener las bodegas:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

// Obtener una sola bodega por su ID
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const bodega = await Bodega.findByPk(id); // Cambio de Usuario a Bodega
        if (!bodega) {
            return res.status(404).json({ error: "Bodega no encontrada." }); // Cambio de Usuario a Bodega
        }
        res.json(bodega); // Cambio de usuario a bodega
    } catch (error) {
        console.error("Error al obtener la bodega:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

// Crear una nueva bodega
router.post("/", async (req, res) => {
    // Verificar si los campos requeridos están presentes en la solicitud
    const { PK_fk_Id_marca_producto, Ubicacion_bodega, PK_fk_Id_usuariobodeguero } = req.body; // Cambio de Usuario a Bodega
    if (!PK_fk_Id_marca_producto || !Ubicacion_bodega || !PK_fk_Id_usuariobodeguero) { // Cambio de Usuario a Bodega
        return res.status(400).json({ error: "Uno o más campos requeridos están vacíos." });
    }

    try {
        const bodega = await Bodega.create({
            PK_fk_Id_marca_producto,
            Ubicacion_bodega,
            PK_fk_Id_usuariobodeguero,
        });
        res.status(201).json(bodega);
    } catch (error) {
        console.error("Error al crear la bodega:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

// Actualizar una bodega por su ID
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    try {
        const bodega = await Bodega.findByPk(id); // Cambio de Usuario a Bodega
        if (!bodega) {
            return res.status(404).json({ error: "Bodega no encontrada." }); // Cambio de Usuario a Bodega
        }
        await bodega.update(newData);
        res.json(bodega); // Cambio de usuario a bodega
    } catch (error) {
        console.error("Error al actualizar la bodega:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

// Eliminar una bodega por su ID
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const bodega = await Bodega.findByPk(id); // Cambio de Usuario a Bodega
        if (!bodega) {
            return res.status(404).json({ error: "Bodega no encontrada." }); // Cambio de Usuario a Bodega
        }
        await bodega.destroy();
        res.status(204).end();
    } catch (error) {
        console.error("Error al eliminar la bodega:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

module.exports = router;
