import React, { useState, useEffect, useRef } from 'react';

function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if(isRunning){ 
    intervalIdRef.current =
       setInterval(()=> {setElapsedTime(Date.now()-startTimeRef.current)},10);
  }
  else {

    clearInterval(intervalIdRef.current);

  }
    return ()=>{
        clearInterval(intervalIdRef.current);
    }

  }, [isRunning]);

   
  function startTime(){
    setIsRunning(true);
    startTimeRef.current = Date.now()-elapsedTime;
  }
  function stop(){
    setIsRunning(false);

  }
  function reset(){
    setIsRunning(false);
    startTimeRef.current=0;
    setElapsedTime(0);
  }
  function formatTime() {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milliseconds = Math.floor((elapsedTime % 1000) / 10);
  
    // Format numbers to always have two digits
    let formattedMinutes = minutes.toString().padStart(2, '0');
    let formattedSeconds = seconds.toString().padStart(2, '0');
    let formattedMilliseconds = milliseconds.toString().padStart(2, '0');
  
    return `${formattedMinutes}:${formattedSeconds}:${formattedMilliseconds}`;
  }
  
  
  return (
    <div className="watch">
        
           <span > <b>{formatTime()}</b></span>
           <br />
           <div className= "display" >
           <button className="start" onClick={startTime} > Start</button>
           <button className="stop"onClick={stop} > Stop</button>
           <button className="reset"onClick={reset} > Reset</button>
           </div>
    </div>
        );
      
}

export default Stopwatch;
 