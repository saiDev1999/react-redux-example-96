import { applyMiddleware, legacy_createStore } from "redux";
import { ticketReducer } from "./reducer";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./multiReducer";
import { thunk } from "redux-thunk";



export const ReduxStore =legacy_createStore(rootReducer,composeWithDevTools(applyMiddleware(logger,thunk)))

// redux logger : to check the variation of states in the redux

// Redux dev tools : it is third party middle ware for effient checking for redux state 