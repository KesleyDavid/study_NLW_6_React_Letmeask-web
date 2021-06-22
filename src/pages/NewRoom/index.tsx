import { Link } from 'react-router-dom';

import imgIllustration from '../../assets/images/illustration.svg';
import imgLogo from '../../assets/images/logo.svg';

import { Button } from '../../components/Button';

import { Container, Content, Title, Form, Logo, Info } from './styles';

export default function NewRoom() {
  return (
    <Container>
      <aside>
        <img src={imgIllustration} alt="Ilustração simbolizando perguntas e respostas" />
        <strong>Crie salas de Q&amp;A ao-vivo</strong>
        <p>Tire as dúvidas da sua audiência em tempo-real</p>
      </aside>
      <main>
        <Content>
          <Logo src={imgLogo} alt="Letmeask" />
          <Title>Criar uma nova sala</Title>
          <Form>
            <input
              type="text" 
              placeholder="Nome da sala"
            />
            <Button type="submit">
              Criar sala
            </Button>
          </Form>
          <Info>
            Quer entrar em uma sala existente?
            <Link to="/">clique aqui</Link>
          </Info>
        </Content>
      </main>
    </Container>
  )
}