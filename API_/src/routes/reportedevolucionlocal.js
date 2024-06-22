const ReportedevolucionLocal = require('../models/Reportedevolucionlocal');
const router = require('express').Router();

// Obtener todos los reportes de devolución local
router.get("/", async (req, res) => {
    try {
        const reportesdevolucionLocal = await ReportedevolucionLocal.findAll();
        res.status(200).json({ mensaje: "Reporte  devolución local obtenidos exitosamente", reportesdevolucionLocal });
    } catch (error) {
        console.error("Error al obtener los reportes de devolución local:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

// Obtener un solo reporte de devolución local por su Id_devolucion
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const reportedevolucionLocal = await ReportedevolucionLocal.findByPk(id);
        if (!reportedevolucionLocal) {
            return res.status(404).json({ error: "Reporte de devolución local no encontrado." });
        }
        res.status(200).json({ mensaje: "Reporte de devolución local obtenido exitosamente", reportedevolucionLocal });
    } catch (error) {
        console.error("Error al obtener el reporte de devolución local:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

// Crear un nuevo reporte de devolución local
router.post("/", async (req, res) => {
    try {
        const reportedevolucionLocal = await ReportedevolucionLocal.create(req.body);
        res.status(201).json({ mensaje: "Reporte de devolución local agregado exitosamente", reportedevolucionLocal });
    } catch (error) {
        console.error("Error al crear el reporte de devolución local:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});


// Actualizar un reporte de devolución local por su Id_devolucion
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    try {
        const reportedevolucionLocal = await ReportedevolucionLocal.findByPk(id);
        if (!reportedevolucionLocal) {
            return res.status(404).json({ error: "Reporte de devolución local no encontrado." });
        }
        await reportedevolucionLocal.update(newData);
        res.status(200).json({ mensaje: "Reporte de devolución local actualizado correctamente", reportedevolucionLocal });
    } catch (error) {
        console.error("Error al actualizar el reporte de devolución local:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

// Eliminar un reporte de devolución local por su Id_devolucion
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const reportedevolucionlocal = await Reportedevolucionlocal.findByPk(id);
        if (!reportedevolucionlocal) {
            return res.status(404).json({ error: "Reporte de devolución local no encontrado." });
        }
        await reportedevolucionlocal.destroy();
        res.status(200).json({ mensaje: "Reporte de devolución local eliminado correctamente." });
    } catch (error) {
        console.error("Error al eliminar el reporte de devolución local:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});


module.exports = router;
