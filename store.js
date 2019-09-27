import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer, { initialState } from './reducers'

const initStore = (initialState) => {
  return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)))
}

export default initStore

