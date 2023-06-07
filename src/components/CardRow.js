import React from 'react';
import Card from './Card';

export default function CardRow({ item, row, clicked, handleClick, revert }) {
  return (
    <div className="flex space-x-2">
      {item.map((num, i) => {
        const column = i;

        return (
          <Card
            key={i}
            // cards={cards}
            // setCards={setCards}
            num={num}
            row={row}
            column={column}
            clicked={clicked}
            handleClick={handleClick}
            revert={revert}
          />
        );
      })}
    </div>
  );
}
