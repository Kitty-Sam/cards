import axios, {Axios, AxiosResponse} from "axios"

const instance = axios.create({
    baseURL: "https://neko-back.herokuapp.com/2.0" /*"http://localhost:7542/2.0/"*/,
    withCredentials: true

})

//api

export type AddNewPassType = {
    email: string;
    from?: string
    message?: string
};


export type SetNewPassType = {
    password: string;
    resetPasswordToken?: string;
};


export const addNewPassAPI = {
    addNewPass(params: AddNewPassType) {
        return instance.post<AddNewPassType, AxiosResponse<any>>(
            'auth/forgot',
            params,
        );
    },
    setNewPass(params: SetNewPassType) {
        return instance.post<SetNewPassType, AxiosResponse<any>>(
            'auth/set-new-password',
            params,
        );
    },
};




