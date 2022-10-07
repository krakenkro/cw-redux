import {legacy_createStore as createStore, combineReducers, applyMiddleware} from "redux";
import {movieReducer} from "./reducers/MovieReducer";
import {movieDetailReducer} from "./reducers/ItemReducer"
import {movieSearchReducer} from "./reducers/SearchReducer"
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    movies: movieReducer,
    movie: movieDetailReducer,
    foundMovies: movieSearchReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));