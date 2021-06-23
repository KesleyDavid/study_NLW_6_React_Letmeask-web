import styled from 'styled-components';

export const Container = styled.div`
  header {
    padding: 1.5rem;
    border-bottom: 1px solid #e2e2e2;
  }

  main {
    max-width: 800px;
    margin: 0 auto;
  }
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    max-height: 45px;
  }
`;

export const Title = styled.div`
  margin: 2rem 0 1.5rem;
  display: flex;
  align-items: center;

  h1 {
    font-family: 'Poppins', sans-serif;
    font-size: 1.5rem;
    color: var(--black);
  }

  span {
    margin-left: 1rem;
    background: var(--pink-dark);
    border-radius: 9999px;
    padding: 8px 16px;
    color: var(--white);
    font-size: 0.87rem;
  }
`;

export const Form = styled.form`
  textarea {
    width: 100%;
    border: 0;
    padding: 1rem;
    border-radius: 8px;
    background: var(--white-background);
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
    resize: vertical;
    min-height: 130px;
  }

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 1rem;

    span {
      font-size: 0.87em;
      color: var(--gray-dark);
      font-weight: 500;

      button {
        background: transparent;
        border: 0;
        color: var(--purple);
        text-decoration: underline;
        font-size: 0.87rem;
        font-weight: 500;
        cursor: pointer;
      }
    }
  }
`;
