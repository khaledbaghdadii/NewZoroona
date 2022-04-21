import { getDefaultState } from '@/store/state'

const mutations = {
    // ////////////////////////////////////////////
    // SYSTEM
    // ////////////////////////////////////////////

    setUser(state, payload) {
        state.user = payload
        localStorage.setItem('id', state.user.id)
        localStorage.setItem('name', state.user.name)
        localStorage.setItem('email', state.user.email)
        localStorage.setItem('roleTypeId', state.user.roleTypeId)

    },
    resetState(state) {
        localStorage.clear()
        const defaultState = getDefaultState()
        state.user = defaultState.user
    }
}

export default mutations