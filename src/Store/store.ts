import {combineReducers, createStore} from 'redux'
import {cardReducer} from "./cards";


const reducers = combineReducers({
cards: cardReducer
})
const store = createStore(reducers)

export default store

export type AppStoreType = ReturnType<typeof reducers>

//@ts-ignore
window.store = store
