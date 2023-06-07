import React, { useState } from 'react';
import CardRow from './CardRow';
import setNumbers from './utils/setNumbers';

const initializeState = () => {
  const container = new Array(6);

  for (let i = 0; i < container.length; i++) {
    container[i] = new Array(6);
  }

  const newContainer = setNumbers(container);

  return newContainer;
};

export default function CardBoard() {
  const [cards, setCards] = useState(initializeState);
  // const [isOpen, setIsOpen] = useState([false, false]);
  // const [isMatched, setIsMatched] = useState(false);
  const [revert, setRevert] = useState(false);

  let clicked = 0;
  let target;
  let place;

  const handleClick = (row, column, num) => {
    // const newIsOpen = [...isOpen];
    // newIsOpen[clicked] = true;
    // setIsOpen(newIsOpen);
    setRevert(false);
    console.log(clicked, revert);

    if (clicked === 0) {
      target = num;
      place = [row, column];

      clicked += 1;
    } else if (clicked === 1) {
      if (target === num) {
        let originalCards = [...cards];

        originalCards[place[0]][place[1]] = null;
        originalCards[row][column] = null;

        setTimeout(() => {
          console.log('Matched!');
          setCards(originalCards);
        }, 3000);
      } else {
        setTimeout(() => {
          console.log('Not matched!');
          setRevert(true);
        }, 3000);
      }

      clicked = 0;
    }
  };

  return (
    <div className="space-y-2">
      {cards.map((item, i) => {
        const row = i;

        return (
          <CardRow
            key={i}
            item={item}
            row={row}
            // isOpen={isOpen}
            clicked={clicked}
            handleClick={handleClick}
            revert={revert}
          />
        );
      })}
    </div>
  );
}
