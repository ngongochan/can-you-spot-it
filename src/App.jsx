import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import VotePage from "./pages/VotePage.jsx";
import ResultPage from "./pages/ResultPage.jsx";
import FinalPage from "./pages/FinalPage.jsx";
import RoundButton from "./components/RoundButton/RoundButton.jsx";
import PillButton from "./components/PillButton/PillButton.jsx";
import Card from "./components/Card/Card.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function App() {
  return (
    <div style={{ textAlign: "center", justifyContent: "center" }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/final" element={<FinalPage />} />
        <Route path="/vote/:id" element={<VotePage />} />
        <Route path="/result/:id" element={<ResultPage />} />
      </Routes>
    </div>
  );
}
