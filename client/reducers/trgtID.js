const trgtID = (state = {}, action) => {
    switch (action.type) {
      case 'UPD_TRGT_ID':
        return state = action.trgtID
      default:
        return state
    }
  }

  export default trgtID
