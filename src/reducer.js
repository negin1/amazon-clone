export const initialState = {
  basket: [],
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET": /* everytime we click on add  to basked  */
      return {
        ...state,
        basket: [...state.basket, action.item], /* state of the basket, pluss the item you added  */
      };
    default:
      return state;
  }
};

export default reducer;
