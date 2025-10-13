import { Routes, Route, Link } from "react-router-dom";
import VotePage from "./VotePage";
import ResultPage from "./ResultPage";
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
      <div style={{ justifyContent: "center", display: "flex" }}>
        <p>Can you spot it?</p>
        <RoundButton icon={faHouse}/>
        <RoundButton icon={faArrowRotateLeft}/>
      </div>      
      {/* <PillButton func="START"><Link to="/vote/1"/></PillButton> */}

      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card/>
      </div>
      
      <PillButton func="AI-GENERATED" bgColor="#FFCCCC"/>
      <PillButton func="HUMANMADE" bgColor="#90EE90"/>
      <br />
      {/* <RoundButton icon={faArrowRight}/> */}

      <Routes>
        <Route path="/vote/:id" element={<VotePage />} />
        <Route path="/result/:id" element={<ResultPage />} />
      </Routes>
    </div>
  );
}
