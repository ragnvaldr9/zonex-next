const exampleSelector = (state: any) => state.example

const selectInitialDeviceType = (state) => (state.device.initialDeviceType)

const selectScreenOptions = (state) => (state.device.screenOptions)

export default {
  selectInitialDeviceType,
  selectScreenOptions
}