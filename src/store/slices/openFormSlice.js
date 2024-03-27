import { createSlice } from "@reduxjs/toolkit";

export const openFormSlice = createSlice({
    name: 'openForm',
    initialState:{
        value: false
    },
    reducers:{
        toggle: (state) => {
            state.value = !state.value
        }
    }
})

export const { toggle } = openFormSlice.actions

export const openFormReducer = openFormSlice.reducer