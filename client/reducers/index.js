import {combineReducers} from 'redux'

import myID from './myID'
import trgtID from './trgtID'
import myPlaylists from './myPlaylists'
import loggedIn from './loggedIn'
import myURIs from './myURIs'
import trgtURIs from './trgtURIs'
import trgtPlaylists from './trgtPlaylists'
import myTracks from './myTracks'
import trgtTracks from './trgtTracks'
import difference from './difference'
import myTtlTracks from './myTtlTracks'
import trgtTtlTracks from './trgtTtlTracks'
import loadingSwitch from './loadingSwitch'
import compLoaded from './compLoaded'
import diffTracks from './diffTracks'

export default combineReducers({
  myID,
  trgtID,
  myPlaylists,
  loggedIn,
  myURIs,
  trgtPlaylists,
  trgtURIs,
  myTracks,
  trgtTracks,
  difference,
  myTtlTracks,
  trgtTtlTracks,
  loadingSwitch,
  compLoaded,
  diffTracks
})
