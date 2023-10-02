import { Container, Text, Flex, Box } from '@chakra-ui/react'
import { Title, WorkImage } from '../../components/work'
import Layout from '../../components/layouts/article'
import { AspireWork } from '../../components/data'

const Work = () => (
  <Layout title="Inkdrop">
    <Container maxW={'90%'}>
      <Flex
        direction={['column', 'column', 'row']}
        align={['center', 'center', 'flex-start']}
      >
        <Box flex='5' mr={[0, 0, 4]}>
          <Title>{AspireWork.heading}</Title>

          {AspireWork.paragraphs.map((paragraph, index) => (
            <Text
              key={index}
              dangerouslySetInnerHTML={{ __html: paragraph }}
              mt={4}
              textAlign={'justify'}
            />
          ))}
        </Box>

        <Box flex='4'>
          <WorkImage src={AspireWork.imageUrl} alt="Inkdrop" />
        </Box>
      </Flex>
    </Container>
  </Layout>
)

export default Work
// export { getServerSideProps } from '../../components/chakra'
