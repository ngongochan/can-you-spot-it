import { useParams, useNavigate } from "react-router-dom";
import PillButton from "../components/PillButton/PillButton.jsx";
import RoundButton from "../components/RoundButton/RoundButton.jsx";
import Card from "../components/Card/Card.jsx";
import NavBar from "../components/NavBar/NavBar.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function VotePage({ items }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleVote = (option) => {
    navigate(`/result/${id}`); // go to ResultPage after voting
  };

  return (
    <div style={{ textAlign: "center", justifyContent: "center" }}>
      <NavBar/>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* {items.map((item) => (
              <Card imageSrc={item.src} />
        ))} */}
        <Card imageSrc = { items[id].src } />
      </div>
    
      <PillButton func="AI-GENERATED" bgColor="#ff6666" textColor="black"
                  className="vote-buton ai" onClick={() => handleVote("AI-GENERATED")}/>
      <PillButton func="HUMANMADE" bgColor="#90EE90" textColor="black"
                  className="vote-buton ai" onClick={() => handleVote("HUMANMADE")}/>
      <br />
    </div>
  );
}
