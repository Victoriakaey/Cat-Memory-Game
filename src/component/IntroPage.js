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
