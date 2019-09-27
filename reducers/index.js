import { combineReducers } from 'redux'

import user, { initialState as userState } from './user'
import tools, { initialState as toolsState } from './tools'

export const initialState = {
  user: userState,
  tools: toolsState
}

export default combineReducers({
  user,
  tools,
})
