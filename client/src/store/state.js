const getDefaultState = () => {
    return {
        user: {
            id: localStorage.getItem('id') || null,
            name: localStorage.getItem('name') || null,
            email: localStorage.getItem('email') || null,
            roleTypeId: localStorage.getItem('roleTypeId') || null
        }
    }
}

const state = getDefaultState()

export { state as default, getDefaultState }