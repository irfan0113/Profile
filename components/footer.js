import { Box } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Box align="center" opacity={0.4} fontSize="sm" mt={20}>
      &copy; {new Date().getFullYear()} Takuya Matsuyama. All Rights Reserved.
    </Box>
  )
}

export default Footer
