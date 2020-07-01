const myID = (state = {}, action) => {
    switch (action.type) {
      case 'UPD_MY_ID':
        return state = action.myID
      default:
        return state
    }
  }

  export default myID
