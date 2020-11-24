import constants from './_constants'

const setInitialDevice = (deviceType) => ({
  type: constants.SET_DEVICE,
  payload: deviceType
})

const setScreenOptions = (options) => ({
  type: constants.SET_SCREEN_OPTIONS,
  payload: options
})

export default {
  setInitialDevice,
  setScreenOptions
}
