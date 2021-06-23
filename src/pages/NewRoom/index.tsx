import { useEffect, FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';

import { Button } from '../../components/Button';

import imgIllustration from '../../assets/images/illustration.svg';
import imgLogo from '../../assets/images/logo.svg';

import { Container, Content, Title, Form, Logo, Info } from './styles';

export default function NewRoom() {
  const history = useHistory();
  const { user } = useAuth();

  const [newRoom, setNewRoom] = useState('');

  useEffect(() => {
    if (!user) {
      history.push('/');
    }
  }, [user,history]);

  async function handleCreateRoom(event:FormEvent) {
    event.preventDefault();

    if (newRoom.trim() === '') {
      // trim() => remove os espaços em brancos
      // Verifica se usuário digitou algum valor
      return;
    }


    const roomRef = database.ref('rooms');

    const firebaseRoom = await roomRef.push({
      title: newRoom,
      authorId: user?.id,
    });

    history.push(`/rooms/${firebaseRoom.key}`);
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
          <Title>Criar uma nova sala</Title>
          <Form onSubmit={handleCreateRoom}>
            <input
              type="text" 
              placeholder="Nome da sala"
              onChange={ event => setNewRoom(event.target.value) }
              value={newRoom}
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