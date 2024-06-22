const Tipomovimiento = require('../models/Tipomovimiento');
const router = require('express').Router();

// Obtener todos los tipos de movimiento
router.get("/", async (req, res) => {
    try {
        const tipomovimiento = await Tipomovimiento.findAll();
        res.status(200).json({ mensaje: "Tipos de movimiento obtenidos correctamente", tipomovimiento });
    } catch (error) {
        console.error("Error al obtener los tipos de movimiento:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});


// Obtener un solo tipo de movimiento por su ID
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const tipomovimiento = await Tipomovimiento.findByPk(id);
        if (!tipomovimiento) {
            return res.status(404).json({ error: "Tipo de movimiento no encontrado." });
        }
        res.status(200).json({ message: "Tipo de movimiento obtenido correctamente", tipomovimiento });
    } catch (error) {
        console.error("Error al obtener el tipo de movimiento:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});


// Crear un nuevo tipo de movimiento
router.post("/", async (req, res) => {
    // Verificar si los campos requeridos están presentes en la solicitud
    const { Descrip_tp_movimiento } = req.body;
    if (!Descrip_tp_movimiento) {
        return res.status(400).json({ error: "Uno o más campos requeridos están vacíos." });
    }

    try {
        const tipomovimiento = await Tipomovimiento.create({
            Descrip_tp_movimiento,
        });
        res.status(200).json({ mensaje: "Tipo de movimiento agregado correctamente", tipomovimiento });
    } catch (error) {
        console.error("Error al crear el tipo de movimiento:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

// Actualizar un tipo de movimiento por su ID
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    try {
        const tipomovimiento = await Tipomovimiento.findByPk(id);
        if (!tipomovimiento) {
            return res.status(404).json({ error: "Tipo de movimiento no encontrado." });
        }
        await tipomovimiento.update(newData);
        res.status(200).json({ mensaje: "Tipo de movimiento actualizado correctamente", tipomovimiento });
    } catch (error) {
        console.error("Error al actualizar el tipo de movimiento:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

// Eliminar un tipo de movimiento por su ID
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const tipomovimiento = await Tipomovimiento.findByPk(id);
        if (!tipomovimiento) {
            return res.status(404).json({ error: "Tipo de movimiento no encontrado." });
        }
        await tipomovimiento.destroy();
        res.status(200).json({ mensaje: "Tipo de movimiento eliminado exitosamente." });
    } catch (error) {
        console.error("Error al eliminar el tipo de movimiento:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});


module.exports = router;
