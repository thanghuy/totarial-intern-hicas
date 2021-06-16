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
    const token = localStorage.getItem("@accessToken");
    if(token){
        config.headers.Authorization = `Bearer ${token}`;
    }
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