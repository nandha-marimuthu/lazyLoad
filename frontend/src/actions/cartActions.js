import axios from 'axios'

const ADD_ITEM = "ADD_ITEM";
const DELETE_ITEM = "DELETE_ITEM";

export const addItem = (id, quantity) => async( dispatch, getState ) => {
  const {data} = await axios.get(`/api/products/${id}`)

  dispatch({
    type: ADD_ITEM,
    payload: {
      product: data._id,
      name: data.name,
      price: data.price,
      countInStock: data.countInStock,
      quantity,
    },
  })

  sessionStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const deleteItem = (id) => (dispatch,getState) => {
  dispatch({
    type: DELETE_ITEM,
    payload: id
  })

  sessionStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}