import express from "express";
const router = express.Router();
// import asyncHandler from "../middleware/asyncHandler.js";
// import Product from "../models/productModel.js";
import {
  getProducts,
  getProductById,
} from "../controllers/productController.js";

// router.get(
//   "/",
//   asyncHandler(async (req, res) => {
//     const products = await Product.find({});
//     res.json(products);
//   })
// );

// router.get(
//   "/:id",
//   asyncHandler(async (req, res) => {
//     console.log("product req", req.params);
//     const product = await Product.findById(req.params.id);
//     console.log("product res", res);

//     if (product) {
//       return res.json(product);
//     } else {
//       res.status(404);
//       throw new Error("Resource not foun");
//     }
//   })
// );

router.route("/").get(getProducts);
router.route("/:id").get(getProductById);

export default router;
