type TScreenValue = 'isMobile' | 'isTablet' | 'isLaptop' | 'isDesktop' | 'isBigScreen'

export const detectInitialDeviceType = (userAgent: string) => {
  let initialDeviceType: TScreenValue
  const regxTest = (regx: any, str: any) => new RegExp(regx).test(str)

  if (
    regxTest(
      '/Mobile|Windows Phone|Lumia|Android|webOS|iPhone|iPod|Blackberry|PlayBook|BB10|Opera Mini|\bCrMo/|Opera Mobi/i',
      userAgent
    )
  ) {
    initialDeviceType = 'isMobile'
  } else if (regxTest('/Tablet|iPad/i', userAgent) || userAgent.includes('iPad') || userAgent.includes('Tablet')) {
    initialDeviceType = 'isTablet'
  } else {
    initialDeviceType = 'isDesktop'
  }

  return {
    initialDeviceType,
    screenOptions: {
      isMobile: initialDeviceType === 'isMobile',
      isTablet: initialDeviceType === 'isTablet',
      isLaptop: false,
      isDesktop: initialDeviceType === 'isDesktop',
    }
  }
}
