import {combineReducers, configureStore} from '@reduxjs/toolkit'
import inputReducer from './reduces/slice'

const rootReducer = combineReducers({
    inputReducer
})
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}