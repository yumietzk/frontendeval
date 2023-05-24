import React, { useState } from 'react';
import { HiChevronDown, HiChevronRight } from 'react-icons/hi';
import qas from '../data/questions';

function initialState() {
  return qas.reduce((acc, qa, index) => {
    return { ...acc, [`question${index + 1}`]: qa.open };
  }, {});
}

export default function Faq() {
  // const [isOpen, setIsOpen] = useState({
  //   question1: true,
  //   question2: false,
  //   question3: false,
  // });
  const [isOpen, setIsOpen] = useState(initialState);

  const handleClick = (index) => {
    const key = `question${[index + 1]}`;
    setIsOpen({ ...isOpen, [key]: !isOpen[key] });
  };

  return (
    <>
      {qas.map((qa, i) => (
        <div key={i}>
          <h1>
            <button type="button" onClick={() => handleClick(i)}>
              {isOpen[`question${[i + 1]}`] ? (
                <HiChevronDown />
              ) : (
                <HiChevronRight />
              )}
            </button>
            {qa.question}
          </h1>
          {isOpen[`question${[i + 1]}`] && <p>{qa.answer}</p>}
        </div>
      ))}
    </>
  );
}
