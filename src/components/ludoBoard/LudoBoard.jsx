import { useState } from "react";
export default function LudoBoard() {
  let [Move, setMove] = useState({blue: 0, yellow: 0, green: 0, red: 0});
  return (
    <>
      <div>
        <p>Game Begins</p>
        <div className="board">
          <p>Blue moves = {move.blue}</p>
          <button>+1</button>
          <p>yellow moves = {move.yellow} </p>
          <button>+1</button>
          <p>Green moves = {move.green} </p>
          <button>+1</button>
          <p>Red moves = {move.red} </p>
          <button>+1</button>
        </div>
      </div>
    </>
  );
}
