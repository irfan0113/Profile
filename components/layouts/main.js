import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import { useColorModeValue } from '@chakra-ui/react'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8} bg={useColorModeValue('#ffffff', '#20202380')}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Irfan's homepage" />
        <meta name="author" content="Muhammed Irfan" />
        <meta name="author" content="muhammedirfan" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="twitter:title" content="Muhammed Irfan" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@craftzdog" />
        <meta name="twitter:creator" content="@craftzdog" />
        <meta name="twitter:image" content="https://www.craftz.dog/card.png" />
        <meta property="og:site_name" content="Muhammed Irfan" />
        <meta name="og:title" content="Muhammed Irfan" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.craftz.dog/card.png" />
        <title>Muhammed Irfan - Homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="100%" pt={14}>
        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
