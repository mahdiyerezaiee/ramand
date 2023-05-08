// Import the necessary dependencies
import { createSlice } from "@reduxjs/toolkit";
import {GeCardPackageGroupService} from "./cardService";

// Define the initial state of the card slice of the store
const initialState = {
    posts: [],
    paginatedPosts: [],
    searchItem: "",
};

// Create the card slice using createSlice function from redux-toolkit
export const cardSlice = createSlice({
    name: "card", // the name of the slice
    initialState, // the initial state of the slice
    reducers: {
        setPosts: (state: any, action) => {
            // A reducer to handle the setPosts action, which updates the posts property of the state
            state.posts = action.payload;
        },
        setPagintion: (state: any, action) => {
            // A reducer to handle the setPagination action, which updates the paginatedPosts property of the state
            state.paginatedPosts = action.payload;
        },
        setSearchItem: (state: any, action) => {
            // A reducer to handle the setSearchItem action, which updates the searchItem property of the state
            state.searchItem = action.payload;
        },
        editPost: (state: any , action) => {
            // A reducer to handle the editPost action, which updates an existing post in the paginatedPosts array
            const newItem = action.payload;
            const existingItem: any = state.paginatedPosts.find((item: any) => item.id === newItem.id);
            if (existingItem) {
                existingItem.title = action.payload.title;
                existingItem.body = action.payload.body;
            }
        },
    },
});

/** Define an async action to fetch the package data **/
export const fetchPackage =  async (dispatch: any) => {
    // An async action to fetch the package data from a service and dispatch the setPosts action to update the store state
    try {
        const data = await GeCardPackageGroupService();
        dispatch(setPosts(data));
    } catch (error) {
        console.log(error);
    }
};

// Extract the actions from the card slice for easier use in other parts of the code
export const { setPosts, setPagintion, setSearchItem, editPost } = cardSlice.actions;

// Export the reducer function of the card slice to be used in the store
export default cardSlice.reducer;
