import axios from "axios";
import {
    AUTH_SIGN_IN_LOADING,
    AUTH_SIGN_IN_SUCCESS,
    AUTH_SIGN_IN_ERROR,

    AUTH_LOGIN_LOADING,
    AUTH_LOGIN_SUCCESS,
    AUTH_LOGIN_ERROR ,
    AUTH_LOGOUT,
} from "./auth.types";

export const signupAPI = (creds)=> async(dispatch)=>{
    dispatch({type:AUTH_SIGN_IN_LOADING})
    try{
        let response = await axios.post("https://legit-dust-8169.herokuapp.com/user/signup",creds)
        dispatch({type:AUTH_SIGN_IN_SUCCESS,payload:response.data})
        console.log(response.data)
        return response.data
    }catch(e){
        dispatch({type:AUTH_SIGN_IN_ERROR})
    }
    
}

export const loginAPI = (creds)=> async(dispatch)=>{
    dispatch({type:AUTH_LOGIN_LOADING})
    try{
        let response = await axios.post("https://legit-dust-8169.herokuapp.com/user/login",creds)
        dispatch({type:AUTH_LOGIN_SUCCESS,payload:response.data})
        console.log(response.data)
        return response.data
    }catch(e){
        dispatch({type:AUTH_LOGIN_ERROR})
    }
    
}

export const logout = (dispatch)=>{
    dispatch({type:AUTH_LOGOUT})
}