import rootReducer from './rootReducer';
import {configureStore} from "@reduxjs/toolkit";

const persistedState = localStorage.getItem('state') ? JSON.parse(localStorage.getItem('state')) : {};

const store =  configureStore ({
    reducer: rootReducer,
    preloadedState: persistedState,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})

store.subscribe(() => {
 localStorage.setItem('state',JSON.stringify(store.getState()))
})

 export default store;

