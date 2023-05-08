// Import necessary dependencies and reducers
import { configureStore } from "@reduxjs/toolkit";
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';
import loginSlice from "../features/Login/loginSlice";
import cardSlice from "../features/Card/cardSlice";
import modalSlice from "../features/Modal/modalSlice";

// Define configurations for redux-persist
const persistConfigLogin = {
    key: 'root',
    storage,
}
const persistConfigCard = {
    key: 'Card',
    storage,
}
const persistConfigModal = {
    key: 'Modal',
    storage,
}

// Create persisted reducers with redux-persist configurations
const persistedReducerLogin = persistReducer(persistConfigLogin, loginSlice )
const persistedReducerCard = persistReducer(persistConfigCard, cardSlice )
const persistedReducerModal = persistReducer(persistConfigModal, modalSlice )

// Create the redux store with persisted reducers, middleware and devtools configuration
export const store = configureStore({
    reducer:{
        user: persistedReducerLogin,
        card: persistedReducerCard,
        modal: persistedReducerModal,
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: [thunk]
})

// Create the persistor for the redux store to allow for state persistence
export const persistor = persistStore(store)
