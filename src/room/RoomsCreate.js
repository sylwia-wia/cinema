import React from "react";
import {useNavigate} from "react-router-dom";
import RoomForm from "./RoomForm";
import {useDispatch, useSelector, useStore} from "react-redux";
import {roomCreate} from "../redux/room/actions";

export default function RoomsCreate() {
    const dispatch = useDispatch();
    const store = useStore();
    const rooms = Object.values(useSelector(state => state.room));
    const navigate = useNavigate();

    function onFormSubmitHandler(formData) {
        dispatch(roomCreate(store.getState(),{
            roomNumber: formData.roomNumber,
            capacity: formData.capacity
        }));
        navigate('/rooms');
    }

    return (
        <>
            <h2 className="px-3">Dodaj salę kinową</h2>
            <RoomForm onFormSubmitHandler={onFormSubmitHandler} rooms={rooms}/>
        </>
    );
}