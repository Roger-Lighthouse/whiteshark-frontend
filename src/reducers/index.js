import { combineReducers } from 'redux'
import jobs from './jobs'
import jobReducer from './jobs'
import visibilityFilter from './visibilityFilter'

const jobsApp = combineReducers({
  job: jobReducer,

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