import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:5001"
});

export const registerChild = (data) => API.post("/register_child", data);
export const getChildren = () => API.get("/children");
export const deleteChild = (id) => API.delete(`/delete_child/${id}`);
export const getChildDetails = (id) => API.get(`/child_details/${id}`);
export const getStatus = (reg) => API.get(`/child/${reg}`);