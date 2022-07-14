import { configureStore } from '@reduxjs/toolkit';

// Reducers and Slices
import navReducer from './slices/navSlice';


export const store = configureStore({
    reducer: navReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        })
})