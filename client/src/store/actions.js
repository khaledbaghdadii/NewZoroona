const actions = {
    // ////////////////////////////////////////////
    // SYSTEM
    // ////////////////////////////////////////////

    setUser({ commit }, payload) {
        commit('setUser', payload)
    },
    resetState({ commit }) {
        commit('resetState')
    }
}

export default actions