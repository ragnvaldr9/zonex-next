import { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deviceSelectors, deviceOperations } from '../../../redux/ducks/device'
import useResponsive from "../Responsive/useResponsive"

const DeviceChecker = () => {
  
  const breakpoints = {
    desktop_min: 1440,
    laptop_max: 1439,
    laptop_min: 1024,
    tablet_min: 768,
    tablet_max: 1023,
    mobile_max: 767
  }

  const initialDevice = useSelector(state => deviceSelectors.selectInitialDeviceType(state))

  const screenOptions = useResponsive(breakpoints, initialDevice)
  
  const dispatch = useDispatch()

  const setScreenOptions = useCallback((options) => {dispatch(deviceOperations.setScreenOptions(options))}, [dispatch])

  useEffect(() => {
    setScreenOptions(screenOptions)
  }, [screenOptions])


  return <></>
}

export default DeviceChecker

