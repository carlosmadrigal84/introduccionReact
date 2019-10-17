const timer = (state, action) => {
    switch (action.type) {
      case 'SET_TIME':
        return {
            time: action.time
          }
      case 'START_TIME':
        return {
          time: 60
        }
      default:
        return state
    }
  }
  
  export default timer