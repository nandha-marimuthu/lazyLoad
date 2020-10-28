const ADD_ITEM = "ADD_ITEM";
const DELETE_ITEM = "DELETE_ITEM";

export const cartReducer = (state= { cartItems: [] }, action) => {

  switch (action.type)
  {
    case ADD_ITEM:
      const item = action.payload
      const existItem = state.cartItems.find(x => x.product === item.product)
      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map( x => x.product === existItem.product ? item : x)
        }
      }
      else {
        return {
          ...state,
          cartItems: [...state.cartItems, item]
        }
      }
      

      case DELETE_ITEM:
        let copyState1 = state.slice();
        let item1 = copyState1.filter((items)=> items.id === action.payload.id)
        let ind = copyState1.findIndex((item)=> item.id === item1[0].id)
        let copyState2 = copyState1.splice(ind)
        return copyState2

    default:
      return state
  }

}