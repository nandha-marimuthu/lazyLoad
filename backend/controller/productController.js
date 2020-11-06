import asyncHandler from  "express-async-handler"
import Product from '../models/productModel.js'

//fetch all products

const getProducts= asyncHandler(async(req,res)=>{

  const keyword = req.query.keyword //search items through keyword
  ? { 
    name: {
      $regex : req.query.keyword,
      $options: 'i',
    },
  }
  : {}

  const products=await Product.find({...keyword})
  
  res.json(products);
})

//fetch product by Id

const getProductsById= asyncHandler(async(req,res)=>{

  const product = await Product.findById(req.params.id)
  if(product){
  res.json(product);
  }else{
    res.status(404)

    throw new Error ('product not found')
  }
})

export {
  getProducts,
  getProductsById
}