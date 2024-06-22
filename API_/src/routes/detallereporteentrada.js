const Detallereporteentrada = require('../models/Detallereporteentrada');
const router = require('express').Router();

// Obtener todos los detalles de reporte de entrada
router.get("/", async (req, res) => {
    try {
        const detallereporteentrada = await Detallereporteentrada.findAll();
        res.status(200).json({ mensaje: "Detalle reporte entrada obtenidos exitosamente", detallereporteentrada });
    } catch (error) {
        console.error("Error al obtener los detalles reporte entrada:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});


// Obtener un solo detalle de reporte de entrada por su ID
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const detallereporteentrada = await Detallereporteentrada.findByPk(id);
        if (!detallereporteentrada) {
            return res.status(404).json({ error: "Detalle  reporte  entrada no encontrado." });
        }
        res.status(200).json({ mensaje: "Detalle reporte  entrada mostrado exitosamente", detallereporteentrada });
    } catch (error) {
        console.error("Error al obtener el detalle  reporte entrada:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});


// Crear un nuevo detalle de reporte de entrada
router.post("/", async (req, res) => {
    try {
        const detallereporteentrada = await Detallereporteentrada.create(req.body);
        res.status(201).json({ mensaje: "Detalle reporte entrada agregado exitosamente", detallereporteentrada });
    } catch (error) {
        console.error("Error al crear el detalle reporte entrada:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

// Actualizar un detalle de reporte de entrada por su ID
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    try {
        const detallereporteentrada = await Detallereporteentrada.findByPk(id);
        if (!detallereporteentrada) {
            return res.status(404).json({ error: "Detalle reporte entrada no encontrado." });
        }
        await detallereporteentrada.update(newData);
        res.status(200).json({ mensaje: "Detalle reporte entrada actualizado exitosamente", detallereporteentrada });
    } catch (error) {
        console.error("Error al actualizar el detalle reporte entrada:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});


// Eliminar un detalle de reporte de entrada por su ID
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const detallereporteentrada = await Detallereporteentrada.findByPk(id);
        if (!detallereporteentrada) {
            return res.status(404).json({ error: "Detalle reporte entrada no encontrado." });
        }
        await detallereporteentrada.destroy();
        res.status(200).json({ mensaje: "Detalle reporte entrada eliminado exitosamente." });
    } catch (error) {
        console.error("Error al eliminar el detalle  reporte entrada:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});


module.exports = router;
