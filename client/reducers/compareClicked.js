const compareClicked = (state = false, action) => {
    switch (action.type) {
      case 'COMPARE_CLICKED':
        return !state
      default:
        return state
    }
  }
  
  export default compareClicked
  