import { 
  AUTH_SIGN_IN_ERROR,
  AUTH_SIGN_IN_LOADING, 
  AUTH_SIGN_IN_SUCCESS, 
  
  AUTH_LOGIN_LOADING,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_ERROR,
  AUTH_LOGOUT,
  } from "./auth.types";

export const authInitalState = {
loading: false,
data: {
  signupSuccess:false,
  token: "",
  isAuthenticated: false,
},
error: false,
};

export const authReducer = (state = authInitalState,{type,payload}) => {
switch(type){
  case AUTH_SIGN_IN_LOADING:{
    return{
      ...state,
      signupSuccess:false,
      loading:true,
    }
  }
  case AUTH_SIGN_IN_ERROR:{
    return{
      ...state,
      signupSuccess:false,
      loading:false,
      error:true,
    }
  }
  case AUTH_SIGN_IN_SUCCESS:{
    return{
      ...state,
      loading:false,
      error:false,
      signupSuccess:true,
    }
  }
  case AUTH_LOGOUT:{
    return{
      ...state,
      loading:false,
      error:false,
      data:{
        token:"",
        isAuthenticated:false
      }
    }
  }
  case AUTH_LOGIN_LOADING:{
    return{
      ...state,
      loading:true,
    }
  }
  case AUTH_LOGIN_ERROR:{
    return{
      ...state,
      loading:false,
      error:true,
    }
  }
  case AUTH_LOGIN_SUCCESS:{
    return{
      ...state,
      loading:false,
      error:false,
      data:{
        token:payload.token,
        isAuthenticated:true
      }
    }
  }
  default:{
     return state;
  }
}

};
