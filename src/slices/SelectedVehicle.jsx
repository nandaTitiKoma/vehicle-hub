import { createSlice } from "@reduxjs/toolkit";

const selectedSlice = createSlice({
    name: "selectedSlice",
    initialState:{
        data: null
    },
    reducers:{
        setSelectedVehicle: (state, action) => {
            state.data = action.payload
        },
        clearSelectedVehicle: (state, action) =>{
            state.data = null
        }
    }
})

export const {setSelectedVehicle, clearSelectedVehicle} = selectedSlice.actions;
export default selectedSlice.reducer;   
