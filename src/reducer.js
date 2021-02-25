	
export const initialState = {	
  basket: [],	
  user: null	
};	
// Selector	
export const getBasketTotal = (basket) => 	
  basket?.reduce((amount, item) => item.price + amount, 0);	
const reducer = (state, action) => {	
  console.log(action);	
  switch (action.type) {	
    case "ADD_TO_BASKET":	
      return {	
        ...state,	
        basket: [...state.basket, action.item],	
      };	
   
    case "REMOVE_FROM_BASKET":	
      const index = state.basket.findIndex(	              //we need to find the index of the id we want t
        (basketItem) => basketItem.id === action.id	      // to remove 
      );	
      let newBasket = [...state.basket];	
      if (index >= 0) {	//then it found the id 
        newBasket.splice(index, 1);	// pass in the index and splice it by one 
      } else {	
        console.warn(	
          `Cant remove product (id: ${action.id}) as its not in basket!`	
        )	
      }	
      return {	
        ...state,	
        basket: newBasket	
      }	
    	
      case "SET_USER":
      return {
        ...state,
        user: action.user
      }
      
   
    default:	
      return state;	
  }	
};	
export default reducer;