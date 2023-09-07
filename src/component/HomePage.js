import { BrowserRouter, Routes, Route } from "react-router-dom";
import IntroPage from "./IntroPage";
import Game from "./Game";

export default function HomePage() {
  // const history = useHistory();
  return (
    // <IntroPage />
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IntroPage />}>
          <Route path="preference" element={<Game />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
