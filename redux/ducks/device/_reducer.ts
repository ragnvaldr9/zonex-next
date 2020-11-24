import conastants from './_constants'

const initialState = {
  initialDeviceType: 'isMobile',
  screenOptions: {}
}

const deviceReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case conastants.SET_DEVICE: 
      return {
        ...state,
        initialDeviceType: action.payload
      }
    case conastants.SET_SCREEN_OPTIONS: 
      return {
        ...state,
        screenOptions: {...state.screenOptions, ...action.payload}
      }
    default:
      return state    
  }
}

export default deviceReducer