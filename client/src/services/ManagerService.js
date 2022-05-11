import Endpoint from '@/services/Endpoint'
export default {
    getPlacesPerManager(id) {
        return Endpoint().get(`http://localhost:3333/places/managerplaces?managerId=${id}`)
    },
}