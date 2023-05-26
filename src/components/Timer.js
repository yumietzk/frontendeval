import React, { useEffect, useState } from 'react';

export default function Timer() {
  const [hours, setHours] = useState(''); // string
  const [minutes, setMinutes] = useState('');
  const [seconds, setSeconds] = useState('');
  const [isCounting, setIsCounting] = useState(false);
  const [isPausing, setIsPausing] = useState(false);

  useEffect(() => {
    let time = (+hours * 60 + +minutes) * 60 + +seconds;

    const timer = setInterval(() => {
      if (isCounting && time === 0) {
        Notification.requestPermission().then((result) => {
          if (result === 'granted') {
            console.log('Timer finished');
            const notification = new Notification('Timer finished');
          }

          if (result === 'denied') alert('Timer finished');
        });

        setIsCounting(false);
        setHours('');
        setMinutes('');
        setSeconds('');
        return;
      }

      if (isCounting) {
        time = time - 1;

        const newHours = Math.trunc(time / 60 / 60);
        const newMinutes = Math.trunc((time - 60 * newHours * 60) / 60);
        const newSeconds = time - 60 * newHours * 60 - newMinutes * 60;

        setHours(newHours.toString().padStart(2, '0'));
        setMinutes(newMinutes.toString().padStart(2, '0'));
        setSeconds(newSeconds.toString().padStart(2, '0'));
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isCounting]);

  const handleStart = () => {
    setIsCounting(true);

    if (!hours) setHours('00');
    if (!minutes) setMinutes('0');
    if (!seconds) setSeconds('00');

    setHours(hours.padStart(2, '0'));
    setMinutes(minutes.padStart(2, '0'));
    setSeconds(seconds.padStart(2, '0'));
  };

  const handlePause = () => {
    setIsCounting(false);
    setIsPausing(true);
  };

  const handleReset = () => {
    setIsCounting(false);
    setIsPausing(false);

    setHours('');
    setMinutes('');
    setSeconds('');
  };

  return (
    <>
      <h1>Countdown timer</h1>
      <form>
        <div>
          {isCounting || isPausing ? (
            hours
          ) : (
            <input
              id="hours"
              type="number"
              aria-label="Hours"
              value={hours}
              placeholder="HH"
              onChange={(e) => setHours(e.target.value)}
            />
          )}{' '}
          :{' '}
          {isCounting || isPausing ? (
            minutes
          ) : (
            <input
              id="minutes"
              type="number"
              aria-label="Minutes"
              value={minutes}
              placeholder="MM"
              onChange={(e) => setMinutes(e.target.value)}
            />
          )}{' '}
          :{' '}
          {isCounting || isPausing ? (
            seconds
          ) : (
            <input
              id="seconds"
              type="number"
              aria-label="Seconds"
              value={seconds}
              placeholder="SS"
              onChange={(e) => setSeconds(e.target.value)}
            />
          )}
        </div>

        {isCounting ? (
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
        )}
      </form>
    </>
  );
}
