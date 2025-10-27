import { Link } from "react-router-dom";
import PillButton from "../components/PillButton/PillButton";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div>
      <img  style={{ height: "160px", marginTop: "0px" }}
            src="/blue_top.svg" alt=""/>
      <br />
      <img  style={{ height: "220px", marginTop: "30px" }}
            src="/real-or-ai.svg" alt=""/>
      <br /><br /><br /><br />
      <Link to="/CYSA">
        <PillButton style={{ width: "150px"}} func="CAN YOU SPOT AI" bgColor="#08609F" borderColor="#08609F" ></PillButton>
      </Link>
      <br />
      <Link to="/DebateWall">
        <PillButton func="DEBATE WALL"></PillButton>
      </Link>
      <br />
      <Link to="/TheAINews">
        <PillButton func="THE AI NEWS"></PillButton>
      </Link>
      <br />
      <img  style={{ height: "160px", marginBottom: "0px" }}
            src="/blue_bottom.svg" alt=""/>
    </div>
  );
}

export default HomePage;
