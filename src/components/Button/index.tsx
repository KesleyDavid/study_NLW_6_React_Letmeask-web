import { ButtonHTMLAttributes } from 'react';

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
};

export function Button(props: ButtonProps) {
  return (
    <Container color={props.color} {...props} />
    // spread operator => todas propriedades recebidas sendo enviadas
  )
}