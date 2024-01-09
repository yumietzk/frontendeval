import { MouseEventHandler } from 'react';
import { HiChevronDown, HiChevronRight } from 'react-icons/hi';

type Props = {
  isOpen: object;
  index: number;
  handleClick: MouseEventHandler;
};

function Button({ isOpen, index, handleClick }: Props) {
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
