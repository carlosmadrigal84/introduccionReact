export const startTimeAction = () => ({
    type: 'START_TIME',
  })

export const setTimeAction = timeInMiliseconds => ({
    type: 'SET_TIME',
    time: Math.floor(timeInMiliseconds / 1000)
  })