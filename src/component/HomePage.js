import "./HomePage.css";
import Button from "@mui/material-next/Button";
// import FadeInOut from "./FadeInOut";
import Type from "./Type";

const words = [
  "Welcome to the card matching game",
  "Please press the button to select your preference",
];

export default function HomePage() {
  return (
    <>
      <Type words={words} />
    </>
  );
}
