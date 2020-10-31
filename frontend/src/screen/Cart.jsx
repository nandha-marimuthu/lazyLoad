import React, { useEffect } from 'react';
import {Link} from 'react-router-dom';
import { Row, Col, ListGroup, Form, Button} from "react-bootstrap";
import {useSelector, useDispatch} from 'react-redux';
import {addItem, deleteItem} from '../actions/cartActions';
import '../index.css';

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

  const removeFromCartHandler = (id) => {
    dispatch(deleteItem(id))
  }

  return(
    <div className='cart'>
      <Row>
        <Col md= {8}>
          <h1>Shopping Cart</h1>
          {cartItems.length === 0 ? <h3>Your cart is empty<Link to='/'> Go Shopping </Link></h3> 
          : (
              <ListGroup variant ='flush'>
                {cartItems.map( item => (
                  <ListGroup.Item key={item.product}>
                    <Row>
                      <Col md={3}>
                        <Link to={`/product/${item.product}`}>{item.name}</Link>
                      </Col>
                      <Col md={2}>&#x20B9; {item.price} </Col>
                      <Col md={2}>
                        <Form.Control
                              as = 'select'
                              value={item.quantity}
                              onChange={(e) => dispatch(addItem(item.product, Number(e.target.value)))}>
                                {[...Array(item.countInStock).keys()].map((x) => (
                                  <option key={x+1} value={x+1}>
                                    {x+1}
                                  </option>
                                ))}
                              </Form.Control>
                      </Col>
                      <Col md={2}>
                        <Button type='button' variant='dark' onClick={() => 
                        removeFromCartHandler(item.product)}>
                          Delete
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            )}
        </Col>
      </Row>
      <div class = 'total'>
        <h1>Total: &#x20B9; 
          {cartItems.reduce((acc, item) => acc + item.quantity*item.price ,0).toFixed(2)}
        </h1>
      </div>
    </div>
  );
}

export default Cart;