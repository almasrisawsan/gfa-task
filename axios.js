import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com";
const axiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;
