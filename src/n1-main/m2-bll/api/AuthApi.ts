import axios, {AxiosResponse} from 'axios'
import {InitialProfileType, SetProfileType} from "../profileReducer";

const instance = axios.create({
    // baseURL: 'http://localhost:7542/2.0/',
    baseURL: 'https://neko-back.herokuapp.com/2.0/',
    withCredentials: true,
})

// api
export const authAPI = {
    login(data: AuthLoginType) {
        return instance.post<InitialProfileType>('/auth/login', data);
    },
    me() {
        return instance.post<InitialProfileType>('/auth/me',{})
    },
    logout() {
        return instance.delete('/auth/me')
    }
}


export  const  changeAPI = {
    changeProfile(name: string, avatar: string) {
        return instance.put('/auth/me', {name, avatar})
    }
}


export type AuthLoginType = {
    email: string,
    password: string,
    rememberMe: boolean,
}
