import { useParams, useNavigate } from "react-router-dom";

export default function ResultPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const nextID = Number(id) + 1;

  return (
    <div>
      <h2>Results for item #{id}</h2>
      <p>Option A: 60%</p>
      <p>Option B: 40%</p>

      <button onClick={() => navigate(`/vote/${nextID}`)}>
        Next Question →
      </button>
    </div>
  );
}
