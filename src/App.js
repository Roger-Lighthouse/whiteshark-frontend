import React from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'
import { store, history } from './store'
// -------------------------------------
import Admin from './routes/Admin'
import BookJob from './routes/bookJob'
import MyJobs from './routes/myJobs'
import MyProfile from './routes/myProfile'
import sandbox from './routes/sandbox'
import './App.css'
import '../node_modules/react-datetime/css/react-datetime.css'

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Route exact path='/clients/:id' component={BookJob}/>
          <Route path='/clients/:id/myJobs' component={MyJobs}/>
          <Route path='/clients/:id/myProfile' component={MyProfile}/>
          <Route path='/admin' component={Admin}/>
          <Route path='/sandbox' component={sandbox}/>
        </div>
      </ConnectedRouter>
    </Provider>
  )
}

export default App;
