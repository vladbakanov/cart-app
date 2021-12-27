import { ADD_ITEM, REMOVE_ITEM, CLEAR_ALL, LOAD_CART } from "./actionType";
const initialState = {
  data: {},
  count: 0,
};
export function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_ITEM:
      if (state.data[action.payload] || state.data[action.payload] == 0) {
        return {
          ...state,
          data: {
            ...state.data,
            [action.payload]: ++state.data[action.payload],
          },
          count: ++state.count,
        };
      } else {
        return {
          ...state,
          data: { ...state.data, [action.payload]: 1 },
          count: ++state.count,
        };
      }
    case REMOVE_ITEM:
      if (state.data[action.payload] == 1) {
        delete state.data[action.payload];
        return {
          ...state,
          data: { ...state.data },
          count: --state.count,
        };
      } else {
        return {
          ...state,
          data: {
            ...state.data,
            [action.payload]: --state.data[action.payload],
          },
          count: --state.count,
        };
      }

    case CLEAR_ALL:
      return { cart: [] };
    case LOAD_CART:
      return {
        ...state,
        data: { ...state.data, ...action.payload },
      };
    default:
      return state;
  }
}
