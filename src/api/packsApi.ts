import axios, {Axios, AxiosResponse} from "axios"

const instance = axios.create({
    baseURL: "https://neko-back.herokuapp.com/2.0" /*"http://localhost:7542/2.0/"*/,
    withCredentials: true

})
export type dataRequestType = {
    page?: number,
    pageCount?: number,
    min?: number,
    max? : number,
    sortPacks? : string,
    user_id? : string,
    packName? : string
}



export const packsAPI = {
    getPacks(data:dataRequestType) {
        return instance.get<any, AxiosResponse<any>>(
            'cards/pack', {params: {...data}});
    },
   /* sortPacks(page?: number, pageCount?: number, user_id?: string) {
        return instance.get<any, AxiosResponse<any>>(
            'cards/pack', {params: {page, pageCount, user_id}})
    },

    sortUpDownPacks(page?: number, pageCount?: number, sortPacks?: string) {
        return instance.get<any, AxiosResponse<any>>(
            'cards/pack', {params: {page, pageCount, sortPacks}})
    },

    searchPacks(searchWord: string, page?: number, pageCount?: number) {
        return instance.get<any, AxiosResponse<any>>(
            `cards/pack?packName=${searchWord}`, {params: {page, pageCount}})
    },*/


    removePack(id: string) {
        return instance.delete<any, AxiosResponse<any>>(`cards/pack?id=${id}`);
    },
    addPack(cardsPack: cardsPackType) {
        return instance.post<any, AxiosResponse<any>>('cards/pack', {cardsPack});
    },
    updatePack(updatedPack: any) {
        return instance.put<any, AxiosResponse<any>>('cards/pack', updatedPack);
    },


};

export type cardsPackType = {
    name?: string;// если не отправить будет таким
    path?: string;
    grade?: number; // не обязателен
    shots?: number; // не обязателен
    rating?: number; // не обязателен
    deckCover?: string; // не обязателен
    private?: boolean; // если не отправить будет такой
    type?: string// если не отправить будет таким
}

export type updatedPackType = {
    _id: string;
    name?: string;
}



