import NextLink from 'next/link'
import Image from 'next/image'
import {
  Box,
  Text,
  LinkBox,
  LinkOverlay,
  Stack,
  Container
} from '@chakra-ui/react'
import { Link, Heading, Button } from '@chakra-ui/react'
import { Global } from '@emotion/react'
import { useState } from 'react'
import { IoOpenOutline } from 'react-icons/io5'
import { Flex } from '@chakra-ui/react'

export const GridItem = ({ children, href, title, thumbnail }) => (
  <Box maxW="100%" textAlign="center">
    <LinkBox cursor="pointer">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      />
      <LinkOverlay href={href} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
  </Box>
)


export const WorkGridItem = ({ children, id, title, thumbnail }) => {
  const [isHovered, setIsHovered] = useState(false)
  return (
    <Container maxW="100%">
      <Flex
        flexWrap="wrap"
        gap="24px"
        w="100%"
        h="85vh"
        textAlign="left"
        borderRadius="30px"
        backgroundImage={`url(${thumbnail})`}
        backgroundSize="cover"
        backgroundPosition="center"
        display="flex"
        flexDirection="column"
        alignItems="left"
        p={8}
        transition="transform 0.3s ease-in-out"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        transform={isHovered ? 'scale(1.02)' : 'scale(1)'}
        justifyContent="space-between"
      >
        <Box flex="7">
          <LinkBox
            as={NextLink}
            href={`/works/${id}`}
            scroll={false}
            cursor="pointer"
          >
            <LinkOverlay as="div" href={`/works/${id}`}>
              <Text
                mt={2}
                fontSize={40}
                color={'white'}
                fontFamily={'Montserrat'}
                fontWeight={'bold'}
                align={'left'}
              >
                {title}
              </Text>
            </LinkOverlay>
            <Text
              fontSize={20}
              color={'white'}
              fontFamily={'Montserrat'}
              align={'left'}
            >
              {children}
            </Text>
          </LinkBox>
        </Box>
        <Box>
          <Link
            href={`/works/${id}`}
            target="_blank"
            display="flex"
            justifyContent="flex-end"
          >
            <Button
              variant="ghost"
              leftIcon={<IoOpenOutline size="24" />}
              background={'white'}
              color={'black'}
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
        </Box>
      </Flex>
    </Container>
  )
}

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
)
