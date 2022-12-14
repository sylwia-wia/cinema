import {useNavigate, useParams} from "react-router-dom";
import ShowForm from "./ShowForm";
import React from "react";
import {updateShow} from "../redux/show/actions";
import {useDispatch, useSelector, useStore} from "react-redux";

export default function ShowUpdate() {
    const navigate = useNavigate();
    const {showID} = useParams();
    const dispatch = useDispatch();
    const store = useStore();
    const show = useSelector(state => state.show[showID]);
    const rooms = Object.values(useSelector(state => state.room));
    const movies = Object.values(useSelector(state => state.movie));
    const shows = useSelector((state) => state.show);

    function onFormSubmitHandler(formData) {
        formData.showID = show.showID;
        dispatch(updateShow(store.getState(), formData));
        navigate('/show')
    }

    return (
        <>
            <h2 className="px-3">Edytuj seans</h2>
            <ShowForm show={show} shows={shows} rooms={rooms} movies={movies}
                      onFormSubmitHandler={onFormSubmitHandler}/>
        </>
    );
}