import Endpoint from '@/services/Endpoint'
export default {
    getPlacesPerManager(id) {
        return Endpoint().get(`http://localhost:3333/places/managerplaces?managerId=${id}`)
    },
    getUnprocessedReservationsPerPlace(id) {
        return Endpoint().get(`http://localhost:3333/reservations/reservations?placeId=${id}`)
    },
    rejectReservation(payload) {
        return Endpoint().post(`http://localhost:3333/requests/request/reject/reservation`,payload)
    },
    acceptReservation(payload) {
        return Endpoint().post(`http://localhost:3333/requests/request/accept/reservation`,payload)
    },
}