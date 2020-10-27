import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../index.css';

function Description({match}) {
 
  //This part fetches the data from api

  const [product,setProduct]=useState({})

  useEffect(() => {
    const fetchProduct = async () => {
      const {data}=await axios.get(`/api/products/${match.params.id}`)
      setProduct(data)
    }
    fetchProduct()},[match])

  // This is increment and decrement part

  const [quantity,setQuantity]= useState(1)

  const increment = () => {
    if (quantity + 1 > product.countInStock) alert('Exceeded stock limit')
    else setQuantity((count) => count + 1)
  }

  const decrement = () => {
    if (quantity - 1 < 1) alert('Order at least one')
    else setQuantity((count) => count - 1)
  }

  const total= quantity*product.price
    
    return(
      <div className="product_description">
        <div className='zoom'>
          <img src={product.image} alt=""/>
        </div>
        <h1>{product.name}</h1>
        <h2>&#x20B9; {product.price}</h2>
        <p>{product.description}</p><br/>
        <div className='adding'>
           
          <button onClick={increment}>increase</button>
          <button>  items: {quantity} </button>
          <button onClick={decrement}>decrease</button>
        </div><br/><br/>
        <h3>Total = &#x20B9; {total}</h3>
        <button disabled={product.countInStock === 0}>
          {product.countInStock ? "Add to Cart" : "Out of Stock"}
        </button>
    </div>
          
  );
}

export default Description;