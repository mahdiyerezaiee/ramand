import { createSlice } from "@reduxjs/toolkit";
interface user {
    userName:string,
    password : string
}

interface UserState {
    user: user[];
    isLoggedIn: boolean;
}
const initialState:UserState = {
    user: [],
    isLoggedIn: false,
}

const loginSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        signIn: (state, action) => {
            state.user = {...state.user, ...action.payload}
            state.isLoggedIn = true
        },
        signOut: (state) => {
            state.user = []
            state.isLoggedIn = false
        }
    }
})

export const {signIn, signOut} = loginSlice.actions
export default loginSlice.reducer