import {AxiosError} from "axios";
import {Dispatch} from "redux";
import {authAPI, LoginParamsType} from "../../api/api";
import { appStatusToggleAC, requestStatus } from "../Registration/AppAC";
import {setNetworkErrorAC} from "../Registration/ErrorAC";



const initialState = {
    isLoggedIn: false,
    user: {} as UserType

}

type InitialStateType = {
    isLoggedIn: boolean,
    user: UserType
}


type UserType = {
    _id: string;
    email: string;
    name: string;
    avatar?: string;
    publicCardPacksCount: number; // количество колод
    created: Date;
    updated: Date;
    isAdmin: boolean;
    verified: boolean; // подтвердил ли почту
    rememberMe: boolean;
    error?: string;
}




export const LoginReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "LOGIN/IS_LOGGED_IN" :
            return {...state, isLoggedIn: action.isLoggedIn};
        case "LOGIN/SET_USER_DATA" :
            return {...state, user: action.user}
        default:
            return state;

    }
}

const loginToggleAC = (isLoggedIn: boolean) => (
    {type: "LOGIN/IS_LOGGED_IN", isLoggedIn} as const
)


const setUserDataAC = (user: UserType) => (
    {type: "LOGIN/SET_USER_DATA", user} as const
)

type ActionsType =
    | ReturnType<typeof loginToggleAC>
    | ReturnType<typeof setUserDataAC>


export const LoginTC = (params: LoginParamsType) => (dispatch: Dispatch) => {
    dispatch(appStatusToggleAC(requestStatus.loading))
    authAPI.login(params).then((res) => {
        console.log("user", res.data)
        const userData = res.data
        dispatch(loginToggleAC(true))
        dispatch(appStatusToggleAC(requestStatus.succeeded))
        dispatch(setUserDataAC(userData))
    })
        .catch((e: AxiosError) => {
            dispatch(appStatusToggleAC(requestStatus.failed))
            const errorNetwork = e.response
                ? e.response.data.error
                : `${e.message}, more details in the console`
            console.log(errorNetwork)
            dispatch(setNetworkErrorAC(errorNetwork))
        })
}

export const LogOutTC = () => (dispatch: Dispatch) => {
    dispatch(appStatusToggleAC(requestStatus.loading))
    authAPI.logOut().then((res) => {
        dispatch(loginToggleAC(false))
        console.log("user", res.data)
        dispatch(appStatusToggleAC(requestStatus.succeeded))
    })
        .catch((e: AxiosError) => {
            dispatch(appStatusToggleAC(requestStatus.failed))
            const errorNetwork = e.response
                ? e.response.data.error
                : `${e.message}, more details in the console`
            console.log(errorNetwork)
            dispatch(setNetworkErrorAC(errorNetwork))
        })
}

