import { TScreenParams, TScreenValue } from "./types"
import useResponsive from "./useResponsive"

const Responsive: React.FC<{renderOn: Array<TScreenValue>}> = ({ renderOn, children }) => {

  const breakpoints = {
    desktop_min: 1440,
    laptop_max: 1439,
    laptop_min: 1024,
    tablet_min: 768,
    tablet_max: 1023,
    mobile_max: 767
  }

  const screenParams = useResponsive(breakpoints, 'isMobile')

  const shouldRender = (screenState: TScreenParams<TScreenValue>, selectedScreens: Array<TScreenValue>) => {
    return selectedScreens.reduce((acc: boolean, b: TScreenValue) => {
      if (screenState[b]) acc = true
      return acc
    }, null)
  }

  return <>{shouldRender(screenParams, renderOn) && children}</>

}

export default Responsive