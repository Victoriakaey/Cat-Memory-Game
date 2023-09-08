/* 
    Author: Jiaqi Duan
    Created on: 09/02/2023
*/

import "./FadeInOutText.css";
import { useEffect, useState } from "react";

const fadeInterval = 2000;
const wordChangeInterval = fadeInterval * 2;

export default function FadeInOutText({ words }) {
  const [fadeProp, setFadeProp] = useState("fade-in");
  const [wordOrder, setWordOrder] = useState(0);

  useEffect(() => {
    const fadeTimeout = setInterval(() => {
      fadeProp === "fade-in" ? setFadeProp("fade-out") : setFadeProp("fade-in");
    }, fadeInterval);
    return () => clearInterval(fadeTimeout);
  }, [fadeProp]);

  useEffect(() => {
    const wordTimeout = setInterval(() => {
      setWordOrder((prevWordOrder) => (prevWordOrder + 1) % words.length);
    }, wordChangeInterval);

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
