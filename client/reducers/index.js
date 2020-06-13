import {combineReducers} from 'redux'

import myPlaylists from './myPlaylists'
import loggedIn from './loggedIn'

export default combineReducers({
  myPlaylists,
  loggedIn
})
