import axios, {Axios, AxiosResponse} from "axios"

const instance = axios.create({
    baseURL: "https://neko-back.herokuapp.com/2.0" /*"http://localhost:7542/2.0/"*/,
    withCredentials: true

})

//api

export type LoginParamsType = {
    email: string,
    password: string,
    rememberMe?: boolean,
  }



export const authAPI = {
    login(params: LoginParamsType) {
        return instance.post<any>('auth/login', params)
    },
    logOut(){
        return instance.delete<any>('auth/me', {})
    },
    me(){
        return instance.post<any>('auth/me', {})
    },
    register(params: LoginParamsType){
        return instance.post<any>('auth/register', params)
    }

}




//types

