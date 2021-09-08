import {createSlice} from "@reduxjs/toolkit"

const initialState={
    origin:null,
    destination:null,
    tarvelTime:null
}

export const navSlice=createSlice({
    name:"nav",
    initialState,
    reducers:{
        setOrigin:(state,action)=>{
            state.origin=action.payload
        },
        setDestination:(state,action)=>{
            state.destination=action.payload
        },
        setTravelTime:(state,action)=>{
            state.tarvelTime=action.payload
        }
    }
})

export const {setOrigin,setDestination,setTravelTime}=navSlice.actions;
export const selectOrigin=(state)=>state.nav.origin
export const selectDestination=(state)=>state.nav.destination
export const selectTravelTime=(state)=>state.nav.tarvelTime

export default navSlice.reducer