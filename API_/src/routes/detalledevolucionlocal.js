const Detalledevolucionlocal = require('../models/Detalledevolucionlocal');
const router = require('express').Router();

// Obtener todos los detalles de devolución local
router.get("/", async (req, res) => {
    try {
        const detallesDevolucionLocal = await Detalledevolucionlocal.findAll();
        res.status(200).json({ mensaje: "Detalles de devolución local obtenidos exitosamente", detallesDevolucionLocal });
    } catch (error) {
        console.error("Error al obtener los detalles de devolución local:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});


// Obtener un solo detalle de devolución local por su ID
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const detalleDevolucionLocal = await Detalledevolucionlocal.findByPk(id);
        if (!detalleDevolucionLocal) {
            return res.status(404).json({ error: "Detalle de devolución local no encontrado." });
        }
        res.status(200).json({ mensaje: "Detalle de devolución local obtenido exitosamente", detalleDevolucionLocal });
    } catch (error) {
        console.error("Error al obtener el detalle de devolución local:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});


// Crear un nuevo detalle de devolución local
router.post("/", async (req, res) => {
    const nuevoDetalleDevolucionLocal = req.body;
    try {
        const detalleDevolucionLocalCreado = await Detalledevolucionlocal.create(nuevoDetalleDevolucionLocal);
        res.status(201).json({ mensaje: "Detalle de devolución local agregado exitosamente", detalleDevolucionLocalCreado });
    } catch (error) {
        console.error("Error al crear el detalle de devolución local:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

// Actualizar un detalle de devolución local por su ID
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    try {
        const detalleDevolucionLocal = await Detalledevolucionlocal.findByPk(id);
        if (!detalleDevolucionLocal) {
            return res.status(404).json({ error: "Detalle de devolución local no encontrado." });
        }
        await detalleDevolucionLocal.update(newData);
        res.status(200).json({ mensaje: "Detalle de devolución local editado exitosamente", detalleDevolucionLocal });
    } catch (error) {
        console.error("Error al actualizar el detalle de devolución local:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

// Eliminar un detalle de devolución local por su ID
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const detalleDevolucionLocal = await Detalledevolucionlocal.findByPk(id);
        if (!detalleDevolucionLocal) {
            return res.status(404).json({ error: "Detalle de devolución local no encontrado." });
        }
        await detalleDevolucionLocal.destroy();
        res.status(200).json({ mensaje: "Detalle de devolución local eliminado exitosamente." });
    } catch (error) {
        console.error("Error al eliminar el detalle de devolución local:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

module.exports = router;