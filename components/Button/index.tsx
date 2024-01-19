import React, { FC, MouseEvent } from 'react';

interface ButtonProps {
  label: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
}

const Button: FC<ButtonProps> = ({ label, onClick }) => (
  <button onClick={onClick}>{label}</button>
);

export default Button;
