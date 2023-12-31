/* 
    Author: Jiaqi Duan
    Created on: 09/02/2023
*/

import "./Game.css";
import { IoIosArrowDropleftCircle } from "react-icons/io";
import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import Timer from "./Timer";
import cover from "../image/cover.png";
import kitty from "../image/kitty.jpg";
import kitty_2 from "../image/kitty-2.jpg";
import kitty_3 from "../image/kitty-3.jpg";
import bangbang from "../image/bangbang.png";
import bangbang_2 from "../image/bangbang-2.jpg";
import normie from "../image/normie.png";
import normie_2 from "../image/normie-2.jpg";
import normie_3 from "../image/normie-3.jpeg";

const cardImages_1 = [
  { src: kitty, matched: false },
  { src: bangbang, matched: false },
  { src: normie, matched: false },
  { src: kitty_2, matched: false },
];

const cardImages_2 = [
  { src: kitty, matched: false },
  { src: kitty_2, matched: false },
  { src: bangbang, matched: false },
  { src: bangbang_2, matched: false },
  { src: normie, matched: false },
  { src: normie_2, matched: false },
];

const cardImages_3 = [
  { src: kitty, matched: false },
  { src: kitty_2, matched: false },
  { src: bangbang, matched: false },
  { src: bangbang_2, matched: false },
  { src: normie, matched: false },
  { src: normie_2, matched: false },
  { src: normie_3, matched: false },
  { src: kitty_3, matched: false },
];

function Game() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [startTime, setStartTime] = useState(new Date());
  const timer = localStorage.getItem("timer");
  const size = localStorage.getItem("size");
  let cardSize = 12;
  if (size) {
    cardSize = parseInt(size);
  }

  function shuffleCards() {
    let cardImages = [...cardImages_1];
    if (cardSize === 8) {
      cardImages = [...cardImages_1];
    } else if (cardSize === 12) {
      cardImages = [...cardImages_2];
    } else {
      cardImages = [...cardImages_3];
    }
    // Math.random() will return a random number from 0 to 1
    // When it's a negative number, the items will remain the same order
    // When it's a positive number, the items will get switch the order around
    const shuffleCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffleCards);
    setTurns(0);
    setStartTime(new Date());
  }

  // reset the choices back to null
  // add one to the current turn value
  function resetTurn() {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns(turns + 1);
    setDisabled(false);
  }

  // compare the 2 selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards(
          cards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          })
        );
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }
  }, [choiceOne, choiceTwo]);

  function handleChoice(card) {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  }

  // start a new game automatically
  useEffect(() => {
    shuffleCards();
  }, []);

  function getMatched() {
    let matched = 0;
    cards.map((card) => {
      if (card.matched) {
        matched += 1;
      }
    });
    if (matched == cardSize) {
      localStorage.setItem("win", true);
    } else {
      localStorage.setItem("win", false);
    }
    return matched / 2;
  }

  function handleEnd() {
    if (getMatched() == cardSize / 2 || (timer == "00:00:00" && turns != 0)) {
      window.location = "/end";
    }
  }

  return (
    <div className="Game">
      <h1> Cat Memory Game </h1>
      <button onClick={shuffleCards} className="game-button">
        New Game
      </button>
      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard
            key={card.id}
            card={card}
            cover={cover}
            handleChoice={handleChoice}
            flipped={card === choiceOne || card === choiceTwo || card.matched}
            disabled={disabled}
          />
        ))}
      </div>
      <Timer startTime={startTime} match={getMatched()} />
      <p>
        {" "}
        Turns: {turns} && Match: {getMatched()}
      </p>
      {handleEnd()}
      <button
        className="fixed-button"
        onClick={() => (window.location = "/preference")}
      >
        <IoIosArrowDropleftCircle />
      </button>
    </div>
  );
}

export default Game;
