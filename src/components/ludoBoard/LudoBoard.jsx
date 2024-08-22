import { useState } from "react";
import "./LudoBoard.css";
export default function LudoBoard() {
  let [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });
  let [isLiked, setIsLiked] = useState(false);
   let [isHeart, setIsHeart] = useState(false);
    let [isEmoji, setIsEmoji] = useState(false);
     let [isPoo, setIsPoo] = useState(false);

  let updateBlue = () => {
    setMoves((previousValue) => {
      return { ...previousValue, blue: previousValue.blue + 1 };
    });
    setIsHeart(!isHeart);
  };

  let updateYellow = () => {
    setMoves((previousValue) => {
      return { ...previousValue, yellow: previousValue.yellow + 1 };
    });
    setIsLiked(!isLiked);
  };

  let updateGreen = () => {
    setMoves((previousValue) => {
      return { ...previousValue, green: previousValue.green + 1 };
    });
     setIsEmoji(!isEmoji);
  };

  let updateRed = () => {
    setMoves((previousValue) => {
      return { ...previousValue, red: previousValue.red + 1 };
    });
    setIsPoo(!isPoo);
  };

  let btn = {
    backgroundColor: "black",
  };
  return (
    <>
      <div id="game">
        <div className="board">
          <div id="blue"></div>
          <h3>
            {isHeart ? (
              <i class="fa-solid fa-heart" style={{ color: "red" }}></i>
            ) : (
              <i class="fa-regular fa-heart"></i>
            )}
            &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp; {moves.blue}
          </h3>
          <button onClick={updateBlue} class="btn">
            +1
          </button>
        </div>
        <div className="board">
          <div id="yellow"></div>
          <h3>
            {isLiked ? (
              <i class="fa-solid fa-thumbs-up" style={{ color: "blue" }}></i>
            ) : (
              <i class="fa-regular fa-thumbs-up"></i>
            )}
            &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;{moves.yellow}
          </h3>
          <button class="btn" onClick={updateYellow}>
            +1
          </button>
        </div>
        <div className="board">
          <div id="green"></div>
          <h3>
            {isEmoji ? (
              <i class="fa-solid fa-face-smile" style={{ color: "yellow" }}></i>
            ) : (
              <i class="fa-regular fa-face-smile"></i>
            )}
            &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp; {moves.green}{" "}
          </h3>
          <button onClick={updateGreen} class="btn">
            +1
          </button>
        </div>
        <div className="board">
          <div id="red"></div>
          <h3>
            {isPoo ? (
              <i class="fa-solid fa-poo" style={{color: "brown"}}></i>
            ) : (
              <i class="fa-solid fa-poo"></i>
            )}
            &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp; {moves.red}{" "}
          </h3>
          <button onClick={updateRed} class="btn">
            +1
          </button>
        </div>
      </div>
    </>
  );
}
