import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    origin: {
        description: "2 Place des Célestins, Lyon",
        location: {
            lat: 45.7600747,
            lng: 4.8298359
        }
    },
    destination: null,
    travelTimeInformation: null,
    showPickupPoints: true,
    scooters: null
}

export const navSlice = createSlice({
    name: 'nav',
    initialState,
    reducers: {
        setOrigin: (state, action) => {
            state.origin = action.payload;
        },
        setDestination: (state, action) => {
            state.destination = action.payload;
        },
        setTravelTimeInformation: (state, action) => {
            state.travelTimeInformation = action.payload;
        },
        setPickupPoints: (state, action) => {
            state.pickupPoints = action.payload
        },
        setScooters: (state, action) => {
            state.scooters = action.payload
        },
        setShowPickupPoints: (state, action) => {
            state.showPickupPoints = action.payload
        }
    }
})

export const { setOrigin, setDestination, setTravelTimeInformation, setPickupPoints, setScooters, setShowPickupPoints } = navSlice.actions;

// Selectors

export const selectOrigin = (state) => state.origin;
export const selectDestination = (state) => state.destination;
export const selectTravelTimeInformation = (state) => state.travelTimeInformation;
export const selectPickupPoints = (state) => state.pickupPoints;
export const selectScooters = (state) => state.scooters;
export const selectShowPickupPoints = (state) => state.showPickupPoints;

export default navSlice.reducer;