import Endpoint from '@/services/Endpoint'

export default {
    getRequests() {
        return Endpoint().get(`http://localhost:3333/requests/requests`)
    },
    rejectRequest(payload) {
        return Endpoint().post(`http://localhost:3333/requests/reject`,payload)
    },
    acceptRequest(payload) {
        return Endpoint().post(`http://localhost:3333/requests/accept`,payload)
    },
}