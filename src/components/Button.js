import React from 'react';

export default function Button({
  isCounting,
  isPausing,
  handleStart,
  handlePause,
  handleReset,
}) {
  return isCounting ? (
    <>
      <button type="button" onClick={handlePause}>
        Pause
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </>
  ) : !isCounting && isPausing ? (
    <>
      <button type="button" onClick={handleStart}>
        Start
      </button>
      <button type="button" onClick={handleReset}>
        Reset
      </button>
    </>
  ) : (
    <button type="button" onClick={handleStart}>
      Start
    </button>
  );
}
