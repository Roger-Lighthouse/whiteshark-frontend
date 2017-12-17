import { combineReducers } from 'redux'
import jobReducer from './job'
import clientReducer from './client'

const rootReducer = combineReducers({
  job: jobReducer,
  client: clientReducer
})

export default rootReducer




// import { routerReducer } from 'react-router-redux'
// import counterReducer from './counter'
// import myjobsReducer from './myjobs'

// let rootReducer = combineReducers({
//     myjobs: myjobsReducer,
//     counter: counterReducer,
//     router: routerReducer,
// })

// export default rootReducer





// ,

//   jobs,
//   visibilityFilter
