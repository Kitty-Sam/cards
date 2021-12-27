import axios, {Axios, AxiosResponse} from "axios"

const instance = axios.create({
    baseURL: "https://neko-back.herokuapp.com/2.0" /*"http://localhost:7542/2.0/"*/,
    withCredentials: true

})

//a
export type  UpdatedUser = {
    name: string;
    avatar: string;
    email?: string
}



export const profileAPI = {
    updateUser(params: UpdatedUser) {
        return instance.put<UpdatedUser, AxiosResponse<any>>(
            'auth/me',
            params,
        );
    },

};




