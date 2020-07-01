const difference = (state = [], action) => {
    switch (action.type) {
      case 'PUSH_DIFFERENCE':
        return ( state = action.difference)

    case 'CLEAR_DIFFERENCE':
        return state.filter(x => x !== x)
      default:
        return state
    }
  }
  
  export default difference