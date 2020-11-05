import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productListReducer, productDetailsReducer} from './reducers/productsReducer';
import { cartReducer } from './reducers/cartReducer'

const reducer = combineReducers({
  productsList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer
})

const cartItemsFromStorage = sessionStorage.getItem('cartItems') ? JSON.parse(sessionStorage.getItem('cartItems')) : []
const initialState = { cart: {cartItems:cartItemsFromStorage} }
const middleware = [thunk]

const store= createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store;