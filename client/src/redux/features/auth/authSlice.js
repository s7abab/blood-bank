import {createSlice} from '@reduxjs/toolkit'

const initalState={
    loading:false,
    user:null,
    token:null,
    error:null

}

const authSlice = createSlice({
    name:'auth',
    initialState:initalState,
    reducers:{},
    extraReducers:{},
})

export default authSlice;