import React from "react";
import {useNavigate} from "react-router-dom";
import ShowForm from "./ShowForm";
import {useDispatch, useSelector, useStore} from "react-redux";
import {createShow} from "../redux/show/actions";


export default function ShowCreate() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const store = useStore();

    const movies = useSelector((state) => state.movie);
    const rooms = useSelector((state) => state.room);

    const onFormSubmitHandler = (formData) => {
        dispatch(createShow(store.getState(), formData));
         navigate('/show');
    }

    return (
        <>
            <h2 className="px-3">Dodaj seans</h2>
            <ShowForm onFormSubmitHandler={onFormSubmitHandler} movies={movies} rooms={rooms}/>
        </>
    );
}