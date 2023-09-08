/* 
    Author: Jiaqi Duan
    Created on: 09/02/2023
*/

import { BrowserRouter, Routes, Route } from "react-router-dom";
import IntroPage from "./IntroPage";
import Game from "./Game";
import Preference from "./Preference";
import EndPage from "./EndPage";

export default function HomePage() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroPage />} />
        <Route path="/preference" element={<Preference />} />
        <Route path="/game" element={<Game />} />
        <Route path="/end" element={<EndPage />} />
      </Routes>
    </BrowserRouter>
  );
}
