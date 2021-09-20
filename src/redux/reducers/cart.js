const initialState = {
  items: {},
  totalPrice: 0,
  itemsCount: 0,
};

const card = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PIZZA_CART':
      const newItems = {
        ...state.items,
        [action.payload.id]: !state.items[action.payload.id]
          ? [action.payload]
          : [...state.items[action.payload.id], action.payload],
      };
      const allPizzas = [].concat.apply([], Object.values(newItems));
      return {
        ...state,
        items: newItems,
        itemsCount: allPizzas.length,
        totalPrice: allPizzas.reduce((sum, obj) => obj.price + sum, 0),
      };
    default:
      return state;
  }
};

export default card;
