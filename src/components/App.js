import React, { useState } from 'react';
import CardBoard from './CardBoard';

const App = () => {
  const [isComplete, setIsComplete] = useState(false);

  return (
    <div className="p-3">
      <div>Memory Game</div>
      {isComplete ? (
        <button type="button" onClick={() => setIsComplete(false)}>
          Play again
        </button>
      ) : (
        <CardBoard />
      )}
    </div>
  );
};

export default App;
