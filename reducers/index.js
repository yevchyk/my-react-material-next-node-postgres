import { combineReducers } from 'redux'

import user, { initialState as userState } from './user'
import messages, { initialState as messageState } from './messages'
import tools, { initialState as toolsState } from './tools'

export const initialState = {
  user: userState,
  tools: toolsState,
  messages: messageState,
}

export default combineReducers({
  user,
  tools,
  messages
})
