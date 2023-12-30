import { useState } from "react";

let timer: NodeJS.Timeout;
const useTimer = () => {
  const [mileSeconds, setMileSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = () => {
    if (isRunning) return;
    setIsRunning(true);
    setMileSeconds(0);
    timer = setInterval(tick, 100);
  };

  const stopTimer = () => {
    clearInterval(timer);
    setIsRunning(false);
  };

  const resetTimer = () => {
    setMileSeconds(0);
    clearInterval(timer);
    setIsRunning(false);
  };

  const tick = () => {
    setMileSeconds((prev) => prev + 100);
  };
  const seconds = Math.floor(mileSeconds / 1000);
  const minutes = Math.floor(seconds / 60);
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  const remainingSeconds = seconds % 60;
  const formattedSeconds =
    remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
  const formattedTime = `${formattedMinutes}:${formattedSeconds}`;

  return {
    mileSeconds,
    seconds,
    startTimer,
    stopTimer,
    resetTimer,
    formattedTime,
  };
};

export default useTimer;
