import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';

import { Button } from '../../components/Button';

import imgIllustration from '../../assets/images/illustration.svg';
import imgLogo from '../../assets/images/logo.svg';
import imgGoogleIcon from '../../assets/images/google-icon.svg';

import { Container, Content, Form, Logo, Separator } from './styles';

export default function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth() ;
  
  async function handleCreateRoom(){
    if (!user) {
      await signInWithGoogle();
    }

    history.push('/rooms/new');
  }

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
          <Button color="social" onClick={handleCreateRoom}>
            <img src={imgGoogleIcon} alt="Logo do Google" />
            Crie sua sala com o Google
          </Button>
          <Separator>ou entre em uma sala</Separator>
          <Form>
            <input
              type="text" 
              placeholder="Digite o código da sala"
            />
            <Button type="submit">
              Entrar na sala
            </Button>
          </Form>
        </Content>
      </main>
    </Container>
  )
}