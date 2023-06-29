import React, { useEffect, useState } from 'react';
import History from './History';

// This one allows the user to undo up to the last 5 actions
const App = () => {
  const [prevCounts, setPrevCounts] = useState([]);
  const [currentCount, setCurrentCount] = useState(0);
  const [button, setButton] = useState({
    undo: true,
    redo: true,
    count: false,
  });
  const [poppedItem, setPoppedItem] = useState([]);
  const [firstTime, setFirstTime] = useState({ click: true, undo: true });

  const { undo, redo, count } = button;

  useEffect(() => {
    const length = prevCounts.length;

    if (length === 0) {
      if (!firstTime.undo) {
        setButton({ ...button, undo: true, redo: false, count: false });
      } else {
        setButton({
          ...button,
          undo: true,
          count: false,
        });
      }
    }

    if (length >= 1 && length < 5) {
      if (!firstTime.undo) {
        setButton({ ...button, undo: false, redo: false, count: false });
      } else {
        setButton({ ...button, undo: false, count: false });
      }
    }

    if (length === 5) {
      setButton({ ...button, undo: false, redo: true, count: true });
    }
  }, [prevCounts]);

  // [{10, 0}, {100, 10}, {-100, 110}, {1, 10}, {10, 11}]

  const handleCount = (value) => {
    if (value.includes('+')) {
      const newConunt = currentCount + +value.slice(1);
      setCurrentCount(newConunt);
    }

    if (value.includes('-')) {
      const newConunt = currentCount - +value.slice(1);
      setCurrentCount(newConunt);
    }
  };

  const handleClick = (e) => {
    const { value } = e.target;

    if (firstTime.click) {
      setFirstTime({ ...firstTime, click: false });
    }

    if (prevCounts.length < 5) {
      setPrevCounts([
        ...prevCounts,
        {
          action: value,
          count: currentCount,
        },
      ]);
    }

    handleCount(value);
  };

  const handleUndo = () => {
    const newCount = prevCounts[prevCounts.length - 1].count;
    const copiedPrevCounts = [...prevCounts];
    setPoppedItem([
      ...poppedItem,
      copiedPrevCounts[copiedPrevCounts.length - 1],
    ]);
    copiedPrevCounts.pop();

    setCurrentCount(newCount);
    setPrevCounts(copiedPrevCounts);

    if (firstTime.undo) {
      setFirstTime({ ...firstTime, undo: false });
    }
  };

  const handleRedo = () => {
    const redoItem = poppedItem[poppedItem.length - 1];
    const value = redoItem.action;

    handleCount(value);

    const copiedPoppedItem = [...poppedItem];
    copiedPoppedItem.pop();
    setPoppedItem(copiedPoppedItem);

    if (prevCounts.length < 5) {
      setPrevCounts([
        ...prevCounts,
        {
          action: value,
          count: currentCount,
        },
      ]);
    }
  };

  return (
    <div>
      <div>Undoable counter</div>

      <div>
        <button type="button" value="Undo" disabled={undo} onClick={handleUndo}>
          Undo
        </button>
        <button type="button" value="Redo" disabled={redo} onClick={handleRedo}>
          Redo
        </button>
      </div>

      <div>
        <div>
          <button
            type="button"
            value="-100"
            disabled={count}
            onClick={handleClick}
          >
            -100
          </button>
          <button
            type="button"
            value="-10"
            disabled={count}
            onClick={handleClick}
          >
            -10
          </button>
          <button
            type="button"
            value="-1"
            disabled={count}
            onClick={handleClick}
          >
            -1
          </button>
        </div>
        <div>{currentCount}</div>
        <div>
          <button
            type="button"
            value="+1"
            disabled={count}
            onClick={handleClick}
          >
            +1
          </button>
          <button
            type="button"
            value="+10"
            disabled={count}
            onClick={handleClick}
          >
            +10
          </button>
          <button
            type="button"
            value="+100"
            disabled={count}
            onClick={handleClick}
          >
            +100
          </button>
        </div>
      </div>

      <History prevCounts={prevCounts} />
    </div>
  );
};

export default App;
