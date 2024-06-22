const Local = require('../models/Local');
const router = require('express').Router();

// Obtener todos los locales
router.get("/", async (req, res) => {
    try {
        const locales = await Local.findAll();
        res.json(locales);
    } catch (error) {
        console.error("Error al obtener los locales:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

// Obtener un solo local por su ID
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const local = await Local.findByPk(id);
        if (!local) {
            return res.status(404).json({ error: "Local no encontrado." });
        }
        res.json(local);
    } catch (error) {
        console.error("Error al obtener el local:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

// Crear un nuevo local
router.post("/", async (req, res) => {
    // Verificar si los campos requeridos están presentes en la solicitud
    const {Num_local, Centro_comercial, PK_fk_Id_usuariovendedor } = req.body;
    if (!Num_local || !Centro_comercial || !PK_fk_Id_usuariovendedor) {
        return res.status(400).json({ error: "Uno o más campos requeridos están vacíos." });
    }

    try {
        const local = await Local.create({
            Num_local,
            Centro_comercial,
            PK_fk_Id_usuariovendedor
        });
        res.status(201).json(local);
    } catch (error) {
        console.error("Error al crear el local:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

// Actualizar un local por su ID
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    try {
        const local = await Local.findByPk(id);
        if (!local) {
            return res.status(404).json({ error: "Local no encontrado." });
        }
        await local.update(newData);
        res.json(local);
    } catch (error) {
        console.error("Error al actualizar el local:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

// Eliminar un local por su ID
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const local = await Local.findByPk(id);
        if (!local) {
            return res.status(404).json({ error: "Local no encontrado." });
        }
        await local.destroy();
        res.status(204).end();
    } catch (error) {
        console.error("Error al eliminar el local:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

module.exports = router;
