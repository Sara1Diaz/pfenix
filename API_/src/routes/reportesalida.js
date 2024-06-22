const Reportesalida = require('../models/Reportesalida');
const router = require('express').Router();

// Obtener todos los reportes de salida
router.get("/", async (req, res) => {
    try {
        const reportesalida = await Reportesalida.findAll();
        res.json(reportesalida);
    } catch (error) {
        console.error("Error al obtener los reportesalida:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

// Obtener un solo reportesalida por su ID
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const reportesalida = await Reportesalida.findByPk(id);
        res.json(reportesalida);
    } catch (error) {
        console.error("Error al obtener el reporte salida:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

// Crear un nuevo reporte de salida
router.post("/", async (req, res) => {
    const { Fecha_emision, PK_fk_numlocal_destino, Descripcion_salida } = req.body;
    if (!Fecha_emision || !PK_fk_numlocal_destino || !Descripcion_salida) {
        return res.status(400).json({ error: "Uno o más campos requeridos están vacíos." });
    }

    try {
        const reportesalida = await Reportesalida.create({
            Fecha_emision,
            PK_fk_numlocal_destino,
            Descripcion_salida
        });
        res.status(201).json(reportesalida);
    } catch (error) {
        console.error("Error al crear el reporte de salida:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

// Actualizar un reporte de salida por su Id_salida
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    try {
        const reportesalida = await Reportesalida.findByPk(id);
        await reportesalida.update(newData);
        res.json(reportesalida);
    } catch (error) {
        console.error("Error al actualizar el reporte de salida:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

// Eliminar una reporte salida por su ID
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const reportesalida = await Reportesalida.findByPk(id);
        await reportesalida.destroy();
        res.sendStatus(200);
    } catch (error) {
        console.error("Error al eliminar la reporte salida:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

module.exports = router;