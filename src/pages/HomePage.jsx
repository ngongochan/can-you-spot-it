import { Link } from "react-router-dom";
import PillButton from "../components/PillButton/PillButton";
import styles from "./HomePage.module.css";

function HomePage() {
  return (
    <div>
      <img  style={{ height: "160px", marginTop: "0px" }}
            src="/top-pattern.svg" alt=""/>
      <br />
      <img  style={{ height: "220px", marginTop: "40px" }}
            src="/real-or-ai.svg" alt=""/>
      <br /><br />
      <Link to="/CYSA">
        <PillButton style={{ width: "150px"}} func="CAN YOU SPOT AI"></PillButton>
      </Link>
      <br />
      <Link to="/">
        <PillButton func="DEBATE WALL"></PillButton>
      </Link>
      <br />
      <Link to="/">
        <PillButton func="THE AI NEWS"></PillButton>
      </Link>
      <br />
      <img  style={{ height: "160px", marginBottom: "0px" }}
            src="/bottom-pattern.svg" alt=""/>
    </div>
  );
}

export default HomePage;
