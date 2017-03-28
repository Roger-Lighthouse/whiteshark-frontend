import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import thunk from 'redux-thunk';
import rootReducer from './reducers'

export const history = createHistory()

export let store = createStore (
  rootReducer,
  applyMiddleware(thunk, routerMiddleware(history))
)
