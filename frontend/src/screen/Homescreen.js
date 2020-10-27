import React, { useState, useEffect }from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import Product from '../components/Product'
import { listProducts } from '../actions/productActions'

function Homescreen() {

  const dispatch = useDispatch()

  const productsList = useSelector(state => state.productsList)
  const { loading, error, products } = productsList

  useEffect(() => { dispatch( listProducts() ) }, [dispatch] )
    
  return (
    <div>
      <h1> Vugha's products</h1> 
      { loading ? (<h2>Loading page....</h2>) : error ? (<h3>{error}</h3>) :    
        (
          <Row>
            {products.map(product =>
              <Col sm={12} md={6} lg={4} xl={3}>
                <Product product={product}/>
              </Col>
              )
            }
          </Row> 
        )
      } 
    </div>
  );
}

export default Homescreen
