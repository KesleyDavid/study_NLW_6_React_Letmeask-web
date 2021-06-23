import { FormEvent, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';

import imgLogo from '../../assets/images/logo.svg';

import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';

import { Container, Content, Title, Form } from './styles';

type RoomParams = {
  id: string;
}

export default function Room() {
  const params = useParams<RoomParams>();
  const { user } = useAuth();
  
  const roomId = params.id;
  const [newQuestion, setNewQuestion] = useState('');

  async function handleSendQuestion(event:FormEvent){
    event.preventDefault();

    if (newQuestion.trim() === '') {
      // trim() => remove os espaços em brancos
      // Verifica se usuário digitou algum valor
      return;
    }

    if (!user) {
      throw new Error('You must be logged in');
    }

    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar,
      },
      isHighlighted: false,
      isAnswered: false,
    }
    
    await database.ref(`rooms/${roomId}/questions`).push(question);
  }

  return (
    <Container>
      <header>
        <Content>
          <img src={imgLogo} alt="Letmeask" />
          <RoomCode code={roomId} />
        </Content>
      </header>
      <main>
        <Title>
          <h1>Sala React</h1>
          <span>4 perguntas</span>
        </Title>

        <Form onSubmit={handleSendQuestion}>
          <textarea
            placeholder="O que você quer perguntar?"
            onChange={ event => setNewQuestion(event.target.value) }
            value={newQuestion}
          />
          <div>
            <span>Para enviar uma pergunta, <button>faça seu login</button>.</span>
            <Button type="submit" disabled={!user}>Enviar pergunta</Button>
          </div>
        </Form>
      </main>
    </Container>
  )
}