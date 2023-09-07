import "./IntroPage.css";
import Type from "./Type";

const words = [
  "Welcome to the card matching game",
  "Please press the button to select your preference",
];

export default function IntroPage() {
  return (
    <>
      <Type words={words} />
    </>
  );
}
