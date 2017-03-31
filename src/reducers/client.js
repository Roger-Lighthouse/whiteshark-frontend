
let initalState = {
    num_jobs: 0,
    data: [],
    current_client: 'alex',
    current_w1: null,
    current_eh: null,
    password: '',
    error: null,
    loading: false,
}

function clientReducer(state = null, action) {

    switch(action.type) {
        case 'GET_CLIENT':
            console.log("In GET CLIENT W1::", action.payload.data.prices[0].w1)
            return {
                ...state,
                current_client: action.payload.data.client,
                current_w1: action.payload.data.prices[0].w1,
                current_eh: action.payload.data.prices[0].eh
            }
        default:
        return state
    }
}

export default clientReducer;