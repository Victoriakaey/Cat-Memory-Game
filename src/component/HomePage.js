import { BrowserRouter, Routes, Route, useHistory } from "react-router-dom";
import IntroPage from "./IntroPage";
import Game from "./component/Game";

export default function HomePage() {
  const history = useHistory();
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
