import { useRef, useState } from "react";

export default function Player() {
  const player = useRef();

  const [playerName, setPlayerName] = useState("unknown entity");

  function setName() {
    setPlayerName(player.current.value);
  }
  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input ref={player} type="text" />
        <button onClick={setName}>Set Name</button>
      </p>
    </section>
  );
}
