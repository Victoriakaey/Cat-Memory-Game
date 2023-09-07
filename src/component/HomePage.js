// https://blog.logrocket.com/3-ways-implement-typing-animation-react/
// import { TypeAnimation } from "react-type-animation";
import "./HomePage.css";
import { useEffect, useState } from "react";

const WORDS_TO_ANIMATE = [
  "Welcome to the card matching game",
  "Please press the button to select your preference",
];
const FADE_INTERVAL_MS = 2000;
const WORD_CHANGE_INTERVAL_MS = FADE_INTERVAL_MS * 2;

export default function HomePage() {
  const [fadeProp, setFadeProp] = useState("fade-in");
  const [wordOrder, setWordOrder] = useState(0);

  useEffect(() => {
    const fadeTimeout = setInterval(() => {
      fadeProp === "fade-in" ? setFadeProp("fade-out") : setFadeProp("fade-in");
    }, FADE_INTERVAL_MS);
    console.log(fadeProp);
    return () => clearInterval(fadeTimeout);
  }, [fadeProp]);

  useEffect(() => {
    const wordTimeout = setInterval(() => {
      setWordOrder(
        (prevWordOrder) => (prevWordOrder + 1) % WORDS_TO_ANIMATE.length
      );
    }, WORD_CHANGE_INTERVAL_MS);

    return () => clearInterval(wordTimeout);
  }, []);

  return (
    <div className="center">
      {/* <TypeAnimation
        sequence={[
          "Welcome to the card matching game!",
          1000,
          "Please press the button to select your preference",
          1000,
        ]}
        speed={50}
        repeat={Infinity}
        style={{ fontSize: "3em" }}
      /> */}
      <h2 className={fadeProp}> {WORDS_TO_ANIMATE[wordOrder]} </h2>
    </div>
  );
}
