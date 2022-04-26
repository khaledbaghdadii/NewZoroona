import Endpoint from '@/services/Endpoint'
export default {
    getFeaturedPlaces() {
        return Endpoint().get(`http://localhost:3333/places/featured`)
    }
}