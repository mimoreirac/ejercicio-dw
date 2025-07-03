import express from "express";
import productosRoutes from "./routes/productos.js";

const app = express();

app.use("/productos", productosRoutes);

app.listen(4000, () => {
  console.log("corriendo en el puerto 4000");
});

export default app;
