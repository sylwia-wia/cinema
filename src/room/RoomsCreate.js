import React from "react";
import {useNavigate} from "react-router-dom";
import RoomForm from "./RoomForm";
import {useDispatch, useSelector, useStore} from "react-redux";
import {createRoom} from "../redux/room/actions";

export default function RoomsCreate() {
    const dispatch = useDispatch();
    const store = useStore();
    const rooms = Object.values(useSelector(state => state.room));
    const navigate = useNavigate();

    function onFormSubmitHandler(formData) {
        dispatch(createRoom(store.getState(), formData))
        navigate('/rooms');
    }

    return (
        <>
            <h2 className="px-3">Dodaj salę kinową</h2>
            <RoomForm onFormSubmitHandler={onFormSubmitHandler} rooms={rooms}/>
        </>
    );
}