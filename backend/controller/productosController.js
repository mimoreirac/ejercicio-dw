const productos = [
  { id: 1, nombre: "Camisa a cuadros", precio: 31.5, categoria: "Ropa" },
  { id: 2, nombre: "Gafas", precio: 10.9, categoria: "Accesorios" },
  { id: 3, nombre: "Medias", precio: 6.99, categoria: "Ropa" },
  { id: 4, nombre: "Manzana", precio: 0.5, categoria: "Comida" },
];

export const getProductos = (req, res) => {
  res.status(200).json(productos);
};
