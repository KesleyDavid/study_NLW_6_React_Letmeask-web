import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: stretch;
  height: 100vh;

  aside { 
    display: flex;
    flex: 7;

    flex-direction: column;
    justify-content: center;
    padding: 120px 80px;

    background: var(--purple);
    color: var(--white);

    img {
      max-width: 320px;
    }

    strong {
      font: 700 2.25rem 'Poppins', sans-serif;
      line-height: 2.65rem;
      margin-top: 1rem;
    }

    p {
      font-size: 1.5rem;
      line-height: 2rem;
      margin-top: 1rem;
      color: var(--white-details);
    }
  }

  main {
    display: flex;
    flex: 8;

    padding: 0 2rem;
    align-items: center;
    justify-content: center;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;
  align-items: stretch; // todos elementos estiquem para caber na largura total do container de 320px
  text-align: center;
`;

export const Logo = styled.img`
  align-self: center;
`;

export const Form = styled.form`
  input {
    height: 50px;
    border-radius: 8px;
    padding: 0 1rem;
    background: var(--white);
    border: 1px solid var(--gray-medium);
  };

  button {
    margin-top: 1rem;
  }

  input, button {
    width: 100%;
  }
`

export const Separator = styled.div`
  display: flex;
  margin: 2rem 0;
  align-items: center;
  font-size: 0.87rem;
  color: var(--gray-medium);

  &::before {
    content: ''; // sempre existir, se não, não irá aparecer nada
    flex: 1;
    height: 1px;
    background: var(--gray-medium);
    margin-right: 1rem;
  }

  &::after {
    content: ''; // sempre existir, se não, não irá aparecer nada
    flex: 1;
    height: 1px;
    background: var(--gray-medium);
    margin-left: 1rem;
  }

`;