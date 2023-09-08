/* 
    Author: Jiaqi Duan
    Created on: 09/02/2023
*/

import "./IntroPage.css";
import Type from "./Type";

const words = [
  "Welcome to the card matching game",
  "Please press the button to select your preference",
];

export default function IntroPage() {
  return (
    <div className="intropage">
      <Type words={words} />
      <button
        className="intropage-button"
        onClick={() => (window.location = "/preference")}
      >
        Preference
      </button>
    </div>
  );
}
