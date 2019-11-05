import axios from "axios"

const URL_ = "http://localhost/LARAVEL/dynotes/public/api/"

export default class APIService {
    
    // LOGIN
    authLogin(data){
        return axios.post(URL_ + "login", data)
    }
}