import React, { useState } from 'react';
import * as MdIcons from 'react-icons/md';
import styles from './App.module.css';

const qas = [
  {
    question: 'How many bones does a cat have?',
    answer: 'A cat has 230 bones - 6 more than a human',
  },
  {
    question: 'How much do cats sleep?',
    answer: 'The average cat sleeps 12-16 hours per day',
  },
  {
    question: 'How long do cats live',
    answer:
      'Outdoor cats live 5 years on average. Indoor\ncats live 15 years on average.',
  },
];

const App = () => {
  const [isOpen, setIsOpen] = useState({
    question1: true,
    question2: false,
    question3: false,
  });

  const handleButton = (i) => {
    setIsOpen({
      ...isOpen,
      [`question${i + 1}`]: !isOpen[`question${i + 1}`],
    });
  };

  const renderQAs = () => {
    return qas.map((qa, i) => {
      return (
        <div className={styles.box}>
          <h2>
            <button onClick={() => handleButton(i)}>
              {isOpen[`question${i + 1}`] ? (
                <MdIcons.MdArrowDropDown />
              ) : (
                <MdIcons.MdArrowRight />
              )}
            </button>
            {qa.question}
          </h2>
          <p
            className={`${styles.answer} ${
              isOpen[`question${i + 1}`] && styles.open
            }`}
          >
            {qa.answer}
          </p>
        </div>
      );
    });
  };

  return (
    <React.Fragment>
      <h1>Frequently asked questions</h1>
      <div>{renderQAs()}</div>
    </React.Fragment>
  );
};

export default App;
