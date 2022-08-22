import React from "react";
import {NavLink, Route, Routes} from "react-router-dom";
import RoomsCreate from "./room/RoomsCreate";
import Rooms from "./routes/Rooms";
import Movie from "./routes/Movie";
import Show from "./routes/Show";
import MovieCreate from "./movie/MovieCreate";
import ShowCreate from "./show/ShowCreate";
import RoomsUpdate from "./room/RoomsUpdate";
import MovieUpdate from "./movie/MovieUpdate";
import ShowUpdate from "./show/ShowUpdate";
import Buy from "./ticket/Buy";
import Ticket from "./ticket/Ticket";

function AppLayout() {
    return (
       <>
           <header>
               <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-3">
                   <a className="navbar-brand" href="#">Kino</a>
                   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                           aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                       <span className="navbar-toggler-icon"></span>
                   </button>
                   <div className="collapse navbar-collapse" id="navbarNav">
                       <ul className="navbar-nav">
                           <li className="nav-item active">
                               <NavLink to="/rooms" className="nav-link">Sale</NavLink>
                           </li>
                           <li className="nav-item">
                               <NavLink to="/show" className="nav-link">Seanse</NavLink>
                           </li>
                           <li className="nav-item">
                               <NavLink to="/movie" className="nav-link">Filmy</NavLink>
                           </li>

                       </ul>
                   </div>
               </nav>
           </header>

           <div className={'container-fluid'}>
               <div className={'row'}>
                   <main className={'col mt-3'}>
                       <Routes>
                           <Route path={'/'} element={<Rooms />} />
                           <Route path="/rooms" element={<Rooms  />} />
                           <Route path="/rooms/create" element={<RoomsCreate />} />
                           <Route path="/rooms/update/:roomID" element={<RoomsUpdate />} />
                           <Route path="/movie" element={<Movie  />} />
                           <Route path="/movie/create" element={<MovieCreate />} />
                           <Route path="/movie/update/:movieID" element={<MovieUpdate />} />
                           <Route path="/show" element={<Show />} />
                           <Route path="/show/create" element={<ShowCreate />} />
                           <Route path="/show/update/:showID" element={<ShowUpdate />} />
                           <Route path="show/buy/:showID" element={<Buy />} />
                           <Route path="/show/:showID/ticket/:seatID" element={<Ticket />} />
                           <Route path="*" element={ <main style={{ padding: "1rem", fontSize:"20px" }}>
                               <p>Brak żądanej strony!</p>
                           </main>} />
                       </Routes>
                   </main>
               </div>
           </div>
       </>
);
}
export default AppLayout;