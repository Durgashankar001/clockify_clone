import axios from "axios";
import {
    AUTH_SIGN_IN_LOADING,
    AUTH_SIGN_IN_SUCCESS,
    AUTH_SIGN_IN_ERROR,
    AUTH_SIGN_OUT,
} from "./auth.types";

export const signupAPI = (creds)=> async(dispatch)=>{
    dispatch({type:AUTH_SIGN_IN_LOADING})
    try{
        let response = await axios.post("http://localhost:8080/user/signup",creds)
        dispatch({type:AUTH_SIGN_IN_SUCCESS,payload:response.data})
        console.log(response.data)
        return response.data
    }catch(e){
        dispatch({type:AUTH_SIGN_IN_ERROR})
    }
    
}
export const logout = (dispatch)=>{
    dispatch({type:AUTH_SIGN_OUT})
}