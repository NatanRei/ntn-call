import { Button, Heading, MultiStep, Text, TextInput } from '@ntn-ui/react'
import { Container, Form, Header } from './styles'
import { ArrowRight } from 'phosphor-react'

export default function Register() {
  return (
    <Container>
      <Header>
        <Heading as="strong">Bem-vindo ao NTN Call!</Heading>
        <Text>
          Precisamos de algumas informações para criar seu perfil! Ah, você pode
          editar essas informações depois.
        </Text>

        <MultiStep size={4} currentStep={1} />
      </Header>
      <Form as="form">
        <label>
          <Text size="sm">Nome do usuário</Text>
          <TextInput prefix="ntn.com/" placeholder="seu-usuario" />
        </label>

        <label>
          <Text size="sm">Nome completo</Text>
          <TextInput placeholder="Nome Completo" />
        </label>

        <Button type="submit">
          Próximo passo <ArrowRight />
        </Button>
      </Form>
    </Container>
  )
}
