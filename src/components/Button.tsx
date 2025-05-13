// components/Button.tsx
import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
  variant?: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ text, onClick, variant = 'primary' }) => {
  const base = 'px-4 py-2 rounded font-semibold';
  const style =
    variant === 'primary' ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-300 text-black';

  return (
    <button className={`${base} ${style}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
