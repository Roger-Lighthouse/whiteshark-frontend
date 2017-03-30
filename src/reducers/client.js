
let initalState = {
    num_jobs: 0,
    data: [],
    username: '',
    password: '',
    error: null,
    loading: false,
}

function clientReducer(state = initalState, action) {

    switch(action.type) {
        case 'BOOK_JOB':
            return {
                ...state,
                username: action.payload.username
            }

        case 'COMPLETED_JOBS':
            return {
                ...state,
                username: action.payload.username
            }

        case 'CURRENT_JOBS':
            return {
                ...state,
                username: action.payload.username
            }
        case 'UPCOMING_JOBS':
            return {
                ...state,
                username: action.payload.username
            }
            default:
            return state
    }
}

export default clientReducer;