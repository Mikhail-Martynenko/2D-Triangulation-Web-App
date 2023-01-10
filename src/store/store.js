import {combineReducers, configureStore} from '@reduxjs/toolkit'
import inputReducer from './reducers/slice'

const rootReducer = combineReducers({
    inputReducer
})
export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}