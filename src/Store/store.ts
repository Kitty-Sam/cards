import {applyMiddleware, combineReducers, createStore} from 'redux'

import {RegisterReducer} from "../Component/Registration/RegisterTC";
import thunk from 'redux-thunk';
import {AppReducer} from "../Component/Registration/AppAC";
import {ErrorReducer} from "../Component/Registration/ErrorAC";
import {LoginReducer} from "../Component/Login/LoginTC";
import { PacksReducer } from '../Component/Packs/PacksTC';
import { cardReducer } from '../Component/Cards/CardsTC';


const reducers = combineReducers({
    cards: cardReducer,
    register: RegisterReducer,
    app: AppReducer,
    errors: ErrorReducer,
    login: LoginReducer,
    packs: PacksReducer
})
const store = createStore(reducers, applyMiddleware(thunk))

export default store

export type AppStoreType = ReturnType<typeof reducers>

//@ts-ignore
window.store = store
