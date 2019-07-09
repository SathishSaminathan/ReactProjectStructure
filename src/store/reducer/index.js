import { combineReducers } from "redux";
import { SET_FONTSIZE, SET_USER, REMOVE_USER } from "store/action/actionTypes";
import { FontStyles } from "constants/AppConstants";

const fontInitialState = {
  fontSize: FontStyles.SMALL
};

const userInitialState = {
  currentUser: null
};

const fontReducer = (state = fontInitialState, action) => {
  switch (action.type) {
    case SET_FONTSIZE:
      return {
        ...state,
        fontSize: action.payload.size
      };

    default:
      return state;
  }
};

const userReducer = (state = userInitialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload.user
      };

    case REMOVE_USER:
      return {
        ...state,
        currentUser: null
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  user: userReducer,
  fontStyle: fontReducer
});

export default rootReducer;
