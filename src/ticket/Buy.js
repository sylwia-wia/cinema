import React from "react";
import {useNavigate, useParams} from "react-router-dom";
import ShowDetail from "../show/ShowDetail";
import {buyTicket} from "../redux/show/actions";
import {useDispatch, useSelector, useStore} from "react-redux";

export default function Buy (props) {
    const {addTicket} = props;
    const {showID} = useParams();
    const dispatch = useDispatch();
    const store = useStore();
    const navigate = useNavigate();
    const shows = useSelector((state) => state.show);
    const show = useSelector((state) => state.show[showID]);

    function onFormSubmitHandler(showID, seatID) {
        dispatch(buyTicket(store.getState(), showID, seatID));
         navigate('/show')
    }

    return (
        <>
            <ShowDetail onFormSubmitHAndler={onFormSubmitHandler} shows={shows} show={show} addTicket={addTicket}/>
        </>
    );

}