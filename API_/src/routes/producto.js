const Producto = require('../models/Producto');
const router = require('express').Router();

// Obtener todos los productos
router.get("/", async (req, res) => {
    try {
        const productos = await Producto.findAll();
        if (!productos || productos.length === 0) {
            return res.status(404).json({ mensaje: "No se encontraron productos." });
        }
        res.status(200).json({ mensaje: "Productos obtenidos correctamente", productos });
    } catch (error) {
        console.error("Error al obtener los productos:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});


// Obtener un solo producto por su ID
router.get("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const producto = await Producto.findByPk(id);
        if (!producto) {
            return res.status(404).json({ error: "Producto no encontrado." });
        }
        res.status(200).json({ mensaje: "Producto obtenido exitosamente", producto });
    } catch (error) {
        console.error("Error al obtener el producto:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});



// Crear un nuevo producto
router.post("/", async (req, res) => {
    // Verificar si los campos requeridos están presentes en la solicitud
    const { PK_fk_Id_marca_producto,  Modelo_producto, Tipo_producto, Color_producto, Precio_producto, Talla_disponible_producto, Cantidad_disponible_producto } = req.body;
    if ( !PK_fk_Id_marca_producto || !Modelo_producto || !Tipo_producto || !Color_producto || !Precio_producto || !Talla_disponible_producto || !Cantidad_disponible_producto) {
        return res.status(400).json({ error: "Uno o más campos requeridos están vacíos." });
    }

    try {
        const producto = await Producto.create({
            PK_fk_Id_marca_producto,
            Modelo_producto,
            Tipo_producto,
            Color_producto,
            Precio_producto,
            Talla_disponible_producto,
            Cantidad_disponible_producto
        });
        res.status(201).json({ mensaje: "Producto agregado exitosamente", producto });
    } catch (error) {
        console.error("Error al crear el producto:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});


// Actualizar un producto por su ID
router.put("/:id", async (req, res) => {
    const { id } = req.params;
    const newData = req.body;
    try {
        const producto = await Producto.findByPk(id);
        if (!producto) {
            return res.status(404).json({ error: "Producto no encontrado." });
        }
        await producto.update(newData);
        res.status(200).json({ mensaje: "Producto editado exitosamente", producto });
    } catch (error) {
        console.error("Error al actualizar el producto:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});


// Eliminar una marca de producto por su ID
router.delete("/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const marcaproducto = await Marcaproducto.findByPk(id);
        if (!marcaproducto) {
            return res.status(404).json({ error: "Marca de producto no encontrada." });
        }
        await marcaproducto.destroy();
        res.status(200).json({ mensaje: "Marca de producto eliminada exitosamente." });
    } catch (error) {
        console.error("Error al eliminar la marca de producto:", error);
        res.status(500).json({ error: "Error interno del servidor." });
    }
});

module.exports = router;
