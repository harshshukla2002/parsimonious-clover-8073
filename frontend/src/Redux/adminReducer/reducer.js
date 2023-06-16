import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./actionTypes";


const initialState = {
    isLoggedIn: false,
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case LOGIN_SUCCESS:
        return {
          ...state,
          isLoggedIn: true,
        };
      case LOGIN_FAILURE:
        return {
          ...state,
          isLoggedIn: false,
        };
      default:
        return state;
    }
  };
  
  export  {reducer};