import "./FadeInOut.css";
import { useEffect, useState } from "react";

const FADE_INTERVAL_MS = 2000;
const WORD_CHANGE_INTERVAL_MS = FADE_INTERVAL_MS * 2;

export default function FadeInOut({ words }) {
  const [fadeProp, setFadeProp] = useState("fade-in");
  const [wordOrder, setWordOrder] = useState(0);

  useEffect(() => {
    const fadeTimeout = setInterval(() => {
      fadeProp === "fade-in" ? setFadeProp("fade-out") : setFadeProp("fade-in");
    }, FADE_INTERVAL_MS);
    return () => clearInterval(fadeTimeout);
  }, [fadeProp]);

  useEffect(() => {
    const wordTimeout = setInterval(() => {
      setWordOrder((prevWordOrder) => (prevWordOrder + 1) % words.length);
    }, WORD_CHANGE_INTERVAL_MS);

    return () => clearInterval(wordTimeout);
  }, []);

  return (
    <>
      <div className="center">
        <p className={fadeProp}> {words[wordOrder]} </p>
      </div>
    </>
  );
}
