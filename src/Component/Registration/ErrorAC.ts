
const initialState = {
    errorNetwork: ""

}

type InitialStateType = {
    errorNetwork:  string;
}


export const ErrorReducer = (state: InitialStateType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "ERROR/SET_ERROR_NETWORK" :
            return {...state, errorNetwork: action.error}
        default:
            return state;

    }
}

export const setNetworkErrorAC = (error: string) => (
    {type: "ERROR/SET_ERROR_NETWORK", error} as const

)


type ActionsType =
    | ReturnType<typeof setNetworkErrorAC>


