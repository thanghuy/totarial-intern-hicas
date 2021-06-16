import axios from "axios";
import queryString from "querystring";

const axiosClient = axios.create({
    baseURL : "https://localhost:5001/api/",
    headers :{
        "content-type" : 'application/json'
    },
    paramsSerializer: params => queryString.stringify(params)
})
axiosClient.interceptors.request.use(async (config)=>{
    // const currentUser = firebase.auth().currentUser;
    // if(currentUser){
    //     const token = await currentUser.getIdToken();
    //     console.log(token);
    //     config.headers.Authorization = `Bearer ${token}`;
    // }
    return config;
});
axiosClient.interceptors.response.use((resp)=>{
    if(resp && resp.data){
        return resp.data;
    }
    return resp;
},(error => {
    throw  error;
}));

export default axiosClient;