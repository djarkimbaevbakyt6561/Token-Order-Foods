import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/authSlice";
import { basketReducer } from "./basket/basket";
import { mealsReducer } from "./meals/meals";
import { modalReducer } from "./modal";
import { signInReducer } from "./sign/signIn";
import { signUpReducer } from "./sign/signUp";
import { snackBarReducer } from "./snackBar";

const rootReducer = combineReducers({
    basket: basketReducer,
    meals: mealsReducer,
    snackBar: snackBarReducer,
    modal: modalReducer,
    signIn: signInReducer,
    signUp: signUpReducer,
    auth: authReducer,
})
export const store = createStore(rootReducer, applyMiddleware(thunk))