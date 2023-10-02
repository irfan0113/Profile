import { Container, Text, Flex, Box } from '@chakra-ui/react'
import { Title, WorkImage } from '../../components/work'
import Layout from '../../components/layouts/article'
import { FifaWork } from '../../components/data'

const Work = () => (
  <Layout title="Fifa">
    <Container maxW={'90%'}>
      <Flex
        direction={['column', 'column', 'row']}
        align={['center', 'center', 'flex-start']}
      >
        <Box flex='5' mr={[0, 0, 4]}>
          <Title>{FifaWork.heading}</Title>

          {FifaWork.paragraphs.map((paragraph, index) => (
            <Text
              key={index}
              dangerouslySetInnerHTML={{ __html: paragraph }}
              mt={4}
              textAlign={'justify'}
            />
          ))}
        </Box>

        <Box flex='4'>
          <WorkImage src={FifaWork.imageUrl} alt="Inkdrop" />
        </Box>
      </Flex>
    </Container>
  </Layout>
)

export default Work
// export { getServerSideProps } from '../../components/chakra'
