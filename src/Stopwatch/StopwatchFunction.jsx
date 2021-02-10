import React, { useState, useRef } from "react";
import "./App.css";
import DisplayingTimes from "./Stopwatch";

export function Stopwatch() {
  const [time, setTime] = useState(0);
  const [lap, setLap] = useState([]);
  const [lapboolean, setLapboolean] = useState(false);
  const timerInterval = useRef();

  const startTimer = () => {
    if (timerInterval.current) return;

    timerInterval.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1);

    setLapboolean(true);
  };

  const stopTimer = () => {
    if (timerInterval.current) {
      clearInterval(timerInterval.current);
      timerInterval.current = null;
    }

    setLapboolean(false);
  };

  const resetTimer = () => {
    setTime(0);
  };

  const lapTime = () => {
    if (!time) return;

    setLap([...lap, time]);
    setTime(0);
  };

  const clearLapTime = () => {
    if (lap.length > 1) {
      setLap([...lap.slice(-1, 0)]);
    } else if (lap.length === 1) {
      setLap([...lap.slice(-1, 0)]);
    }
  };

  return (
    <div className="App">
      <p>STOPWATCH</p>

      {/* Displating buttons */}
      <div>
        {lapboolean ? (
          <button onClick={stopTimer} className="buttons">
            Stop
          </button>
        ) : (
          <button onClick={startTimer} className="buttons">
            Start
          </button>
        )}

        <button onClick={resetTimer} className="buttons">
          Reset
        </button>

        <button onClick={lapTime} className="buttons">
          Lap
        </button>

        <button onClick={clearLapTime} className="buttons">
          Clear Laps
        </button>
      </div>

      {/*Displaying stopwatch timer  */}
      <div>{DisplayingTimes.displayAll(time)}</div>

      {/*Displaying laps  */}
      <div>
        <div>LAPS</div>
        {lap
          .map((i, index) => (
            <div key={index} className="Laps">
              <p className="time">{DisplayingTimes.displayAll(i)}</p>
            </div>
          ))
          .sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
          .reverse()}
      </div>
      {/* <App2 /> */}
    </div>
  );
}
