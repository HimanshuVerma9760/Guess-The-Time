import { useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("unknown entity");
  let player = "";
  function handleChange(name) {
    player = name;
  }
  function setName() {
    setPlayerName(player);
  }
  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input
          type="text"
          onChange={(event) => handleChange(event.target.value)}
        />
        <button onClick={setName}>Set Name</button>
      </p>
    </section>
  );
}
