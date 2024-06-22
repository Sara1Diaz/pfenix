const express = require("express");
const cors = require("cors");
const usuario = require("./routes/usuario");
const producto = require("./routes/producto");
const tipodocumento = require("./routes/tipodocumento");
const bodega = require("./routes/bodega");
const tipomovimiento = require("./routes/tipomovimiento");
const rol = require("./routes/rol");
const reportepedido = require("./routes/reportepedido");
const movimientoinventario = require("./routes/movimientoinventario");
const marcaproducto = require("./routes/marcaproducto");
const envio = require("./routes/envio");
const detalledevolucionlocal = require("./routes/detalledevolucionlocal");
const detallereporteentrada = require("./routes/detallereporteentrada");
const detallereportepedido = require("./routes/detallereportepedido");
const detallereportesalida = require("./routes/detallereportesalida");
const local = require("./routes/local");
const reportedevolucionlocal = require("./routes/reportedevolucionlocal");
const reporteentrada = require("./routes/reporteentrada");
const reportesalida = require("./routes/reportesalida");

const db = require("./db/database");
const app = express();
const port = process.env.PORT || 3030;

// Middleware
app.use(express.json()); // Para procesar JSON
app.use(cors()); // Para permitir CORS

// Rutas
app.use("/usuario", usuario);
app.use("/producto", producto);
app.use("/tipodocumento", tipodocumento);
app.use("/bodega", bodega);
app.use("/tipomovimiento", tipomovimiento);
app.use("/rol", rol);
app.use("/reportepedido", reportepedido);
app.use("/movimientoinventario", movimientoinventario);
app.use("/marcaproducto", marcaproducto);
app.use("/envio", envio);
app.use("/detalledevolucionlocal", detalledevolucionlocal);
app.use("/detallereporteentrada", detallereporteentrada);
app.use("/detallereportepedido", detallereportepedido);
app.use("/detallereportesalida", detallereportesalida);
app.use("/local", local);
app.use("/reportedevolucionlocal", reportedevolucionlocal);
app.use("/reporteentrada", reporteentrada);
app.use("/reportesalida", reportesalida);

// Inicialización y conexión a la base de datos
async function initializeDatabase() {
    try {
        await db.authenticate();
        await db.sync(); // Asegura que todas las tablas estén creadas según los modelos definidos
        console.log("Base de datos conectada");
    } catch (error) {
        console.error("Error al conectar y sincronizar la base de datos:", error);
        process.exit(1); // Salir del proceso con código de error
    }
}

// Iniciar la aplicación Express después de conectar la base de datos
async function startServer() {
    await initializeDatabase(); // Conectar y sincronizar la base de datos

    // Iniciar el servidor Express
    app.listen(port, () => {
        console.log("Servidor ejecutándose en el puerto:", port);
    });
}

// Llamar a la función para iniciar el servidor
startServer();
