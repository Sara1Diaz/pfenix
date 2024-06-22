const Reporteentrada = require('../models/Reporteentrada');
const router = require('express').Router();

// Obtener todos los reportes que tienen una entrada
router.get("/", async (req, res) => {
    try {
        const reporteentrada = await Reporteentrada.findAll();
        res.json(reporteentrada);
    } catch (error) {
        console.error("Error al obtener los reportes que tienen una entrada:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

// Obtener un solo reporte que tiene una entrada por su Id_entrada
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const reporteentrada = await Reporteentrada.findByPk(id);
        if (!reporteentrada) {
            return res.status(404).json({ error: "Reporte que tiene una entrada no encontrado." });
        }
        res.json(reporteentrada);
    } catch (error) {
        console.error("Error al obtener el reporte que tiene una entrada:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

// Crear un nuevo reporte que tiene una entrada
router.post("/", async (req, res) => {
    try {
        const reporteentrada = await Reporteentrada.create(req.body);
        res.status(201).json(reporteentrada);
    } catch (error) {
        console.error("Error al crear el reporte entrada:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

// Actualizar un reporte que tiene una entrada por su Id_entrada
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    try {
        const reporteentrada = await Reporteentrada.findByPk(id);
        if (!reporteentrada) {
            return res.status(404).json({ error: "Reporte que tiene una entrada no encontrado." });
        }
        await reporteentrada.update(newData);
        res.json(reporteentrada);
    } catch (error) {
        console.error("Error al actualizar el reporte que tiene una entrada:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

// Eliminar un reporte que tiene una entrada por su Id_entrada
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const reporteentrada = await Reporteentrada.findByPk(id);
        if (!reporteentrada) {
            return res.status(404).json({ error: "Reporte entrada no encontrado." });
        }
        await reporteentrada.destroy();
        res.status(200).json({ mensaje: "Reporte entrada eliminado exitosamente." });
    } catch (error) {
        console.error("Error al eliminar el reporte entrada:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

module.exports = router;
