import difference from "../reducers/difference"

export const updMyID = (id) => {
  return {
    type: 'UPD_MY_ID',
    myID: id
  }
}

export const updTrgtID = (id) => {
  return {
    type: 'UPD_TRGT_ID',
    trgtID: id
  }
}

export const updMyPlaylists = (playlists) => {
  return {
    type: 'UPD_MY_PLAYLIST',
    myPlaylists: playlists
  }
}

export const updTrgtPlaylists = (playlists) => {
  return {
    type: 'UPD_TRGT_PLAYLIST',
    trgtPlaylists: playlists
  }
}

export const updLog = () => {
  return {
    type: 'UPD_LOG',
  }
}

export const pushMyURI = (uri, tracks) => {
  return {
    type: 'PUSH_MY_URI',
    myURI: {
      uri: uri,
      tracks: tracks
    }
  }
}

export const filterMyURI = (uri, tracks) => {
  return {
    type: 'FILTER_MY_URI',
    myURI: {
      uri: uri,
      tracks: tracks
    }
  }
}

export const pushTrgtURI = (uri, tracks) => {
  return {
    type: 'PUSH_TRGT_URI',
    trgtURI: {
      uri: uri,
      tracks: tracks
    }
  }
}

export const filterTrgtURI = (uri, tracks) => {
  return {
    type: 'FILTER_TRGT_URI',
    trgtURI: {
      uri: uri,
      tracks: tracks
    }
  }
}

export const pushMyTrack = (uri) => {
  return {
    type: 'PUSH_MY_TRACK',
    myTrack: uri
  }
}

export const pushTrgtTrack = (uri) => {
  return {
    type: 'PUSH_TRGT_TRACK',
    trgtTrack: uri
  }
}

export const pushDifference = (difference) => {
  return {
    type: 'PUSH_DIFFERENCE',
    difference
  }
}

export const loadingSwitch = () => {
  return {
    type: 'LOADING_SWITCH',
  }
}

export const compLoaded = () => {
  return {
    type: 'COMP_LOADED',
  }
}

export const addDiffTrack = (data) => {
  return {
    type: 'ADD_DIFF_TRACK',
    track: data
  }
}