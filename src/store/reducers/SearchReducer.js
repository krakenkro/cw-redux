const defaultState = {
    movies: [],
    loading: false,
    error: null
}

export const FETCH_MOVIES_SEARCH = "FETCH_MOVIES_SEARCH";
export const FETCH_MOVIES_SUCCESS_SEARCH = "FETCH_MOVIES_SUCCESS_SEARCH";
export const FETCH_MOVIES_ERROR_SEARCH = "FETCH_MOVIES_ERROR_SEARCH";

export const movieSearchReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_MOVIES_SEARCH:
            return {loading: true, error: null, movies: []}
        case FETCH_MOVIES_SUCCESS_SEARCH:
            return {loading: false, error: null, movies: action.payload}
        case FETCH_MOVIES_ERROR_SEARCH:
            return {loading: false, error: action.payload, movies: []}
       
        default:
            return state;
    }
}

export const fetchMoviesSearchAction = (payload) => ({type: FETCH_MOVIES_SEARCH, payload: payload});

