import "./Preference.css";
import FadeInAnimation from "./FadeInAnimation";
import Slider from "@mui/material-next/Slider";

export default function Preference() {
  return (
    <div className="preference">
      <FadeInAnimation
        className="preference-h1"
        wrapperElement="h1"
        distance={800}
        delay={1}
      >
        Preference
      </FadeInAnimation>

      <FadeInAnimation
        className="preference-p"
        wrapperElement="p"
        direction="left"
        distance={200}
        delay={2}
      >
        Card Size:
        <Slider
          className="preference-slider"
          disabled={false}
          marks
          max={24}
          min={6}
          step={6}
          size="large"
          valueLabelDisplay="on"
        />
      </FadeInAnimation>

      <FadeInAnimation
        className="preference-p"
        wrapperElement="p"
        direction="right"
        distance={200}
        delay={3}
      >
        Time Limits:
        <Slider
          className="preference-slider"
          disabled={false}
          marks
          max={1.5}
          min={0.5}
          step={0.5}
          size="large"
          valueLabelDisplay="on"
        />
      </FadeInAnimation>

      <FadeInAnimation
        className="preference-p"
        wrapperElement="p"
        distance={200}
        delay={4}
      >
        <button
          className="preference-button"
          onClick={() => (window.location = "/game")}
        >
          {" "}
          Start Game{" "}
        </button>
      </FadeInAnimation>
    </div>
  );
}
