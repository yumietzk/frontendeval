import React, { useEffect, useState } from 'react';

export default function Card({
  num,
  row,
  column,
  // isOpen,
  // clicked,
  handleClick,
  revert,
}) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (revert) setIsOpen(false);
  }, [revert]);

  const value = num || null;

  const handleOpen = () => {
    setIsOpen(true);
    handleClick(row, column, num);
  };

  return (
    <div
      className={`${!num && 'border-none'} border-2 border-sky-500 ${
        !isOpen && 'bg-sky-500'
      } h-10 w-10 flex justify-center items-center`}
      onClick={handleOpen}
    >
      {isOpen && value}
    </div>
  );

  // Would be nice to add styling to flip a card
}
