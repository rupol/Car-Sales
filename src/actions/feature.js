export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";
export const UPDATE_PRICE = "UPDATE_PRICE";

export function addFeature(item) {
  return {
    type: ADD_FEATURE,
    payload: item
  };
}

export function removeFeature(item) {
  return {
    type: REMOVE_FEATURE,
    payload: item
  };
}

export function updatePrice() {
  return {
    type: UPDATE_PRICE
  };
}
