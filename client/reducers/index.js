import {combineReducers} from 'redux'

import myPlaylists from './myPlaylists'
import loggedIn from './loggedIn'
import myURIs from './myURIs'
import trgtURIs from './trgtURIs'
import compareClicked from './compareClicked'
import trgtPlaylists from './trgtPlaylists'

export default combineReducers({
  myPlaylists,
  loggedIn,
  myURIs,
  trgtPlaylists,
  trgtURIs,
  compareClicked
})
