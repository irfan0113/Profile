import NextLink from 'next/link'
import {
  Link,
  Container,
  Heading,
  Box,
  Button,
  Flex,
  useColorMode
} from '@chakra-ui/react'
import { BasicInfo } from '../components/data'
import Layout from '../components/layouts/article'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin
} from 'react-icons/io5'
import Image from 'next/image'
import { Text } from '@chakra-ui/react'

const Home = () => {
  const { colorMode } = useColorMode()
  const userColorModeValue = colorMode === 'light' ? 'light' : 'dark'
  const lightBg = './images/light-bg2.png'
  const darkBg = './images/dark-bg.png'
  const bgImage = userColorModeValue === 'light' ? lightBg : darkBg
  const currentColor = userColorModeValue === 'light' ? 'black' : 'white'
  const currentColorInverted =
    userColorModeValue === 'light' ? 'white' : 'black'

  const innerBoxStyles = {
    display: 'flex',
    boxSize: 'full',
    p: 14,
    color: 'white',
    fontWeight: 'normal',
    fontSize: '20px',
    borderRadius: '30px',
    textColor: currentColor,
    backgroundSize: 'cover'
  }

  return (
    <Layout>
      <Container maxW="100%">
        <Flex flexWrap="wrap" gap="24px" justifyContent="space-evenly">
          {/* Info card */}
          <Box flex="7">
            <Box
              sx={innerBoxStyles}
              backgroundImage={`url(${bgImage})`}
              backgroundSize="cover"
              backgroundPosition="center"
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <Heading fontWeight="600" fontSize="50px">
                {BasicInfo.heading}
              </Heading>

              <Text mt={14}>
               {BasicInfo.subHeading}
              </Text>

              <Box mt="auto" justifyContent="space-between" marginLeft={0}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  spacing={40}
                >
                  <Box>
                    <Button
                      as={NextLink}
                      href={"mailto:" + BasicInfo.email}
                      scroll={false}
                      colorScheme="teal"
                      borderRadius="full"
                      size="lg"
                      bg={currentColor}
                    >
                      Contact Me
                    </Button>
                  </Box>

                  <Link href={BasicInfo.githhub} target="_blank">
                    <Button
                      variant="ghost"
                      ml={6}
                      leftIcon={<IoLogoGithub size="24" />}
                      background={currentColorInverted}
                      color={currentColor}
                      borderRadius="full"
                      iconButton={true}
                      iconSpacing={0}
                      padding={0}
                      size="lg"
                      _hover={{
                        background: '#4078c0',
                        color: 'white'
                      }}
                    />
                  </Link>

                  <Link href={BasicInfo.twitter} target="_blank">
                    <Button
                      variant="ghost"
                      ml={6}
                      leftIcon={<IoLogoTwitter size="24" />}
                      background={currentColorInverted}
                      borderRadius="full"
                      iconButton={true}
                      color={currentColor}
                      iconSpacing={0}
                      padding={0}
                      size="lg"
                      _hover={{
                        background: '#00acee',
                        color: 'white'
                      }}
                    />
                  </Link>

                  <Link href={BasicInfo.linkedin} target="_blank">
                    <Button
                      variant="ghost"
                      ml={6}
                      color={currentColor}
                      leftIcon={<IoLogoLinkedin size="24" />}
                      background={currentColorInverted}
                      borderRadius="full"
                      iconButton={true}
                      iconSpacing={0}
                      padding={0}
                      size="lg"
                      _hover={{
                        background: '#0072b1',
                        color: 'white'
                      }}
                    />
                  </Link>

                  <Link href={BasicInfo.instagram} target="_blank">
                    <Button
                      variant="ghost"
                      ml={6}
                      leftIcon={<IoLogoInstagram size="24" />}
                      background={currentColorInverted}
                      borderRadius="full"
                      color={currentColor}
                      iconButton={true}
                      iconSpacing={0}
                      padding={0}
                      size="lg"
                      _hover={{
                        background:
                          'linear-gradient(115deg, #f9ce34, #ee2a7b, #6228d7)',
                        color: 'white'
                      }}
                    />
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Image card */}
          <Box flex="3">
            <Image
              src={BasicInfo.imageUrl}
              alt="Profile image"
              width="800"
              height="800"
              style={{ borderRadius: '30px' }}
            />
          </Box>
        </Flex>
        
      </Container>
    </Layout>
  )
}

export default Home
export { getServerSideProps } from '../components/chakra'
