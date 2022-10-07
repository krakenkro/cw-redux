const defaultState = {
    movie: {},
    loading: false,
    error: null
}

export const FETCH_MOVIE_DETAILS = "FETCH_MOVIE_DETAILS";
export const FETCH_MOVIE_SUCCESS = "FETCH_MOVIE_SUCCESS";
export const FETCH_MOVIE_ERROR = "FETCH_MOVIE_ERROR";

export const movieDetailReducer = (state = defaultState, action) => {
    switch (action.type) {
        case FETCH_MOVIE_DETAILS:
            return {loading: true, error: null, movie: {}}
        case FETCH_MOVIE_SUCCESS:
            return {loading: false, error: null, movie: action.payload}
        case FETCH_MOVIE_ERROR:
            return {loading: false, error: action.payload, movie: []}
        default:
            return state;
    }
}

export const fetchMovieDetails= (payload) => ({type: FETCH_MOVIE_DETAILS, payload: payload});

