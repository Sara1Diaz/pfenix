const Detallereportesalida = require('../models/Detallereportesalida');
const router = require('express').Router();

// Obtener todos los detallereportesalida de reporte de salida
router.get("/", async (req, res) => {
    try {
        // Aquí debes agregar el código para obtener los detallereportesalida del reporte de salida
        const detallereportesalida = await Detallereportesalida.findAll(); // Ejemplo de uso de Sequelize

        if (!detallereportesalida || detallereportesalida.length === 0) {
            return res.status(404).json({ message: "No se encontraron detallereportesalida de reporte de salida." });
        }

        return res.status(200).json({ message: "Datos obtenidos exitosamente.", detallereportesalida });
    } catch (error) {
        console.error("Error al obtener los detallereportesalida de reporte de salida:", error);
        return res.status(500).json({ error: "Error interno del servidor." });
    }
});


// Obtener un solo detalle de reporte de salida por su ID
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const detallereportesalida = await Detallereportesalida.findByPk(id);
        if (!detallereportesalida) {
            return res.status(404).json({ error: "Detalle de reporte de salida no encontrado." });
        }
        console.log("Detalle de reporte de salida obtenido exitosamente.");
        return res.status(200).json({ message: "Detalle de reporte de salida obtenido exitosamente.", detallereportesalida });
    } catch (error) {
        console.error("Error al obtener el detalle de reporte de salida:", error);
        return res.status(500).json({ error: "Error interno del servidor." });
    }
});


// Crear un nuevo detalle de reporte de salida
router.post("/", async (req, res) => {
    try {
        const detallereportesalida = await Detallereportesalida.create(req.body);
        console.log("Datos de reporte de salida creados exitosamente.");
        return res.status(201).json({ message: "Datos creados exitosamente.", detallereportesalida });
    } catch (error) {
        console.error("Error al crear el detalle de reporte de salida:", error);
        return res.status(500).json({ error: "Error interno del servidor." });
    }
});


// Actualizar un detalle de reporte de salida por su ID
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    try {
        const detallereportesalida = await Detallereportesalida.findByPk(id);
        if (!detallereportesalida) {
            return res.status(404).json({ error: "Detalle de reporte de salida no encontrado." });
        }
        await detallereportesalida.update(newData);
        console.log("Datos actualizados correctamente.");
        return res.status(200).json({ message: "Datos actualizados correctamente.", detallereportesalida });
    } catch (error) {
        console.error("Error al actualizar el detalle de reporte de salida:", error);
        return res.status(500).json({ error: "Error interno del servidor." });
    }
});



// Eliminar un detalle de reporte de salida por su ID
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const detallereportesalida = await Detallereportesalida.findByPk(id);
        if (!detallereportesalida) {
            return res.status(404).json({ mensaje: "Detalle de reporte de salida no encontrado." });
        }
        await detallereportesalida.destroy();
        return res.status(200).json({ mensaje: "Detalle de reporte de salida eliminado exitosamente." });
    } catch (error) {
        console.error("Error al eliminar el detalle de reporte de salida:", error);
        return res.status(500).json({ error: "Error interno del servidor." });
    }
});


module.exports = router;
