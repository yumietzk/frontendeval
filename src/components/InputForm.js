import React from 'react';

export default function InputForm({ isCounting, isPausing, time, setTime }) {
  const { hours, minutes, seconds } = time;

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setTime({ ...time, [key]: value });
  };

  return (
    <div>
      {isCounting || isPausing ? (
        hours
      ) : (
        <input
          id="hours"
          type="number"
          name="hours"
          aria-label="Hours"
          value={hours}
          placeholder="HH"
          onChange={handleChange}
        />
      )}{' '}
      :{' '}
      {isCounting || isPausing ? (
        minutes
      ) : (
        <input
          id="minutes"
          type="number"
          name="minutes"
          aria-label="Minutes"
          value={minutes}
          placeholder="MM"
          onChange={handleChange}
        />
      )}{' '}
      :{' '}
      {isCounting || isPausing ? (
        seconds
      ) : (
        <input
          id="seconds"
          type="number"
          name="seconds"
          aria-label="Seconds"
          value={seconds}
          placeholder="SS"
          onChange={handleChange}
        />
      )}
    </div>
  );
}
