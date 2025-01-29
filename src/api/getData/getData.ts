import axios from "axios";

const axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/',
    headers: {'Content-type': 'Application.json'},
})

export const getData = async <T>(url:string) => {
    return await axiosInstance.get<T>(url).then(value => value.data)
}