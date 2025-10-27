import { Link } from "react-router-dom";
import PillButton from "../components/PillButton/PillButton";
import styles from "./FinalPage.module.css";

function FinalPage() {
  return (
    <div>
      <img  style={{ height: "160px", marginTop: "0px" }}
            src="/top-pattern.svg" alt=""/>
      <br />
      <img  style={{ height: "200px", marginTop: "30px" }}
            src="/how-many.svg" alt=""/>
      <br /> <br /> 
      <p className={ styles.paragraph }>Did you spot the AI before it spotted you?!</p>
      <br /> <br />
      <Link to="/vote/1">
        <PillButton func="RESTART"></PillButton>
      </Link>
      <br />
      <Link to="/">
        <PillButton func="HOME"></PillButton>
      </Link>
      <br />
      <img  style={{ height: "160px", marginBottom: "0px" }}
            src="/bottom-pattern.svg" alt=""/>
    </div>
  );
}

export default FinalPage;