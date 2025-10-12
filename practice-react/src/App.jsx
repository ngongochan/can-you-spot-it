import { Routes, Route, Link } from "react-router-dom";
import VotePage from "./VotePage";
import ResultPage from "./ResultPage";

export default function App() {
  return (
    <div style={{ fontFamily: "sans-serif", textAlign: "center" }}>
      <h1>Voting App Demo 🗳️</h1>
      <nav style={{ marginBottom: 20 }}>
        {/* <Link to="/vote/1">Vote 1</Link> */}
        {/* <button to="/vote/1">START</button> */}
        <button><Link to="/vote/1">START</Link></button>
      </nav>

      <Routes>
        <Route path="/vote/:id" element={<VotePage />} />
        <Route path="/result/:id" element={<ResultPage />} />
      </Routes>
    </div>
  );
}
