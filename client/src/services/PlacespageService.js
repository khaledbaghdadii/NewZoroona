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
    },
    getPlacesBySearch(text) {
        return Endpoint().get(`http://localhost:3333/places/search?text=${text}`, { params: text })
    },
    getPlacesByFilter(payload) {
        return Endpoint().post(`http://localhost:3333/places/filter`, payload)
    },
    getAllDistricts() {
        return Endpoint().get(`http://localhost:3333/places/district`)
    },
    getPlace(id) {
        return Endpoint().get(`http://localhost:3333/places/place?placeId=${id}`)
    },
    getPackages(id) {
        return Endpoint().get(`http://localhost:3333/packages/packages?placeId=${id}`)
    },
    getReviews(id) {
        return Endpoint().get(`http://localhost:3333/reviews/reviews?placeId=${id}`)
    },
    addReview(payload){
        return Endpoint().post(`http://localhost:3333/reviews/add`, payload)
    },
    reportReview(payload){
        return Endpoint().post(`http://localhost:3333/report/report`, payload)
    },
    requestReservation(payload){
        return Endpoint().post(`http://localhost:3333/requests/request/reservation`, payload)
    }
}