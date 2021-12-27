import { ADD_ITEM, REMOVE_ITEM, CLEAR_ALL, LOAD_CART } from "./actionType";

export function addItem(id) {
  return {
    type: ADD_ITEM,
    payload: id,
  };
}
export function removeItem(id) {
  return {
    type: REMOVE_ITEM,
    payload: id,
  };
}

export function clearAll() {
  return {
    type: CLEAR_ALL,
  };
}

export function loadCart(payload) {
  return {
    type: LOAD_CART,
    payload,
  };
}
