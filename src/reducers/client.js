
let initalState = {
    num_jobs: 0,
    data: [],
    current_client: 'alex',
    password: '',
    error: null,
    loading: false,
}

function clientReducer(state = null, action) {

    switch(action.type) {
        case 'GET_CLIENT':
            console.log("In GET CLIENT", action.payload.data)
            return {
                ...state,
                current_client: action.payload.data
            }
        default:
        return state
    }
}

export default clientReducer;