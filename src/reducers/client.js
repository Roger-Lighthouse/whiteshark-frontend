
let initalState = {
    num_jobs: 0,
    data: [],
    current_client: '',
    password: '',
    error: null,
    loading: false,
}

function clientReducer(state = initalState, action) {

    switch(action.type) {
        case 'GET_CLIENT':
            return {
                ...state,
                current_client: action.payload.data
            }
        default:
        return state
    }
}

export default clientReducer;