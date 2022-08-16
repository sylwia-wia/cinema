import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import RoomForm from "./RoomForm";
import {useContext} from "react";
import {Context} from "../context/Context";
import {useDispatch} from "react-redux";
import {CREATE_ROOM} from "../redux/room/actions";

export default function RoomsCreate() {
    const {database} = useContext(Context);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    function onFormSubmitHandler(formData) {
        dispatch({
            type: CREATE_ROOM,
            payload: formData,
        });
        navigate('/rooms');
    }

    const {rooms} = database;

    return (
        <>
            <h2 className="px-3">Dodaj salę kinową</h2>
            <RoomForm onFormSubmitHandler={onFormSubmitHandler} rooms={rooms}/>
        </>
    );
}