import styled from 'styled-components';

export const Container = styled.button`
  margin-top: 4rem;
  height: 50px;
  border-radius: 8px;
  font-weight: 500;
  background: ${({color}) => color === 'social' ? '#EA4335' : 'var(--purple)'};
  color: var(--white);
  padding: 0 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 0;

  transition: filter 0.2s;

  img {
    margin-right: 8px;
  }

  &:not(:disabled):hover {
    // hover apenas se botão não estiver desabilitado
    filter: brightness(0.9);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;