import axios from "axios";

const URL = 'https://695dc97e2556fd22f6766b74.mockapi.io/stockproducts' /*API*/

export const axiosInstance = axios.create({
    baseURL: URL
})