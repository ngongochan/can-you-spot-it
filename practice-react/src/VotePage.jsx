import { useParams, useNavigate } from "react-router-dom";

export default function VotePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleVote = (option) => {
    // alert(`You voted ${option} for item ${ID}`);
    navigate(`/result/${id}`); // Go to results page after voting
  };

  return (
    <div>
      <h2>Vote for item #{id}</h2>
      <button className="vote-buton ai" onClick={() => handleVote("AI-GENERATED")}>AI-GENERATED</button>
      <button className="vote-buton human" onClick={() => handleVote("HUMANMADE")}>HUMANMADE</button>
    </div>
  );
}
