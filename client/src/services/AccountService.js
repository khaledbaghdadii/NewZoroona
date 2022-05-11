import Endpoint from '@/services/Endpoint'
export default {
    addUser(payload) {
        return Endpoint().post(`http://localhost:3333/auth/signup`, payload)
    },
    loginUser(payload) {
        return Endpoint().post(`http://localhost:3333/auth/signin`, payload)
    },
    logoutUser() {
        return Endpoint().post(`http://localhost:3333/auth/logout`)
    },
    addManager(payload) {
        return Endpoint().post(`http://localhost:3333/requests/request/manager`, payload)
    }
}