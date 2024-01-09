import React, { useState } from 'react';
import Button from './Button';
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
      <h1 className="text-2xl font-bold m-2">Frequently asked questions</h1>
      {qas.map((qa, i) => (
        <div
          key={i}
          className="border border-neutral-500 rounded-md m-2 mr-20 p-5"
        >
          <h2 className="text-lg font-semibold flex justify-start content-center">
            <Button isOpen={isOpen} index={i} handleClick={handleClick} />
            {qa.question}
          </h2>
          {isOpen[`question${[i + 1]}`] && (
            <p className="text-base ml-8 text-emerald-400">{qa.answer}</p>
          )}
        </div>
      ))}
    </>
  );
}
