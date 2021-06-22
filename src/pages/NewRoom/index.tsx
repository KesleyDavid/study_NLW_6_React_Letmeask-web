import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

import { Button } from '../../components/Button';

import imgIllustration from '../../assets/images/illustration.svg';
import imgLogo from '../../assets/images/logo.svg';

import { Container, Content, Title, Form, Logo, Info } from './styles';
import { useEffect } from 'react';

export default function NewRoom() {
  const history = useHistory();
  const { user } = useAuth();


  useEffect(() => {
    if (!user) {
      history.push('/');
    }
  }, [user,history]);

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