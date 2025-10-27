import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient.js";
import PillButton from "../components/PillButton/PillButton.jsx";
import Card from "../components/Card/Card.jsx";
import CYSA_NavBar from "../components/NavBar/CYSA_NavBar.jsx";

export default function VotePage({ votes }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentID = parseInt(id);

  const handleVote = async (option) => {
    const currentVote = votes[currentID];
    const columnToUpdate = option === "AI-GENERATED" ? "ai_vote" : "human_vote";

    const { error } = await supabase
      .from("votes")
      .update({ [columnToUpdate]: currentVote[columnToUpdate] + 1 })
      .eq("id", currentVote.id);

    if (error) {
      console.error("Vote update failed:", error);
    } else {
      navigate(`/result/${currentID}`); // go to ResultPage
    }
  };

  return (
    <div style={{ textAlign: "center", justifyContent: "center" }}>
      <CYSA_NavBar />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card imageSrc={votes[currentID].src} />
      </div>

      <PillButton
        func="AI-GENERATED"
        bgColor="#F19595"
        textColor="black"
        onClick={() => handleVote("AI-GENERATED")}
      />
      <PillButton
        func="HUMANMADE"
        bgColor="#CBFFBB"
        textColor="black"
        onClick={() => handleVote("HUMANMADE")}
      />
      <br />
      <img src="/bottom-pattern.svg" alt="" />
    </div>
  );
}
