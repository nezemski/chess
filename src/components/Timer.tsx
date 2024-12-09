import { FC, useEffect, useRef, useState } from "react";
import { Player } from "../models/Player";
import { Colors } from "../models/Colors";

interface TimeProps {
  currentPlayer: Player | null;
  restart: () => void;
}

const Timer: FC<TimeProps> = ({ currentPlayer, restart }) => {
  const [blackTime, setBlackTime] = useState(300);
  const [whiteTime, setWhiteTime] = useState(300);
  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    startTimer();
  }, [currentPlayer]);

  function startTimer() {
    if (timer.current) {
      clearInterval(timer.current);
    }
    const callback =
      currentPlayer?.color === Colors.WHITE
        ? decrementWhiteTime
        : decrementBlackTime;
    timer.current = setInterval(callback, 1000);
  }

  function decrementBlackTime() {
    setBlackTime((prev) => prev - 1);
  }

  function decrementWhiteTime() {
    setWhiteTime((prev) => prev - 1);
  }

  const handleRestart = () => {
    setBlackTime(300);
    setWhiteTime(300);
    restart();
  };

  return (
    <div>
      <div>
        <button onClick={handleRestart}> Restart game</button>
      </div>
      <h2> Чёрные -{blackTime}</h2>
      <h2>Белые- {whiteTime}</h2>
    </div>
  );
};
export default Timer;
