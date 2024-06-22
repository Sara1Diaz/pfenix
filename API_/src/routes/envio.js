const Envio = require('../models/Envio');
const router = require('express').Router();

// Obtener todos los envíos
router.get("/", async (req, res) => {
    try {
        const envio = await Envio.findAll();
        res.json(envio);
    } catch (error) {
        console.error("Error al obtener los envíos:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

// Obtener un solo envío por su ID
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const envio = await Envio.findByPk(id);
        if (!envio) {
            return res.status(404).json({ error: "Envío no encontrado." });
        }
        res.json(envio);
    } catch (error) {
        console.error("Error al obtener el envío:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

// Crear un nuevo envío
router.post("/", async (req, res) => {
    // Verificar si los campos requeridos están presentes en la solicitud
    const { Pk_fk_id_pedido, Tipo_envio, Nom_transportadora, Ciudad_envio, Direccion_entrega, Valor_envio, Fecha_estimada_entrega_pedido } = req.body;
    if ( !Pk_fk_id_pedido || !Tipo_envio || !Nom_transportadora || !Ciudad_envio || !Direccion_entrega || !Valor_envio || !Fecha_estimada_entrega_pedido) {
        return res.status(400).json({ error: "Uno o más campos requeridos están vacíos." });
    }

    try {
        const envio = await Envio.create({
            Pk_fk_id_pedido,
            Tipo_envio,
            Nom_transportadora,
            Ciudad_envio,
            Direccion_entrega,
            Valor_envio,
            Fecha_estimada_entrega_pedido
        });
        res.status(201).json(envio);
    } catch (error) {
        console.error("Error al crear el envío:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

// Actualizar un envío por su ID
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    try {
        const envio = await Envio.findByPk(id);
        if (!envio) {
            return res.status(404).json({ error: "Envío no encontrado." });
        }
        await envio.update(newData);
        res.json(envio);
    } catch (error) {
        console.error("Error al actualizar el envío:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

// Eliminar un envío por su ID
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const envio = await Envio.findByPk(id);
        if (!envio) {
            return res.status(404).json({ error: "Envío no encontrado." });
        }
        await envio.destroy();
        res.status(204).end();
    } catch (error) {
        console.error("Error al eliminar el envío:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

module.exports = router;
