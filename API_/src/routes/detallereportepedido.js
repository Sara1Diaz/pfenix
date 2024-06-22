const Detallereportepedido = require('../models/Detallereportepedido');
const router = require('express').Router();

// Obtener todos los detalles de reporte de pedidos
router.get("/", async (req, res) => {
    try {
        const detallereportepedido = await Detallereportepedido.findAll();
        res.status(200).json({ mensaje: "Detalle reporte  pedido obtenidos exitosamente", detallereportepedido });
    } catch (error) {
        console.error("Error al obtener los detalle  reporte pedido:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});
// Obtener un solo detalle de reporte de pedido por su ID
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const detallereportepedido = await Detallereportepedido.findByPk(id);
        if (!detallereportepedido) {
            return res.status(404).json({ error: "Detalle reporte pedido no encontrado." });
        }
        res.status(200).json({ mensaje: "Detalle reporte pedido obtenido exitosamente", detallereportepedido });
    } catch (error) {
        console.error("Error al obtener el detalle reporte pedido:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

// Crear un nuevo detalle de reporte de pedido
router.post("/", async (req, res) => {
    // Verificar si los campos requeridos están presentes en la solicitud
    const { Pk_fk_id_pedido, Metodo_pago, Pk_fk_Idproducto, Cantidad_producto, Valor_producto, Total_pedido } = req.body;
    if (!Pk_fk_id_pedido || !Metodo_pago || !Pk_fk_Idproducto || !Cantidad_producto || !Valor_producto || !Total_pedido) {
        return res.status(400).json({ error: "Uno o más campos requeridos están vacíos." });
    }

    try {
        const detallereportepedido = await Detallereportepedido.create({
            Pk_fk_id_pedido,
            Metodo_pago,
            Pk_fk_Idproducto,
            Cantidad_producto,
            Valor_producto,
            Total_pedido
        });
        res.status(201).json({ mensaje: "Detalle reporte pedido agregado exitosamente", detallereportepedido });
    } catch (error) {
        console.error("Error al crear el detalle reporte  pedido:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

// Actualizar un detalle de reporte de pedido por su ID
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    try {
        const detallereportepedido = await Detallereportepedido.findByPk(id);
        if (!detallereportepedido) {
            return res.status(404).json({ error: "Detalle reporte pedido no encontrado." });
        }
        await detallereportepedido.update(newData);
        res.json({ mensaje: "Detalle  reporte pedido editado exitosamente", detallereportepedido });
    } catch (error) {
        console.error("Error al actualizar el detalle del reporte de pedido:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});


// Eliminar una marca de producto por su ID
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const detallereportepedido = await Detallereportepedido.findByPk(id);
        if (!detallereportepedido) {
            return res.status(404).json({ error: "Marca de producto no encontrada." });
        }
        await detallereportepedido.destroy();
        res.status(200).json({ mensaje: "Marca de producto eliminada exitosamente." });
    } catch (error) {
        console.error("Error al eliminar la marca de producto:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

module.exports = router;
