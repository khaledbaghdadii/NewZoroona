import axios from 'axios'
export default () => {
    // create axios instance
    const instance = axios.create({
            baseURL: 'http://localhost:8081/'
        })
        // return instance
    return instance
}