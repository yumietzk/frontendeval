import React, { useEffect, useState } from 'react';
import InputForm from './InputForm';
import Button from './Button';

export default function Timer() {
  const [time, setTime] = useState({
    hours: '',
    minutes: '',
    seconds: '',
  });
  const [isCounting, setIsCounting] = useState(false);
  const [isPausing, setIsPausing] = useState(false);

  const { hours, minutes, seconds } = time;

  const handleTime = (hours = '', minutes = '', seconds = '') => {
    setTime({ ...time, hours, minutes, seconds });
  };

  const paddedTime = (time) => {
    return time.padStart(2, '0');
  };

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

        handleTime();
        setIsCounting(false);

        return;
      }

      if (isCounting) {
        time = time - 1;

        const newHours = Math.trunc(time / 60 / 60);
        const newMinutes = Math.trunc((time - 60 * newHours * 60) / 60);
        const newSeconds = time - 60 * newHours * 60 - newMinutes * 60;

        const paddedHours = paddedTime(newHours.toString());
        const paddedMinutes = paddedTime(newMinutes.toString());
        const paddedSeconds = paddedTime(newSeconds.toString());

        handleTime(paddedHours, paddedMinutes, paddedSeconds);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isCounting]);

  const handleStart = () => {
    setIsCounting(true);

    if (!hours) setTime({ ...time, hours: '00' });
    if (!minutes) setTime({ ...time, minutes: '00' });
    if (!seconds) setTime({ ...time, seconds: '00' });

    const paddedHours = paddedTime(hours);
    const paddedMinutes = paddedTime(minutes);
    const paddedSeconds = paddedTime(seconds);

    handleTime(paddedHours, paddedMinutes, paddedSeconds);
  };

  const handlePause = () => {
    setIsCounting(false);
    setIsPausing(true);
  };

  const handleReset = () => {
    setIsCounting(false);
    setIsPausing(false);

    handleTime();
  };

  return (
    <>
      <h1>Countdown timer</h1>
      <form>
        <InputForm
          isCounting={isCounting}
          isPausing={isPausing}
          time={time}
          setTime={setTime}
        />
        <Button
          isCounting={isCounting}
          isPausing={isPausing}
          handleStart={handleStart}
          handlePause={handlePause}
          handleReset={handleReset}
        />
      </form>
    </>
  );
}
