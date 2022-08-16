import { createStore } from 'redux';
import rootReducer from './rootReducer';
import {applyMiddleware, compose} from "@reduxjs/toolkit";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const persistedState = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : {};


const store = createStore(rootReducer, persistedState, composeEnhancers(applyMiddleware()));

store.subscribe(() => {
 localStorage.setItem('state',JSON.stringify(store.getState()))
})

export default store;