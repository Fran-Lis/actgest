import { createSlice } from "@reduxjs/toolkit";

export const actsSlice = createSlice({
    name: 'activities',
    initialState: {
        value: []
    },
    reducers: {
        load: (state) => {
            const storedData = JSON.parse(localStorage.getItem('acts'))
            state.value = storedData
        },
        add: (state, action) => {
            state.value.push(action.payload)
            localStorage.setItem('acts', JSON.stringify(state.value))
        },
        remove: (state, action) => {
            state.value = state.value.filter(activity => activity.id !== action.payload)
            localStorage.setItem('acts', JSON.stringify(state.value))
        },
        complete: (state, action) => {
            const selected = state.value.filter(activity => activity.id === action.payload)[0]
            selected.completed = !selected.completed
            localStorage.setItem('acts', JSON.stringify(state.value))
        }
    }
})

export const { load, add, remove, complete } = actsSlice.actions

export const actsReducer = actsSlice.reducer