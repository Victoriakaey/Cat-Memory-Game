import { BrowserRouter, Routes, Route, useHistory } from "react-router-dom";
import Game from "./component/Game";
import HomePage from "./component/HomePage";

export default function App() {
  // return <Game />;
  // return <HomePage />;
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />}>
          <Route path="preference" element={<Game />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
