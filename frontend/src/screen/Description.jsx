import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProductDetails } from '../actions/productActions';
import '../index.css';

function Description({history, match}) {
 
  const dispatch =  useDispatch()

  const productDetails = useSelector(state => state.productDetails)
  const { loading, error, product } = productDetails

  useEffect(() => {
    dispatch(listProductDetails(match.params.id))
  }, [dispatch, match])

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

  const total= quantity*product.price;
  const tot=total.toFixed(2);

  // This is adding to cart

  const addToCartHandler = () => {
    history.push(`/cart/${match.params.id}?qty=${quantity}`)
  }
    
    return(
      <div>
         { loading ? (<h2>Loading page....</h2>) : error ? (<h3>{error}</h3>) :  
          (  
            <div className="product_description">
              <div className='zoom'>
                <img src={product.image} alt=""/>
              </div><br/><br/>
              <h1>{product.name}</h1>
              <h2>&#x20B9; {product.price}</h2>
              <p>{product.description}</p><br/>
              <div className='adding'>
                
                <button onClick={increment}>+</button>
                <button disabled>{quantity} </button>
                <button onClick={decrement}>-</button>
              </div><br/><br/>
              <h3>Total = &#x20B9; {tot}</h3>
              <button disabled={product.countInStock === 0} onClick={addToCartHandler}>
                {product.countInStock ? "Add to Cart" : "Out of Stock"}
              </button>
            </div>
          ) } 
      </div>
          
  );
}

export default Description;