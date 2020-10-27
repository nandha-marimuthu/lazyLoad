import axios from 'axios'

const PRODUCT_LIST_REQUEST = 'PRODUCT_LIST_REQUEST'
const PRODUCTS_LIST_SUCCESS = 'PRODUCTS_LIST_SUCCESS'
const PRODUCT_LIST_FAIL = 'PRODUCT_LIST_FAIL'


export const listProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST })

    const { data } = await axios.get('/api/products')

    dispatch({
      type: PRODUCTS_LIST_SUCCESS,
      payload: data
    })
  }
  catch (error){
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload: error.response && error.response.data.message ? error.response.data.message : error.message,
    })
  }
}

