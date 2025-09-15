import axios from "axios"

const api = axios.create({
    baseURL:"http://localhost:8000/api/users/v1",
    timeout:8000,

})

api.interceptors.request.use((config)=>{
    const token = localStorage.getItem("token");
    try {
        if(token){
            config.headers.Authorization = `Bearer ${token}`
        }
        return config;
    } catch (error) {
        return Promise.reject(error);
        
    }

},(error)=>{
    return Promise.reject(error);
})


api.interceptors.response.use((response)=>{
    return response;

},(error)=>{
    if(error.response?.status === 401){
        alert("UnAuthorized Login");
        window.location.href="/login"
    }
    return Promise.reject(error);
})

export default api;