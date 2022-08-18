import {useNavigate, useParams} from "react-router-dom";
import RoomForm from "./RoomForm";
import {useDispatch, useSelector} from "react-redux";
import {UPDATE_ROOM} from "../redux/room/actions";

export default function RoomsUpdate(props) {
    const navigate = useNavigate();
    const {roomID} = useParams();
    const dispatch = useDispatch();
    const room = useSelector(state => state.room[roomID]);
    const rooms = Object.values(useSelector(state => state.room));


    function onFormSubmitHandler(formData) {
        formData.roomID = room.roomID;

        dispatch({
            type: UPDATE_ROOM,
            payload: formData,
        });
        navigate('/rooms')
    }

    return (
        <>
            <h2 className="px-3">Edytuj salę kinową</h2>
            <RoomForm room={room} onFormSubmitHandler={onFormSubmitHandler} rooms={rooms}/>
        </>
    )


}

