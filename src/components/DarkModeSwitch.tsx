import { SunIcon } from '@chakra-ui/icons'
import { useColorMode, Switch } from '@chakra-ui/react'

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === 'dark'
  return (
    <SunIcon
      position="fixed"
      top="1rem"
      right="1rem"
      color="gray"
      cursor="pointer"
      onClick={toggleColorMode}
    />
  )
}
