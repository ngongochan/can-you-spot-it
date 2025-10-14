import { useParams, useNavigate } from "react-router-dom";
import PillButton from "../components/PillButton/PillButton.jsx";
import RoundButton from "../components/RoundButton/RoundButton.jsx";
import Card from "../components/Card/Card.jsx";
import NavBar from "../components/NavBar/NavBar.jsx";
import Description from "../components/Description/Description.jsx";
import SmallCard from "../components/SmallCard/SmallCard.jsx";
import BarChart from "../components/BarChart/BarChart.jsx";
import styles from "./ResultPage.module.css"

import { MAX_ITEMS } from "../config";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function ResultPage({ items }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentID = parseInt(id);
  const nextID = Number(id) + 1;

  const handleNext = () => {
    if (currentID <= MAX_ITEMS - 1) {
      navigate(`/vote/${currentID + 1}`);
    } else {
      navigate(`/final`);
    }
  };

  return (
    <div>
      <NavBar/>
      <div className={ styles.results }>
        <SmallCard imageSrc={ items[id].src }/>
        <BarChart type={ items[id].type }/>
      </div>
      <Description desc={ items[id].description }/>
      <RoundButton  icon={faArrowRight} color="black" onClick={ handleNext }/>
    </div>
  );
}