import api from "./axios.js"

export const register = (data) => api.post("/register", data);
export const login = (data) => api.post("/login", data);