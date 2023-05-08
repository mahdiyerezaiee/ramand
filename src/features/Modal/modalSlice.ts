// Import the necessary dependencies
import { createSlice } from "@reduxjs/toolkit";

// Define the initial state of the modal slice of the store
const initialState = {
    show: false,
    id: 0,
};

// Create the modal slice using createSlice function from redux-toolkit
export const modalSlice = createSlice({
    name: "card", // the name of the slice
    initialState, // the initial state of the slice
    reducers: {
        setShow: (state: any, action) => {
            // A reducer to handle the setShow action, which updates the show and id properties of the state
            state.show = action.payload.show;
            state.id = action.payload.id
        },
    },
});

// Extract the actions from the modal slice for easier use in other parts of the code
export const { setShow } = modalSlice.actions;

// Export the reducer function of the modal slice to be used in the store
export default modalSlice.reducer;
