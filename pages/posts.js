import { Container, Heading, Text } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Posts = () => (
  <Layout title="Posts">
    <Container maxW="90%">
      <Heading as="h3" fontSize={20} mb={4}>
        Articles
      </Heading>

      <Section delay={0.1}>
        <Text>Coming Soon ..</Text>
      </Section>
    </Container>
  </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
