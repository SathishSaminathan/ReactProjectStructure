import { SET_FONTSIZE, SET_USER, REMOVE_USER } from "./actionTypes";

export const setFontSize = size => {
  return {
    type: SET_FONTSIZE,
    payload: {
      size
    }
  };
};

export const setUser = user => {
  return {
    type: SET_USER,
    payload: {
      user
    }
  };
};

export const removeUser=()=>{
  return{
    type: REMOVE_USER,
  }
}
