import Type from "./Type";
import "./EndPage.css";

const win_words = [
  "Congratulations! You win!!",
  "Click the button to play again.",
];

const lost_words = ["You lost!", "Click the button to try again."];

export default function EndPage() {
  const timer = localStorage.getItem("timer");
  const win = localStorage.getItem("win");

  return (
    <div className="end">
      {win ? <Type words={win_words} /> : <Type words={lost_words} />}
      <button className="end-button" onClick={() => (window.location = "/")}>
        {win ? "Play Again" : "Try Again"}
      </button>
    </div>
  );
}
