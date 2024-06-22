const Marcaproducto = require('../models/Marcaproducto');
const router = require('express').Router();

// Obtener todas las marcas de producto
router.get("/", async (req, res) => {
    try {
        const marcaproducto = await Marcaproducto.findAll();
        res.json(marcaproducto);
    } catch (error) {
        console.error("Error al obtener las marcas de producto:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

// Obtener una sola marca de producto por su ID
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const marcaproducto = await Marcaproducto.findByPk(id);
        if (!marcaproducto) {
            return res.status(404).json({ error: "Marca de producto no encontrada." });
        }
        res.json(marcaproducto);
    } catch (error) {
        console.error("Error al obtener la marca de producto:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

// Crear una nueva marca de producto
router.post("/", async (req, res) => {
    // Verificar si los campos requeridos están presentes en la solicitud
    const {Nom_marca_producto, Estado_marca_producto } = req.body;
    if (!Nom_marca_producto || Estado_marca_producto === undefined) {
        return res.status(400).json({ error: "Uno o más campos requeridos están vacíos." });
    }

    try {
        const marcaproducto = await Marcaproducto.create({
            Nom_marca_producto,
            Estado_marca_producto,
        });
        res.status(201).json(marcaproducto);
    } catch (error) {
        console.error("Error al crear la marca de producto:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

// Actualizar una marca de producto por su ID
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    try {
        const marcaproducto = await Marcaproducto.findByPk(id);
        if (!marcaproducto) {
            return res.status(404).json({ error: "Marca de producto no encontrada." });
        }
        await marcaproducto.update(newData);
        res.json(marcaproducto);
    } catch (error) {
        console.error("Error al actualizar la marca de producto:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

// Eliminar una marca de producto por su ID
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const marcaproducto = await Marcaproducto.findByPk(id);
        if (!marcaproducto) {
            return res.status(404).json({ error: "Marca de producto no encontrada." });
        }
        await marcaproducto.destroy();
        res.status(204).end();
    } catch (error) {
        console.error("Error al eliminar la marca de producto:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

module.exports = router;
