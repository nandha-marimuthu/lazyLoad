import express from 'express'
const router =express.Router()
import { getProducts, getProductsById } from '../controller/productController.js'

//redircting the route to product controller
router.route('/').get(getProducts)
router.route('/:id').get(getProductsById)

export default router