import { useParams } from 'react-router-dom';

import imgLogo from '../../assets/images/logo.svg';

import { Button } from '../../components/Button';
import { RoomCode } from '../../components/RoomCode';

import { Container, Content, Title, Form } from './styles';

type RoomParams = {
  id: string;
}

export default function Room() {
  const params = useParams<RoomParams>();

  return (
    <Container>
      <header>
        <Content>
          <img src={imgLogo} alt="Letmeask" />
          <RoomCode code={params.id} />
        </Content>
      </header>
      <main>
        <Title>
          <h1>Sala React</h1>
          <span>4 perguntas</span>
        </Title>

        <Form>
          <textarea
            placeholder="O que você quer perguntar?"
          />
          <div>
            <span>Para enviar uma pergunta, <button>faça seu login</button>.</span>
            <Button type="submit">Enviar pergunta</Button>
          </div>
        </Form>
      </main>
    </Container>
  )
}