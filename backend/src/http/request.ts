import axios, { AxiosInstance } from 'axios';

class Http {
    public static getRequest(): AxiosInstance {
        return axios.create({
            baseURL: "https://api.github.com"
        })
    }
}

export default Http.getRequest();