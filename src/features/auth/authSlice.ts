import { createSlice } from '@reduxjs/toolkit';

interface AuthState{
    isLogin: boolean;
    isLoading: boolean;
    infoUser: Object;
}

const initialState: AuthState = {
    isLogin : false,
    isLoading: false,
    infoUser:{}
}

const authSlice = createSlice({
    name : 'auth',
    initialState,
    reducers : {
        doLogin : (state, action)=>{
            state.isLogin = action.payload.isLogin;
            state.infoUser = action.payload.infoUser;
        },
        setLoading : (state,action) =>{
            state.isLoading = action.payload;
        }
    }
})

export const {doLogin,setLoading} = authSlice.actions;
export default authSlice.reducer;