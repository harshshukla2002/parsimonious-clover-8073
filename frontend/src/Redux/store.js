import { applyMiddleware, combineReducers, legacy_createStore } from "redux";
import { reducer as feedbackReducer } from "./FeedbackReducer/reducer";
import thunk from "redux-thunk"
const rootReducers = combineReducers({
    feedbackReducer
})

export const store = legacy_createStore(rootReducers , applyMiddleware(thunk))