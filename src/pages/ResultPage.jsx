import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import RoundButton from "../components/RoundButton/RoundButton.jsx";
import NavBar from "../components/NavBar/NavBar.jsx";
import Description from "../components/Description/Description.jsx";
import SmallCard from "../components/SmallCard/SmallCard.jsx";
import BarChart from "../components/BarChart/BarChart.jsx";
import styles from "./ResultPage.module.css";
import { MAX_ITEMS } from "../config";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ResultPage({ votes }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentID = parseInt(id);
  const nextID = currentID + 1;

  const [currentVote, setCurrentVote] = useState(null);

  // 🟢 Fetch the most recent data on load
  useEffect(() => {
    const fetchCurrentVote = async () => {
      const { data, error } = await supabase
        .from("votes")
        .select("*")
        .eq("id", currentID)
        .single();

      if (error) console.error("Failed to fetch vote:", error);
      else setCurrentVote(data);
    };

    fetchCurrentVote();

    const channel = supabase
      .channel("realtime-votes")
      .on(
        "postgres_changes",
        {
          event: "UPDATE",
          schema: "public",
          table: "votes",
        },
        (payload) => {
          if (payload.new.id === currentID) {
            console.log("Realtime update:", payload.new);
            setCurrentVote(payload.new);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [currentID]);

  const handleNext = () => {
    if (currentID <= MAX_ITEMS - 1) navigate(`/vote/${nextID}`);
    else navigate(`/final`);
  };

  if (!currentVote) return <p>Loading...</p>;

  return (
    <div>
      <NavBar />
      <div className={styles.results}>
        <SmallCard imageSrc={currentVote.src} />
        <BarChart
          type={currentVote.type}
          ai_vote={currentVote.ai_vote}
          human_vote={currentVote.human_vote}
        />
      </div>
      <Description desc={currentVote.description} />
      <RoundButton icon={faArrowRight} color="black" onClick={handleNext} />
    </div>
  );
}
