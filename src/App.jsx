import { Routes, Route, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient.js";

import HomePage from "./pages/HomePage.jsx";
import CYSA from "./pages/CYSA.jsx";
import VotePage from "./pages/VotePage.jsx";
import ResultPage from "./pages/ResultPage.jsx";
import FinalPage from "./pages/FinalPage.jsx";

export default function App() {
  const [votes, setVotes] = useState([]);

  useEffect(() => {
    getVotes();
  }, []);

  async function getVotes() {
    const { data, error } = await supabase
    .from("votes")
    .select()
    .order('id', { ascending: true });
    
    if(error) {
      console.error(error);
    } else {
      console.log(data);
      setVotes(data);
    }
  }

  return (
    <div style={{ textAlign: "center", justifyContent: "center" }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/CYSA" element={<CYSA />} />
        <Route path="/final" element={<FinalPage />} />
        <Route path="/vote/:id" element={<VotePage votes={ votes }/>} />
        <Route path="/result/:id" element={<ResultPage votes={ votes } />} />
      </Routes>
    </div>
  );
}