import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

const thumbCyber = './images/cyber.png'
const thumbFifa = './images/fifa.png'

const Works = () => (
  <Layout title="Works">
    <Container maxW="90%">
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section>
          <WorkGridItem id="aspire" title="Aspire Zone Foundation" thumbnail={thumbCyber}>
            SOC Analyst
          </WorkGridItem>
        </Section>
        <Section>
          <WorkGridItem
            id="worldcup"
            title="Supreme Committee Consultant"
            thumbnail={thumbFifa}
          >
            Fifa World Cup 2022
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  </Layout>
)

export default Works
// export { getServerSideProps } from '../components/chakra'
