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

export const pushMyURI = (uri) => {
  return {
    type: 'PUSH_MY_URI',
    myURI: uri
  }
}

export const filterMyURI = (uri) => {
  return {
    type: 'FILTER_MY_URI',
    myURI: uri
  }
}

export const pushTrgtURI = (uri) => {
  return {
    type: 'PUSH_TRGT_URI',
    trgtURI: uri
  }
}

export const filterTrgtURI = (uri) => {
  return {
    type: 'FILTER_TRGT_URI',
    trgtURI: uri
  }
}

export const compareClicked = () => {
  return {
    type: 'COMPARE_CLICKED',
  }
}
