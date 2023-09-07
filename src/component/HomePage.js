import { BrowserRouter, Routes, Route } from "react-router-dom";
import IntroPage from "./IntroPage";
import Game from "./Game";
import Preference from "./Preference";

export default function HomePage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/preference" element={<Preference />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </BrowserRouter>
  );
}
