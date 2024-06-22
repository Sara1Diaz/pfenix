const Reportepedido = require('../models/Reportepedido');
const router = require('express').Router();

// Obtener todos los reportes de pedidos
router.get("/", async (req, res) => {
    try {
        const reportespedido = await Reportepedido.findAll();
        res.status(200).json({ mensaje: "Reportes de pedidos obtenidos exitosamente", reportespedido });
    } catch (error) {
        console.error("Error al obtener los reportes de pedidos:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});


// Obtener un solo reporte de pedido por su ID
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const reportepedido = await Reportepedido.findByPk(id);
        if (!reportepedido) {
            return res.status(404).json({ error: "Reporte de pedido no encontrado." });
        }
        res.status(200).json({ mensaje: "Reporte de pedido obtenido exitosamente", reportepedido });
    } catch (error) {
        console.error("Error al obtener el reporte de pedido:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

// Crear un nuevo reporte de pedido
router.post("/", async (req, res) => {
    // Verificar si los campos requeridos están presentes en la solicitud
    const { Pk_fk_numlocal, Pk_fk_Id_envio, Fecha_emision, Nombre_cliente, Apellido_cliente, Telefono_cliente } = req.body;
    if (!Pk_fk_numlocal || !Pk_fk_Id_envio || !Fecha_emision || !Nombre_cliente || !Apellido_cliente || !Telefono_cliente) {
        return res.status(400).json({ error: "Uno o más campos requeridos están vacíos." });
    }

    try {
        const reportepedido = await Reportepedido.create({
            Pk_fk_numlocal,
            Pk_fk_Id_envio,
            Fecha_emision,
            Nombre_cliente,
            Apellido_cliente,
            Telefono_cliente
        });
        res.status(201).json({ mensaje: "Reporte de pedido creado exitosamente", reportepedido });
    } catch (error) {
        console.error("Error al crear el reporte de pedido:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});
// Actualizar un reporte de pedido por su ID
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    try {
        const reportepedido = await Reportepedido.findByPk(id);
        if (!reportepedido) {
            return res.status(404).json({ error: "Reporte de pedido no encontrado." });
        }
        await reportepedido.update(newData);
        res.status(200).json({ mensaje: "Reporte de pedido editado exitosamente", reportepedido });
    } catch (error) {
        console.error("Error al actualizar el reporte de pedido:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

// Eliminar un reporte de pedido por su ID
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const reportepedido = await Reportepedido.findByPk(id);
        if (!reportepedido) {
            return res.status(404).json({ error: "Reporte de pedido no encontrado." });
        }
        await reportepedido.destroy();
        res.status(200).json({ mensaje: "Reporte de pedido eliminado exitosamente" });
    } catch (error) {
        console.error("Error al eliminar el reporte de pedido:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});


module.exports = router;
