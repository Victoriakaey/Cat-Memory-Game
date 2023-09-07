// https://blog.logrocket.com/3-ways-implement-typing-animation-react/
import { TypeAnimation } from "react-type-animation";
import "./Type.css";

export default function Type({ words }) {
  // TODO change it so that it's not hard-coded
  // const
  return (
    <p className="type">
      <TypeAnimation
        sequence={[words[0], 1000, words[1], 1000]}
        speed={50}
        style={{ fontSize: "1em" }}
      />
    </p>
  );
}
