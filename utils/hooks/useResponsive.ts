import { useCallback, useEffect, useRef, useState } from 'react'

type TScreenValue = 'isMobile' | 'isTablet' | 'isLaptop' | 'isDesktop' | 'isBigScreen'

type TScreenParams<T> = {
  [T in TScreenValue]: boolean
}

type TUseResponsiveConfig = {
  breakpoints?: any,
  initialScreen?: TScreenValue
} 

const defaultConfig: TUseResponsiveConfig = {
  breakpoints: {
    desktop_min: 1440,
    laptop_max: 1439,
    laptop_min: 1024,
    tablet_min: 768,
    tablet_max: 1023,
    mobile_max: 767
  },
  initialScreen: 'isMobile'
}

const useResponsive = ({ breakpoints, initialScreen } = defaultConfig): TScreenParams<TScreenValue> => {
  
  const setScreenParams = useCallback((initialScreen: TScreenValue): TScreenParams<TScreenValue> => {
    if (!initialScreen) initialScreen = 'isMobile'

    const values = ['isMobile', 'isTablet', 'isLaptop', 'isDesktop', 'isBigScreen']

    let result = {} as TScreenParams<TScreenValue>

    values.forEach((value) => (result[value] = value === initialScreen ? true : false))

    return result
  }, [])

  const [state, setState] = useState(setScreenParams(initialScreen))

  const screen = useRef({
    width: null
    // height: null
  })

  const currentScreen = useRef(setScreenParams(initialScreen))

  const getWindowDimension = () => {
    const width =
      window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    const height =
      window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    return { width, height }
  }

  const setCurrentScreen = (options: TScreenParams<TScreenValue>) => {
    currentScreen.current = { ...options }
    setState(() => ({ ...options }))
  }

  const updateScreen = () => {
    const screenMap: Map<() => Boolean, TScreenValue> = new Map([
      [() => (screen.current.width <= breakpoints.mobile_max && !currentScreen.current.isMobile), 'isMobile'],
      [() => (screen.current.width >= breakpoints.tablet_min && screen.current.width <= breakpoints.tablet_max && !currentScreen.current.isTablet), 'isTablet'],
      [() => (screen.current.width >= breakpoints.laptop_min && screen.current.width <= breakpoints.laptop_max && !currentScreen.current.isLaptop), 'isLaptop'],
      [() => (screen.current.width >= breakpoints.desktop_min && !currentScreen.current.isDesktop), 'isDesktop']
    ])

    for (let [entry, value] of screenMap) { 
      entry() && setCurrentScreen(setScreenParams(value))
    }
  }

  const handleResize = () => {
    const { width, height } = getWindowDimension()
    screen.current.width = width
    // screen.current.height = height
    updateScreen()
  }

  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize, false)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return state
}

export default useResponsive
