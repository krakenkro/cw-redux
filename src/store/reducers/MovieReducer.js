const defaultState = {
    movies: [],
    loading: false,
    error: null
}

export const FETCH_MOVIES = "FETCH_MOVIES";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_ERROR = "FETCH_MOVIES_ERROR";

export const movieReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_MOVIES:
            return {loading: true, error: null, movies: []}
        case FETCH_MOVIES_SUCCESS:
            return {loading: false, error: null, movies: action.payload}
        case FETCH_MOVIES_ERROR:
            return {loading: false, error: action.payload, movies: []}
       
        default:
            return state;
    }
}

export const fetchMoviesAction = (payload) => ({type: FETCH_MOVIES, payload: payload});

