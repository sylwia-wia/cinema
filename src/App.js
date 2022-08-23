import './App.css';
import AppLayout from "./AppLayout"
import React from "react";
import store from "./redux";

function App() {
    store.subscribe(() => {
        localStorage.setItem('state',JSON.stringify(store.getState()))
    })

     return (
        <>
            <AppLayout/>
        </>
    );
}

export default App;
