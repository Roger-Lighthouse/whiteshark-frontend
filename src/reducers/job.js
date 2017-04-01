

let initalState = {
    num_jobs: 0,
    data: [],
    username: '',
    password: '',
    completed_jobs: [],
    current_jobs: [],
    upcoming_jobs: [],

    error: null,
    loading: false,
}

function jobReducer(state = initalState, action) {
    console.log(action)
    switch(action.type) {
        case 'BOOK_JOB':
            let jobs=action.payload.jobs
            let current_jobs = []
            let upcoming_jobs = []
            let completed_jobs = []
            return {
                ...state,
                current_jobs: current_jobs
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

export default jobReducer;
