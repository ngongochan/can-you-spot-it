import { useParams, useNavigate } from "react-router-dom";

export default function VotePage() {
  const { ID } = useParams();
  const navigate = useNavigate();

  const handleVote = (option) => {
    // alert(`You voted ${option} for item ${ID}`);
    navigate(`/result/${ID}`); // Go to results page after voting
  };

  return (
    <div>
      <h2>Vote for item #{ID}</h2>
      <button onClick={() => handleVote("Option A")}>Option A</button>
      <button onClick={() => handleVote("Option B")}>Option B</button>
    </div>
  );
}
