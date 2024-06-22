const TipoDocumento = require('../models/Tipodocumento');
const router = require('express').Router();

// Obtener todos los tipos de documentos
router.get("/", async (req, res) => {
    try {
        const tipodocumento = await TipoDocumento.findAll();
        res.json(tipodocumento);
    } catch (error) {
        console.error("Error al obtener los tipos de documentos:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

// Obtener un solo tipo de documento por su ID
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const tipodocumento = await TipoDocumento.findByPk(id);
        if (!tipodocumento) {
            return res.status(404).json({ error: "Tipo de documento no encontrado." });
        }
        res.json(tipodocumento);
    } catch (error) {
        console.error("Error al obtener el tipo de documento:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

// Crear un nuevo tipo de documento
router.post("/", async (req, res) => {
    // Verificar si los campos requeridos están presentes en la solicitud
    const { Id_tdoc, Tdoc } = req.body;
    if (!Id_tdoc || !Tdoc) {
        return res.status(400).json({ error: "Uno o más campos requeridos están vacíos." });
    }

    try {
        const tipodocumento = await TipoDocumento.create({
            Id_tdoc,
            Tdoc,
        });
        res.status(201).json(tipodocumento);
    } catch (error) {
        console.error("Error al crear el tipo de documento:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

// Actualizar un tipo de documento por su ID
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    try {
        const tipodocumento = await TipoDocumento.findByPk(id);
        if (!tipodocumento) {
            return res.status(404).json({ error: "Tipo de documento no encontrado." });
        }
        await tipodocumento.update(newData);
        res.json(tipodocumento);
    } catch (error) {
        console.error("Error al actualizar el tipo de documento:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

// Eliminar un tipo de documento por su ID
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const tipodocumento = await TipoDocumento.findByPk(id);
        if (!tipodocumento) {
            return res.status(404).json({ error: "Tipo de documento no encontrado." });
        }
        await tipodocumentos.destroy();
        res.status(204).end();
    } catch (error) {
        console.error("Error al eliminar el tipo de documento:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

module.exports = router;
