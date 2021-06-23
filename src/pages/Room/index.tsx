import { FormEvent, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import { database } from '../../services/firebase';

import imgLogo from '../../assets/images/logo.svg';

import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';

import { Container, Content, Title, Form, UserInfo } from './styles';

type RoomParams = {
  id: string;
}

type FirebaseQuestions = Record<string, {
  author: {
    name: string;
    avatar: string;
  },
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
}>
// Record => objeto, mas sem saber os campos
// Record<string> => chave do objeto é uma string

type Question = {
  id: string;
  author: {
    name: string;
    avatar: string;
  },
  content: string;
  isAnswered: boolean;
  isHighlighted: boolean;
}

export default function Room() {
  const params = useParams<RoomParams>();
  const { user } = useAuth();
  
  const roomId = params.id;
  const [newQuestion, setNewQuestion] = useState('');
  const [questions, setQuestions] = useState<Question[]>([]);
  const [title, setTitle] = useState('');

  useEffect(() => {
    const roomRef = database.ref(`rooms/${roomId}`);

    // once => uma consulta
    // on => realtime
    roomRef.on('value', room => {
      const databaseRoom = room.val();
      // const firebaseQuestions = databaseRoom.questions as FirebaseQuestions;
      const firebaseQuestions: FirebaseQuestions = databaseRoom.questions  ?? {};
      // const parsedQuestions = Object.entries(firebaseQuestions)
      // Object.entries => transforma objeto em vetor
      // room.questions ?? {} => se estiver vazio
      
      // const parsedQuestions = Object.entries(firebaseQuestions).map(value => {
      //   // value => value[0] -> chave
      //   // value => value[1] -> valor
      // });

      const parsedQuestions = Object.entries(firebaseQuestions).map(([key, value]) => {
        return {
          id: key,
          content: value.content,
          author: value.author,
          isHighlighted: value.isHighlighted,
          isAnswered: value.isAnswered,
        }
      });

      setTitle(databaseRoom.title);
      setQuestions(parsedQuestions);
    })
  }, [roomId]);

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

    setNewQuestion('');
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
          <h1>Sala {title}</h1>
          { questions.length > 0 && <span>{questions.length} pergunta(s)</span>}
        </Title>

        <Form onSubmit={handleSendQuestion}>
          <textarea
            placeholder="O que você quer perguntar?"
            onChange={ event => setNewQuestion(event.target.value) }
            value={newQuestion}
          />
          <div>
            { user ? (
              <UserInfo>
                <img src={user.avatar} alt={user.name} />
                <span>{user.name}</span>
              </UserInfo>
            ) : (
              <span>Para enviar uma pergunta, <button>faça seu login</button>.</span>
            )}
            <Button type="submit" disabled={!user}>Enviar pergunta</Button>
          </div>
        </Form>
      </main>
    </Container>
  )
}