import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    exampleFigure: "[[0,0],[1,0],[1,0.4],[0,1]]",
    meshQualityState: {
        text: "",
        percent: 0,
    },
    arrayForMesh: [],

}
export const inputSlice = createSlice({
    name: 'inputArray',
    initialState,
    reducers: {
        setArrayForFigure(state, action) {
            state.exampleFigure = action.payload;
        },
        setMeshQualityForFigure(state, action) {
            state.meshQualityState.text = action.payload[0];
            state.meshQualityState.percent = action.payload[1]
        },
        setArrayForMesh(state, action) {
            state.arrayForMesh = action.payload;
        },
    }
})

export default inputSlice.reducer;