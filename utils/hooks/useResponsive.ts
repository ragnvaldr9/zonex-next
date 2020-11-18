import { useEffect, useRef, useState } from 'react'

const defaultBreakpoints = {
  desktop_min: 1440,
  laptop_max: 1439,
  laptop_min: 1024,
  tablet_min: 768,
  tablet_max: 1023,
  mobile_max: 767
}

const IdMobileHeight = {
  mobileLandscape_min: 320,
  mobileLandscape_max: 425
}

const useResponsive = (breakpoints = defaultBreakpoints) => {
  
  const [state, setState] = useState({
    isMobile: true,
    isTablet: false,
    isLaptop: false,
    isDesktop: false,
    isBigScreen: false
  })

  const screen = useRef({
    width: null
    // height: null
  })

  const currentScreen = useRef({
    isMobile: true,
    isTablet: false,
    isLaptop: false,
    isDesktop: false,
    isBigScreen: false
  })

  const getWindowDimension = () => {
    const width =
      window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    const height =
      window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    return { width, height }
  }

  const setCurrentScreen = (options) => {
    currentScreen.current = {...options}
    setState(() => ({...options}))
  }

  const updateScreen = () => {
    if (screen.current.width <= breakpoints.mobile_max && !currentScreen.current.isMobile) {
      console.log('mobile')
      
      setCurrentScreen({
        isMobile: true,
        isTablet: false,
        isLaptop: false,
        isDesktop: false,
        isBigScreen: false
      })
    } else if (
      screen.current.width >= breakpoints.tablet_min &&
      screen.current.width <= breakpoints.tablet_max &&
      !currentScreen.current.isTablet
    ) {
      console.log('tablet')
      
      setCurrentScreen({
        isMobile: false,
        isTablet: true,
        isLaptop: false,
        isDesktop: false,
        isBigScreen: false
      })
    } else if (
      screen.current.width >= breakpoints.laptop_min &&
      screen.current.width <= breakpoints.laptop_max &&
      !currentScreen.current.isLaptop
    ) {
      console.log('laptop')
      setCurrentScreen({
        isMobile: false,
        isTablet: false,
        isLaptop: true,
        isDesktop: false,
        isBigScreen: false
      })
    } else if (
      screen.current.width >= breakpoints.desktop_min &&
      !currentScreen.current.isDesktop
    ) {
      console.log('desktop')
      setCurrentScreen({
        isMobile: false,
        isTablet: false,
        isLaptop: false,
        isDesktop: true,
        isBigScreen: false
      })
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
