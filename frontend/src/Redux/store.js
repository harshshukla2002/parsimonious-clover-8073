
import {applyMiddleware, combineReducers, legacy_createStore,compose} from "redux"
import thunk from "redux-thunk";
import {reducer as AdminReducer} from "../Redux/adminReducer/reducer";
import { reducer as feedbackReducer } from "./FeedbackReducer/reducer";

const rootReducer = combineReducers({
    AdminReducer,
  feedbackReducer
  });
  
const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;




  export const store = legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)));

