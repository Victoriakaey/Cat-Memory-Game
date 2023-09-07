import "./Game.css";
import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import Timer from "./Timer";
import cover from "../image/cover.png";
import kitty from "../image/kitty.jpg";
import kitty_2 from "../image/kitty-2.jpg";
import bangbang from "../image/bangbang.png";
import bangbang_2 from "../image/bangbang-2.jpg";
import normie from "../image/normie.png";
import normie_2 from "../image/normie-2.jpg";

const cardImages = [
  { src: kitty, matched: false },
  { src: kitty_2, matched: false },
  { src: bangbang, matched: false },
  { src: bangbang_2, matched: false },
  { src: normie, matched: false },
  { src: normie_2, matched: false },
];

function Game() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [startTime, setStartTime] = useState(new Date());
  const [difficulty, setDifficulty] = useState("");

  function shuffleCards() {
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
    return matched / 2;
  }

  function handleDifficultyChange(e) {
    setDifficulty(e.target.value);
    shuffleCards();
  }

  return (
    <div className="Game">
      <h1> Cat Memory Game </h1>
      <button onClick={shuffleCards}> New Game </button>
      <select value={difficulty} onChange={handleDifficultyChange}>
        <option value=""> </option>
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advance">Advance</option>
      </select>
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
      <Timer
        startTime={startTime}
        match={getMatched()}
        difficulty={difficulty}
      />
      <p>
        {" "}
        Turns: {turns} && Match: {getMatched()}
      </p>
    </div>
  );
}

export default Game;
