import express from "express"
import { getAllProducts,createProduct,updateProduct,deleteProduct,getProduct } from "../controllers/productController.js"

const router = express.Router()

router.route('/products').get(getAllProducts)
router.route('/products/new').post(createProduct)
router.route('/products/:id')
    .put(updateProduct)
    .delete(deleteProduct)
    .get(getProduct)

export default router