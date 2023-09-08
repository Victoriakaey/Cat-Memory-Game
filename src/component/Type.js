/* 
    Author: Jiaqi Duan
    Created on: 09/02/2023
*/

// Reference link: https://blog.logrocket.com/3-ways-implement-typing-animation-react/
import { TypeAnimation } from "react-type-animation";
import "./Type.css";

export default function Type({ words }) {
  const word_interval = 1000;

  function handleSequence() {
    let sequence = [];
    words.map((word) => {
      sequence.push(word);
      sequence.push(word_interval);
    });
    return sequence;
  }

  return (
    <p className="type">
      <TypeAnimation
        sequence={handleSequence()}
        speed={50}
        style={{ fontSize: "1em" }}
      />
    </p>
  );
}
