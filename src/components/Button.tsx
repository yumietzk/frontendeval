import React from 'react';
import { HiChevronDown, HiChevronRight } from 'react-icons/hi';

type ButtonProps = {
  isOpen: object;
  index: number;
  handleClick(index: number): void;
};

function Button({ isOpen, index, handleClick }: ButtonProps) {
  return (
    <button type="button" className="mr-2" onClick={() => handleClick(index)}>
      {isOpen[`question${[index + 1]}`] ? (
        <HiChevronDown className="w-7 h-7 text-emerald-600" />
      ) : (
        <HiChevronRight className="w-7 h-7 text-emerald-600" />
      )}
    </button>
  );
}

export default Button;
