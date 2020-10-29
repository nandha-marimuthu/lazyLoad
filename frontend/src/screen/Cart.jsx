import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from 'react-redux';
import {addItem} from '../actions/cartActions'

const Cart = ({match, location, history}) => {

  const productId = match.params.id
  const quantity = location.search ? Number(location.search.split('=')[1]) : 1
  const dispatch = useDispatch()
  const cart = useSelector(state => state.cart)
  const { cartItems } = cart

  useEffect (() => {
    if(productId) {
      dispatch(addItem(productId, quantity))
    }
  }, [dispatch, productId, quantity])

  // Quantity changer
 /* 
  const increment = (props) => {
    let qty = props.qtyn
    if (qty + 1 > props.stock) alert('Exceeded stock limit')
    else qty+=1
    dispatch(addItem(productId, qty))
  }

  const decrement = (props) => {
    let qty = props.qtyn
    if (qty > props.stock) alert('Order at least one')
    else qty-=1
    dispatch(addItem(productId, qty))
  }*/

  return(
    <div>
      <h1> Shopping Cart </h1>
      {cartItems.length === 0 ? <h3>Your cart is empty<Link to='/'> Go Shopping </Link></h3> 
      :
      ( 
        <div>
        {cartItems.map(item => (
          <div>
            <h1><Link to ={`/product/${item.product}`}>{item.name}</Link></h1>
            <h3>	&#x20B9; {item.price} </h3>
            <button /*onClick={increment({stock:item.countInStock, qtyn:item.quantity})}*/>increase</button>
                <button>  items: {item.quantity} </button>
                <button /*onClick={decrement({stock:0, qtyn:item.quantity})}*/>decrease</button>
              <br/><br/>
              <h3>Total = &#x20B9; {item.quantity*item.price}</h3>
          </div>
        ))}
        </div>
      )}
    </div>
  );
}

export default Cart;