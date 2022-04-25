import Endpoint from '@/services/Endpoint'
export default {
    getFeaturedPlaces(payload) {
        return Endpoint().get(`http://localhost:3333/places/featured`, payload)
    }
}