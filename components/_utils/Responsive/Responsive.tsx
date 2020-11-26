import { shallowEqual, useSelector } from 'react-redux'
import { deviceSelectors } from "../../../redux/ducks/device"
import { TScreenParams, TScreenValue } from "./types"

const Responsive: React.FC<{renderOn: Array<TScreenValue>}> = ({ renderOn, children }) => {

  const screenParams = useSelector((state) => deviceSelectors.selectScreenOptions(state), shallowEqual)

  const shouldRender = (screenState: TScreenParams<TScreenValue>, selectedScreens: Array<TScreenValue>) => {
    return selectedScreens.reduce((acc: boolean, screen: TScreenValue) => {
      if (screenState[screen]) acc = true
      return acc
    }, null)
  }
  
  return <>{shouldRender(screenParams, renderOn) && children}</>
}

export default Responsive