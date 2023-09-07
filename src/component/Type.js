// https://blog.logrocket.com/3-ways-implement-typing-animation-react/
import { TypeAnimation } from "react-type-animation";

export default function Type({ words }) {
  return (
    <p>
      <TypeAnimation
        sequence={[
          "Welcome to the card matching game!",
          1000,
          "Please press the button to select your preference",
          1000,
        ]}
        speed={50}
        style={{ fontSize: "1em" }}
      />
    </p>
  );
}
