type TScreenValue = 'isMobile' | 'isTablet' | 'isLaptop' | 'isDesktop' | 'isBigScreen'

export const detectInitialDeviceType = (userAgent: string): TScreenValue => {
  let initialDeviceType: TScreenValue

  const regxTest = (regx: any, str: any) => new RegExp(regx).test(str)

  if (
    regxTest(
      '/Mobile|Windows Phone|Lumia|Android|webOS|iPhone|iPod|Blackberry|PlayBook|BB10|Opera Mini|\bCrMo/|Opera Mobi/i',
      userAgent
    )
  ) {
    initialDeviceType = 'isMobile'
  } else if (regxTest('/Tablet|iPad/i', userAgent)) {
    initialDeviceType = 'isTablet'
  } else {
    initialDeviceType = 'isDesktop'
  }

  return initialDeviceType
}
