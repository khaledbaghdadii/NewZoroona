import Endpoint from '@/services/Endpoint'
export default {
    getAllPlaces() {
        return Endpoint().get(`http://localhost:3333/places/all`)
    },
    getAllCategories() {
        return Endpoint().get(`http://localhost:3333/category/`)
    },
    getAllOrientations() {
        return Endpoint().get(`http://localhost:3333/orientation/`)
    }
}