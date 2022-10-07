import React, {useState} from 'react';
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import MovieItem from "./MovieItem";
import { fetchSearchMovies } from '../store/actionCreators/movies';

const SearchMovie = () => {
    const {movies, loading, error} = useSelector(state => state.foundMovies);
    const params = useParams("query");
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchSearchMovies(params.query))
    }, [params.query])
    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>ERROR</div>
    }
    return (
        <div>
            {
                (movies) ? 
                    <div className="movie-list">
                        {
                            // console.log(movies)
                            movies.map(movie =>  <MovieItem key={movie.id} movie={movie}/>)
                        }
                    </div>: loading
                
            }
        </div>
    );
};

export default SearchMovie;