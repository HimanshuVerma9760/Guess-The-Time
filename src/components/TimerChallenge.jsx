import { useRef, useState } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const [game, setGame] = useState({
    timeStart: false,
    win: false,
    showResult: false,
  });

  const timer = useRef();
  function handleStart() {
    setGame({
      timeStart: true,
      showResult: false,
    });
    timer.current = setTimeout(() => {
      setGame({
        timeStart: false,
        showResult: true,
        win: false,
      });
    }, targetTime * 1000);
  }
  const leftTime = useRef();
  function handleStop() {
    leftTime.current = timer.current / 1000;
    clearTimeout(timer.current);
    setGame({
      win: true,
      showResult: true,
    });
  }
  return (
    <>
      {game.showResult ? (
        <ResultModal
          result={game.win}
          time={targetTime}
          leftTime={targetTime - leftTime.current}
        />
      ) : (
        ""
      )}
      <section className="challenge">
        <h2>{title}</h2>
        <p>
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={game.timeStart ? handleStop : handleStart}>
            {game.timeStart ? "Stop Timer" : "Start Timer"}
          </button>
        </p>
        <p className="">
          {game.timeStart ? "Timer is running..." : "Timer not Running"}
        </p>
      </section>
    </>
  );
}
