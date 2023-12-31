/* 
    Author: Jiaqi Duan
    Created on: 09/02/2023
*/

import "./SingleCard.css";

export default function SingleCard({
  card,
  cover,
  handleChoice,
  flipped,
  disabled,
}) {
  function handleClick() {
    if (!disabled) {
      handleChoice(card);
    }
  }

  return (
    <div className="card" key={card.id}>
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="card-front" />
        <img
          className="back"
          src={cover}
          onClick={handleClick}
          alt="card-back"
        />
      </div>
    </div>
  );
}
