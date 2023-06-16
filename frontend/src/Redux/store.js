import {applyMiddleware, combineReducers, legacy_createStore,compose} from "redux"
import thunk from "redux-thunk";
import {reducer as AdminReducer} from "../Redux/adminReducer/reducer";


const rootReducer = combineReducers({
    AdminReducer
  });
  
const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;




  export const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));
