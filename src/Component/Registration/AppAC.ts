import {authAPI, LoginParamsType} from "../../api/api";
import {Dispatch} from "redux";
import {AxiosError} from "axios";
import {setNetworkErrorAC} from "./ErrorAC";

export enum requestStatus {
    idle = 'idle',
    loading = 'loading',
    succeeded = 'succeeded',
    failed = 'failed',
}

const initialState = {
    status: requestStatus.idle

}

type InitialStateType = {
    status:  RequestStatusType;
}

export type RequestStatusType =
    | requestStatus.idle
    | requestStatus.loading
    | requestStatus.succeeded
    | requestStatus.failed;


export const AppReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "APP/STATUS_TOGGLE" :
            return {...state, status: action.status}
        default:
            return state;

    }
}

export const appStatusToggleAC = (status: RequestStatusType) => (
    {type: "APP/STATUS_TOGGLE", status} as const

)


type ActionsType =
    | ReturnType<typeof appStatusToggleAC>




export const AppTC = () => (dispatch: Dispatch) => {
    dispatch(appStatusToggleAC(requestStatus.loading))
    authAPI.me().then(() => {
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

