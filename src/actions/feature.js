export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export function addFeature() {
  return {
    type: ADD_FEATURE
  };
}

export function removeFeature() {
  return {
    type: REMOVE_FEATURE
  };
}
