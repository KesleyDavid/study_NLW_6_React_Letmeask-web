import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';

import { Button } from '../../components/Button';

import imgIllustration from '../../assets/images/illustration.svg';
import imgLogo from '../../assets/images/logo.svg';
import imgGoogleIcon from '../../assets/images/google-icon.svg';

import { Container, Content, Form, Logo, Separator } from './styles';

export default function Home() {
  const history = useHistory();
  const { user, signInWithGoogle } = useAuth() ;
  const [roomCode, setRoomCode] = useState('');
  
  async function handleCreateRoom(){
    if (!user) {
      await signInWithGoogle();
    }

    history.push('/rooms/new');
  }

  async function handleJoinRoom(event: FormEvent){
    event.preventDefault();

    if (roomCode.trim() === '') {
      return;
    }

    const roomRef = await database.ref(`rooms/${roomCode}`).get();

    if (!roomRef.exists()) {
      alert('Room does not exists.');
      return;
    }

    history.push(`rooms/${roomCode}`);
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
          <Form onSubmit={handleJoinRoom}>
            <input
              type="text" 
              placeholder="Digite o código da sala"
              onChange={ event => setRoomCode(event.target.value) }
              value={roomCode}
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