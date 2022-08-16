import React from "react";
import {useNavigate} from "react-router-dom";
import MovieForm from "./MovieForm";
import {useContext} from "react";
import {Context} from "../context/Context";
import {useDispatch} from "react-redux";
import {CREATE_MOVIE} from "../redux/movie/actions";

export default function MovieCreate(props) {
    const navigate = useNavigate();
    const {database} = useContext(Context);
    const {movies} = database;
    const dispatch = useDispatch();

    function onFormSubmitHandler(formData) {
       //props.addMovie(formData);
        console.log(formData);
        dispatch({
            type: CREATE_MOVIE,
            payload: formData,
        });
        navigate('/movie');

    }
    console.log(movies);

    return (
        <>
            <h2 className="px-3">Dodaj nowy film</h2>
            <MovieForm movies={movies} onFormSubmitHandler={onFormSubmitHandler}/>
        </>
    );
}