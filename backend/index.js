import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("OK");
});

app.listen(4000, () => {
  console.log("corriendo en el puerto 4000");
});
