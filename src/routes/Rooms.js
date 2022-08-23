import React from "react";
import {Table} from "react-bootstrap";
import {Link} from "react-router-dom";
import {Pencil, Trash3} from 'react-bootstrap-icons';
import {useDispatch, useSelector} from "react-redux";
import {DELETE_ROOM} from "../redux/room/actions";


export default function Rooms() {
    const rooms = useSelector((store) => store.room);
    const dispatch = useDispatch();

    function onClickRemoveHandler(roomID) {
        dispatch({
            type: DELETE_ROOM,
            payload: roomID,
        });
    }

    const rekordyTabeli = Object.values(rooms).map((room, index) => (

        <tr key={index}>
            <td>
                {index + 1}
            </td>
            <td>
                {room.roomNumber}
            </td>
            <td>
                {room.capacity}
            </td>
            <td>
                <button className="btn btn-btn-dark px-2 float-end">
                    <Link to={`update/${room.roomID}`} key={room.roomID} className={'me-2 link-dark'}><Pencil/>
                    </Link>
                </button>
                <button onClick={() => onClickRemoveHandler(room.roomID)} className="btn btn-btn-dark px-2 float-end">
                   <Trash3 />
                </button>
            </td>
         </tr>
     ));


    return (
        <>
            <h2 className="px-3">Sale kinowe</h2>
            <Link to="/rooms/create">
                <button className="btn btn-dark mb-3 px-3 float-end">
                    Dodaj nową salę
                </button>
            </Link>
            <Table striped bordered>
                <thead className="thead-dark">
                <tr>
                    <th>#</th>
                    <th>Numer sali</th>
                    <th>Dostępne miejsca</th>
                </tr>
                </thead>
                <tbody>
                {rekordyTabeli}
                </tbody>

            </Table>
            <p></p>
        </>
    );
}