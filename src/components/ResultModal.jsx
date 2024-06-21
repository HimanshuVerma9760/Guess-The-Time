export default function ResultModal({ result, time, leftTime }) {
  return (
    <dialog className="result-modal" open>
      <h2> You {result ? "Won" : "Lost"}</h2>
      <p>
        The target time was <strong>{time} seconds</strong>
      </p>
      <p>
        You Stopped the time with <strong>{leftTime} seconds left</strong>
      </p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
}
