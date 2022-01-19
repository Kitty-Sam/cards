import {AxiosError} from "axios";
import {Dispatch} from "redux";
import {authAPI, LoginParamsType} from "../../api/api";
import {cardsPackType, packsAPI, updatedPackType} from "../../api/packsApi";
import {appStatusToggleAC, requestStatus} from "../Registration/AppAC";
import {setNetworkErrorAC} from "../Registration/ErrorAC";


export type PackTemplate = {
    _id: string,
    user_id: string,
    name: string;
    path: string; // папка
    cardsCount: number;
    grade: number; // средняя оценка карточек
    shots: number // количество попыток
    rating: number // лайки
    type: string; // ещё будет "folder" (папка)
    created: Date;
    updated: Date;
    __v: number;
    user_name: string
}


const PACKS_SET_CURRENT_PAGE = "PACKS/SET_CURRENT_PAGE";
const PACKS_SET_TOTAL_COUNT = "PACKS_SET_TOTAL_COUNT";


const initialState = {
    cardPacks: [],
    cardPacksTotalCount: 0, //общее число репо
    maxCardsCount: 0,
    minCardsCount: 0,
    page: 1,
    pageCount: 20 //количество на одной странице

}

export type ResponsePacksType = {
    cardPacks: PackTemplate[];
    cardPacksTotalCount: number; //общее количество страниц
    maxCardsCount: number;
    minCardsCount: number;
    page: number; //номер страницы
    pageCount: number; //на странице
}

export const PacksReducer = (state: ResponsePacksType = initialState, action: ActionsType) => {
    switch (action.type) {
        case "PACKS/SET_PACKS" :
            return {...state, ...action.payload}

        case PACKS_SET_CURRENT_PAGE :
            return {...state, page: action.currentPage}

        case PACKS_SET_TOTAL_COUNT :
            return {...state, cardPacksTotalCount: action.cardPacksTotalCount}

        case "PACKS/REMOVE_PACK" :
            return {
                ...state,
                cardPacks: state.cardPacks.filter(deck => deck._id !== action.id),
            };
        case "PACKS/ADD_PACK" :
            return {...state, cardPacks: [action.pack, ...state.cardPacks]};

        default:
            return state;

    }
}

const setPacksAC = (payload: ResponsePacksType) => (
    {type: "PACKS/SET_PACKS", payload} as const
)

export const setCurrentPageAC = (currentPage: number) => (
    {type: PACKS_SET_CURRENT_PAGE, currentPage} as const
)

export const setTotalCountAC = (cardPacksTotalCount: number) => (
    {type: PACKS_SET_TOTAL_COUNT, cardPacksTotalCount} as const
)


export const removePackAC = (id: string) => (
    {type: "PACKS/REMOVE_PACK", id} as const
)


export const addPackAC = (pack: any) => (
    {type: "PACKS/ADD_PACK", pack} as const
)


type ActionsType =
    | ReturnType<typeof setPacksAC>
    | ReturnType<typeof setCurrentPageAC>
    | ReturnType<typeof setTotalCountAC>
    | ReturnType<typeof removePackAC>
    | ReturnType<typeof addPackAC>


export const PacksTC = (page: number = 1) => (dispatch: Dispatch, getState: any) => {
    const {pageCount, cardPacksTotalCount} = getState().packs

    dispatch(appStatusToggleAC(requestStatus.loading))
    packsAPI.getPacks({page, pageCount}).then((res) => {
        dispatch(setCurrentPageAC(page))
        dispatch(setPacksAC(res.data))
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


export const removePackTC = (_id: string) => (dispatch: Dispatch, getState: any) => {
    const {cardPacks, page, pageCount, cardPacksTotalCount} = getState().packs

    dispatch(appStatusToggleAC(requestStatus.loading))
    packsAPI.removePack(_id).then((res) => {
        // @ts-ignore
        dispatch(PacksTC())
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

export const addPackTC = (pack: cardsPackType) => (dispatch: Dispatch, getState: any) => {
    const {cardPacks, page, pageCount, cardPacksTotalCount} = getState().packs

    dispatch(appStatusToggleAC(requestStatus.loading))
    packsAPI.addPack(pack).then((res) => {
        const result = res.data.newCardsPack
        // @ts-ignore
        dispatch(PacksTC())
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


export const updatedPackTC = (updatedPack: updatedPackType) => (dispatch: Dispatch, getState: any) => {
    const {cardPacks, page, pageCount, cardPacksTotalCount} = getState().packs
    dispatch(appStatusToggleAC(requestStatus.loading))
    packsAPI.updatePack(updatedPack).then((res) => {
        // @ts-ignore
        dispatch(PacksTC())
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

export const sortMyPacksTC = () => (dispatch: Dispatch, getState: any) => {
    const {cardPacks, page, pageCount, cardPacksTotalCount} = getState().packs
    const {_id} = getState().login.user

    dispatch(appStatusToggleAC(requestStatus.loading))
    packsAPI.getPacks({user_id: _id, page, pageCount}).then((res) => {
        console.log("res.data", res.data)
        dispatch(setPacksAC(res.data))
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

export const sortUpPacksTC = (sortPacks: string ) => (dispatch: Dispatch, getState: any) => {
    const {cardPacks, page, pageCount, cardPacksTotalCount} = getState().packs
    dispatch(appStatusToggleAC(requestStatus.loading))
    packsAPI.getPacks({sortPacks, page, pageCount}).then((res) => {
        
        console.log("res.data", res.data)
        dispatch(setPacksAC(res.data))
        
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

export const searchPacksTC = (searchName: string ) => (dispatch: Dispatch, getState: any) => {
    const {cardPacks, page, pageCount, cardPacksTotalCount} = getState().packs
    dispatch(appStatusToggleAC(requestStatus.loading))
    packsAPI.getPacks({packName: searchName, page, pageCount} ).then((res) => {

        console.log("res.data", res.data)
        dispatch(setPacksAC(res.data))

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









