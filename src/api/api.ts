import axios, {Axios, AxiosResponse} from "axios"

const instance = axios.create({
    baseURL: "https://neko-back.herokuapp.com/2.0" /*"http://localhost:7542/2.0/"*/,
    withCredentials: true, // браузер разбирайся с куками сам

})

//api

export type LoginParamsType = {
    email: string,
    password: string,
    rememberMe: boolean,
  }



export const authAPI = {
    login(params: LoginParamsType) {
        return instance.post<any>('auth/login', params)
    },
    logOut(){
        return instance.delete<any>('auth/login')
    },
    me(){
        return instance.post<any>('auth/me')
    },
    register(data: dataType){
        return instance.post<any>('auth/register', data)
    }

}

export type dataType = {
    email: string,
    password: string,

}



//types

