import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchMovies} from "../store/actionCreators/movies";
import MovieItem from './MovieItem';

const MovieList = () => {
    const {movies, loading, error} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies())
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>ERROR</div>
    }

    return (
        <div>
            {
                movies.map(movie =>
                    <MovieItem key={movie.id} movie={movie} />
                )
            }
        </div>
    );
};

export default MovieList;