import React, {useState} from 'react';
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useParams, useNavigate} from "react-router-dom";
import {fetchMovie} from "../store/actionCreators/movies";
// useHistory = useNavigate

const MovieDetails = () => {
    const {movie, loading, error} = useSelector(state => state.movie);
    const params = useParams("id");
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovie(params.id))
    }, [params.id])

    const goBack = () => {
        navigate("/movies");
    }
    console.log(loading)
    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>ERROR</div>
    }
    return (
        <div>
            {
                (movie) ?
                <div className="flex-column">
                    <div className="flex-row">
                        <div>
                            <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt=""/>
                        </div>
                        <div>
                            <h2>{movie.title}</h2>
                            <p>Tagline: {movie.tagline}</p>
                            <p>Release Date: {movie.release_date}</p>
                            <p>Rating: {movie.vote_average}</p>
                        </div>
                    </div>
                    <div>
                        <p>Описание: {movie.overview}</p>
                    </div>
                    <button onClick={goBack}>Назад</button>
                </div>

                    : <h3>loading...</h3>
            }
        </div>
    );
};

export default MovieDetails;