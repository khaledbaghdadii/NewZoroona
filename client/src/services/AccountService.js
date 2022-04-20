import Endpoint from '@/services/Endpoint'
export default {

    addUser(payload) {
        return Endpoint().post(`http://localhost:3333/auth/signup`, payload)
    }
}