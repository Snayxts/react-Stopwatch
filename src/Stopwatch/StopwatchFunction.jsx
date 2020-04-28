// sa jsx govorimo kao da je iskljucivo o react komponenti
import React, { useState, useRef, useEffect } from "react";

//ovo ima 48 linije koda a clasa ima 58, ova je takoder i laksa za citat jer nema this. ovo ono itd...

export function Stopwatch() {
  const [timer, setTimer] = useState(0);
  const [times, setTimes] = useState([]);
  const timerInterval = useRef();

  const onStart = () => {
    if (timerInterval.current) return;

    //ovo current znaci trenutacno stanje ovog useRef() ; ako je useRef() prazan onda je undefined, ako ima nesto definiran je, on je objekt

    timerInterval.current = setInterval(() => {
      setTimer((timer) => timer + 1); //ova dva timer(a) nisu isti
    }, 1);
  };

  let centiseconds = ("0" + (Math.floor(timer / 10) % 100)).slice(-2);
  let seconds = ("0" + (Math.floor(timer / 1000) % 60)).slice(-2);
  let minutes = ("0" + (Math.floor(timer / 60000) % 60)).slice(-2);
  let hours = ("0" + Math.floor(timer / 3600000)).slice(-2);

  const onStop = () => {
    if (timerInterval.current) {
      clearInterval(timerInterval.current);
      timerInterval.current = null;
    }
  };

  const onReset = () => {
    setTimer(0);
  };

  const onLap = () => {
    setTimes([...times, timer]);

    setTimer(0);
  };
  useEffect(() => {
    document.title = `${new Date(onLap)} `;
  });

  //Clear dio gotov
  const onClear = () => {
    setTimes([]);
  };

  return (
    <div>
      <div>
        {hours} {minutes} {seconds} {centiseconds}{" "}
      </div>

      <div>
        <button onClick={onStart}>START</button>
        <button onClick={onStop}>STOP</button>
        <button onClick={onLap}>LAP</button>
        <button onClick={onReset}>RESET</button>
        <button onClick={onClear}>CLEAR</button>
      </div>

      <div>
        {times.map((time, index) => (
          <div key={index}>{time}></div>
        ))}
      </div>
    </div>
  );
}
