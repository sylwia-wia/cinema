import React from "react";
import {useNavigate} from "react-router-dom";
import MovieForm from "./MovieForm";
import {useDispatch, useSelector, useStore} from "react-redux";
import {createMovie} from "../redux/movie/actions";

export default function MovieCreate() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const movies = useSelector((store) => store.movie);
    const store = useStore();

    function onFormSubmitHandler(formData) {
        dispatch(createMovie(store.getState(), formData));
        navigate('/movie');
    }

    return (
        <>
            <h2 className="px-3">Dodaj nowy film</h2>
            <MovieForm movies={movies} onFormSubmitHandler={onFormSubmitHandler}/>
        </>
    );
}