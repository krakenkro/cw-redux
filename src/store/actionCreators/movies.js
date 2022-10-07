import {FETCH_MOVIES, FETCH_MOVIES_ERROR, FETCH_MOVIES_SUCCESS} from "../reducers/MovieReducer";
import {FETCH_MOVIE_SUCCESS, FETCH_MOVIE_DETAILS, FETCH_MOVIE_ERROR} from "../reducers/ItemReducer"
import { FETCH_MOVIES_SEARCH, FETCH_MOVIES_SUCCESS_SEARCH, FETCH_MOVIES_ERROR_SEARCH } from "../reducers/SearchReducer";
import axios from "axios";

export const fetchMovies = () => {
    return async (dispatch) => {
        try {
            dispatch({type: FETCH_MOVIES});
            const response = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU&page=1");
            console.log(response.data.results)
            dispatch({type: FETCH_MOVIES_SUCCESS, payload: response.data.results})
        } catch (e) {
            dispatch({type: FETCH_MOVIES_ERROR, payload: "FETCHING MOVIES ERROR"})
        }
    }
}
export const fetchMovie = (id) => {
    return async (dispatch) => {
        try {
            dispatch({type: FETCH_MOVIE_DETAILS});
            const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU`);
            console.log(response.data)
            dispatch({type: FETCH_MOVIE_SUCCESS, payload: response.data})
        } catch (e) {
            dispatch({type: FETCH_MOVIE_ERROR, payload: "FETCHING MOVIES ERROR"})
        }
    }
}

export const fetchSearchMovies = (query) => {
    return async (dispatch) => {
        try {
            dispatch({type: FETCH_MOVIES_SEARCH});
            const response = await axios.get("https://api.themoviedb.org/3/search/movie?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU&query=" + query + "&page=1");
            dispatch({type: FETCH_MOVIES_SUCCESS_SEARCH, payload: response.data.results})
        } catch (e) {
            dispatch({type: FETCH_MOVIES_ERROR_SEARCH, payload: "FETCHING MOVIES ERROR"})
        }
    }
}