import Endpoint from '@/services/Endpoint'
export default {
    getPaginatedPosts(payload) {
        return Endpoint().get(`https://fakestoreapi.com/products/?start=${payload.index}`, { params: payload })
    },
    addUser(payload) {
        return Endpoint().post(`https://localhost:3333/auth/signup`, payload)
    },
    removeProduct(payload) {
        return Endpoint().delete(`https://fakestoreapi.com/products/${payload.id}`, { params: payload })
    }
}