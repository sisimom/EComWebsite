import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

//@desc    Fetch  all products
//@route   GET /api/products
//@access  Public
const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

//@desc    Fetch  a product
//@route   GET /api/products/:id
//@access  Public
const getProductById = asyncHandler(async (req, res) => {
  // console.log("product req", req.params);
  const product = await Product.findById(req.params.id);
  // console.log("product res", res);

  if (product) {
    return res.json(product);
  } else {
    res.status(404);
    throw new Error("Resource not foun");
  }
});

export { getProducts, getProductById };
