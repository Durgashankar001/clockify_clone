import { legacy_createStore,combineReducers, applyMiddleware } from "redux";
import { authReducer } from "./auth/auth.reducer";
import thunk from "redux-thunk"

const rootReducer = combineReducers({
    auth: authReducer,

})

export const store = legacy_createStore(rootReducer,applyMiddleware(thunk))