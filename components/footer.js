import { Box } from '@chakra-ui/react'
import { BasicInfo } from './data'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm" mt={20}>
      &copy; {new Date().getFullYear()} {BasicInfo.fullName}. All Rights Reserved.
    </Box>
  )
}

export default Footer
