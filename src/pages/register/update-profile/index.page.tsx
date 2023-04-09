import { Heading, MultiStep, Text } from '@ntn-ui/react'
import { Container, Header } from '../styles'
import { ProfileBox } from './styles'

export default function UpdateProfile() {
  return (
    <Container>
      <Header>
        <Heading as="strong">Quase lá</Heading>
        <Text>Por último, uma breve descrição e uma foto de perfil.</Text>

        <MultiStep size={4} currentStep={4} />
      </Header>
      <ProfileBox></ProfileBox>
    </Container>
  )
}
