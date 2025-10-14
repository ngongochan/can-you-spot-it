import { useParams, useNavigate } from "react-router-dom";
import PillButton from "../components/PillButton/PillButton.jsx";
import RoundButton from "../components/RoundButton/RoundButton.jsx";
import Card from "../components/Card/Card.jsx";
import NavBar from "../components/NavBar/NavBar.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function VotePage({ votes }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentID = parseInt(id);
  // const nextID = Number(id) + 1;

  // var ai_vote = items[i].ai_vote;
  // var human_vote = items[i].human_vote;

  const handleVote = (option) => {
    // if (option === "AI-GENERATED") {
    //   ai_vote += 1;
    // } else {
    //   human_vote += 1;
    // }
    navigate(`/result/${currentID}`); // go to ResultPage after voting
  };

  return (
    <div style={{ textAlign: "center", justifyContent: "center" }}>
      <NavBar/>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {/* {items.map((item) => (
              <Card imageSrc={item.src} />
        ))} */}
        <Card imageSrc = { votes[currentID].src } />
      </div>
    
      <PillButton func="AI-GENERATED" bgColor="#F19595" textColor="black"
                  className="vote-buton ai" onClick={() => handleVote("AI-GENERATED")}/>
      <PillButton func="HUMANMADE" bgColor="#CBFFBB" textColor="black"
                  className="vote-buton ai" onClick={() => handleVote("HUMANMADE")}/>
      <br />
    </div>
  );
}
