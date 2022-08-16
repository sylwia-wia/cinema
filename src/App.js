import './App.css';
import AppLayout from "./AppLayout"
import {useContext} from "react";
import {getMovieByID, getRoomByID} from "./utils/Selectors";
import React from "react";
import moment from "moment/moment";
import {Context} from "./context/Context";
import store from "./redux";

function App() {
    const {database, setDatabase} = useContext(Context);

    store.subscribe(() => {
        localStorage.setItem('state',JSON.stringify(store.getState()))
    })

    const removeShow = (showID) => {
        delete database.shows[showID];
        setDatabase({
            ...database
        });
    }

    const updateShow = (showID, data) => {
        const show = {
            ...data,
            movie: {...getMovieByID(database, data.movieID)},
            room: {...getRoomByID(database, data.roomID)}
        }

        setDatabase({
            ...database,
            shows: {
                ...database.shows,
                [showID]: {...show}
            }
        });
    }

    const addTicket = (showID, seatID) => {
        const chooseShow = {...database.shows[showID]};
        const ticketID = Math.random().toString(36).substring(7);
         chooseShow.seats[seatID] = ticketID;

         setDatabase({
             ...database,
             shows: {
                 ...database.shows,
                 [showID]: {...chooseShow}
             }
         })
    }

    const addShow = (showData) => {
        const shows = {...database.shows};
        let id = 1;
        if (Object.keys(shows).length > 0) {
            const ids = Object.keys(shows).map(id => parseInt(id))
            id = Math.max(...ids) + 1
        }

        showData.movie = getMovieByID(database, showData.movieID);
        showData.room = getRoomByID(database, showData.roomID);

        showData.seats = {};
        for (let i = 1; i <= showData.room.capacity; i++) {
                showData.seats[i] = null;
            }

        showData.startTime =  moment(showData.showDate).format('YYYY-MM-DD HH:mm:ss');
        showData.endTime = moment(showData.showDate).add(showData.movie.movieTime, 'minutes').format('YYYY-MM-DD HH:mm:ss');

        showData.showID = id;
        shows[showData.showID] = showData;

        setDatabase({
            ...database,
            shows: {...shows},
        });

    }

     return (
        <>
            <AppLayout
                database={database}
                addShow={addShow}
                removeShow={removeShow}
                updateShow={updateShow}
                addTicket={addTicket}
            />
        </>
    );
}

export default App;
