
const Movimientoinventario = require('../models/Movimientoinventario');
const router = require('express').Router();

// Obtener todos los movimientos de inventario
router.get("/", async (req, res) => {
    try {
        const movimiento = await Movimientoinventario.findAll();
        res.status(200).json({ mensaje: "Datos obtenidos exitosamente", movimiento });
    } catch (error) {
        console.error("Error al obtener los movimientos de inventario:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

// Obtener un solo movimiento de inventario por su ID
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const movimiento = await Movimientoinventario.findByPk(id);
        if (!movimiento) {
            return res.status(404).json({ error: "Movimiento de inventario no encontrado." });
        }
        res.status(200).json({ mensaje: "Dato obtenido exitosamente", movimiento });
    } catch (error) {
        console.error("Error al obtener el movimiento de inventario:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

// Crear un nuevo movimiento de inventario
router.post("/", async (req, res) => {
    try {
        const movimiento = await Movimientoinventario.create(req.body);
        res.status(201).json({ mensaje: "Movimiento de inventario creado exitosamente", movimiento });
    } catch (error) {
        console.error("Error al crear el movimiento de inventario:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

// Actualizar un movimiento inventario por su ID
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    try {
        const movimientoinventario = await Movimientoinventario.findByPk(id);
        if (!movimientoinventario) {
            return res.status(404).json({ error: "movimiento inventario no encontrado." });
        }
        await movimientoinventario.update(newData);
        res.status(200).json({ mensaje: "movimiento inventario editado exitosamente", movimientoinventario });
    } catch (error) {
        console.error("Error al actualizar el movimientoinventario:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});



// Eliminar una marca de producto por su ID
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const movimientoinventario = await Movimientoinventario.findByPk(id);
        if (!movimientoinventario) {
            return res.status(404).json({ error: "Marca de producto no encontrada." });
        }
        await movimientoinventario.destroy();
        res.status(200).json({ mensaje: "Marca de producto eliminada exitosamente." });
    } catch (error) {
        console.error("Error al eliminar la marca de producto:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

module.exports = router;
