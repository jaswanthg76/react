import React, { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  function formatDate() {
    const hr = time.getHours();
    const min = time.getMinutes();
    const sec = time.getSeconds();

    const formattedHr = hr < 10 ? `0${hr}` : hr;
    const formattedMin = min < 10 ? `0${min}` : min;
    const formattedSec = sec < 10 ? `0${sec}` : sec;

    return `${formattedHr}:${formattedMin}:${formattedSec}`;
  }

  return (
    <div className="digital-clock-container">
      <div className="clock">
        <span><b>{formatDate()}</b></span>
      </div>
    </div>
  );
}

export default Clock;
