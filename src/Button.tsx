import React from "react";

interface ButtonProps {
  value: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

const Button: React.FC<ButtonProps> = ({ value, onClick }) => {
  return <button onClick={onClick}>{value}</button>;
};

export default Button;
