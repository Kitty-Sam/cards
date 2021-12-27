import axios, {Axios, AxiosResponse} from "axios"

const instance = axios.create({
    baseURL: "https://neko-back.herokuapp.com/2.0" /*"http://localhost:7542/2.0/"*/,
    withCredentials: true

})


export const packsAPI = {
    getPacks(page?: number, pageCount?: number, min?: number, max?: number, sortPacks?: string, user_id?: string) {
        return instance.get<any, AxiosResponse<any>>(
            'cards/pack', {params: {page, pageCount, min, max, sortPacks, user_id}});
    },
    removePack(id: string) {
        return instance.delete<any, AxiosResponse<any>>(`cards/pack?id=${id}`);
    },
    addPack(cardsPack: cardsPackType) {
        return instance.post<any, AxiosResponse<any>>('cards/pack', { cardsPack });
    },
    updatePack(updatedPack: any) {
        return instance.put<any, AxiosResponse<any>>('cards/pack', updatedPack );
    },
    sortPacks( page?: number, pageCount?: number, user_id?: string){
        return instance.get<any, AxiosResponse<any>>(
            'cards/pack', {params: {page, pageCount, user_id}})}



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



