import { LOGIN_FAILURE, LOGIN_SUCCESS } from "./actionTypes";

export const login = (email, password) => {
    
  
    if (email === 'admin@gmail.com' && password === 'admin') {
      return { type: LOGIN_SUCCESS };
    } else {
      return { type: LOGIN_FAILURE };
    }
  };