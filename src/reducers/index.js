import { combineReducers } from 'redux'
import jobs from './jobs'
import jobReducer from '../actions/job'
import clientReducer from '../actions/client'
import visibilityFilter from './visibilityFilter'

const jobsApp = combineReducers({
  job: jobReducer,
  client: clientReducer,

  jobs,
  visibilityFilter
})

export default jobsApp




// import { routerReducer } from 'react-router-redux'
// import counterReducer from './counter'
// import myjobsReducer from './myjobs'

// let rootReducer = combineReducers({
//     myjobs: myjobsReducer,
//     counter: counterReducer,
//     router: routerReducer,
// })

// export default rootReducer