import axiosClient from './axiosClient';

const AuthAPI = {
    doLoginApi : (data: object)=>{
        const url = "Users/Login";
        return axiosClient.post(url,data);
    },
    checkExpiredToken : (id: string) =>{
        const url = "Users/" + id;
        return axiosClient.get(url);
    },
    CreateUser : (data: Object) =>{
        console.log(data)
        const url = "Users/register";
        return axiosClient.post(url,data);
    }

}
export default AuthAPI;