import { Router } from "express";
import ProductManager from "../dao/ProductManager.js";
import productControl from "../controllers/products.controller.js";

const productsRouter = Router();
const PM = new ProductManager();

//Consigue los productos
productsRouter.get("/", productControl.getProducts.bind(productControl));

//Encuentra el producto por su ID
productsRouter.get("/:pid", productControl.getByID.bind(productControl));

//Postea un nuevo producto
productsRouter.post("/", productControl.addProduct.bind(productControl));

//Modifica un objeto por su ID
productsRouter.put("/:pid", productControl.updateProd.bind(productControl));

//Borra un producto
productsRouter.delete("/:pid", productControl.deleteProd.bind(productControl));

export default productsRouter;
