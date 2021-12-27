import {AxiosError} from "axios";
import {Dispatch} from "redux";
import {authAPI, LoginParamsType} from "../../api/api";
import {appStatusToggleAC, requestStatus} from "./AppAC";
import {setNetworkErrorAC} from "./ErrorAC";

const initialState = {
    isAuth: false

}

type InitialStateType = {
    isAuth: boolean
}

export const RegisterReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "REGISTER/AUTH_TOGGLE" :
            return {...state, isAuth: action.isAuth}
        default:
            return state;

    }
}

const authToggleAC = (isAuth: boolean) => (
    {type: "REGISTER/AUTH_TOGGLE", isAuth} as const

)


type ActionsType =
    | ReturnType<typeof authToggleAC>


export const RegisterTC = (params: LoginParamsType) => (dispatch: Dispatch) => {
    dispatch(appStatusToggleAC(requestStatus.loading))
    authAPI.register(params).then(() => {
        dispatch(authToggleAC(true))
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

