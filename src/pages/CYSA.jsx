import { Link } from "react-router-dom";
import PillButton from "../components/PillButton/PillButton";
import styles from "./CYSA.module.css";

function CYSA() {
  return (
    <div>
      <img  style={{ height: "160px", marginTop: "0px" }}
            src="/top-pattern.svg" alt=""/>
      <br />
      <img  style={{ height: "160px", marginTop: "80px" }}
            src="/cysa.svg" alt=""/>
      <br />
      <p className={ styles.paragraph }>
        Think you can tell what’s real and what’s AI?
        <br />
        Take this challenge and put your instincts to the test!
      </p>
      <br />
      <Link to="/vote/1">
        <PillButton func="START"></PillButton>
      </Link>
      <br />
      <img  style={{ height: "160px", marginBottom: "0px" }}
            src="/bottom-pattern.svg" alt=""/>
    </div>
  );
}

export default CYSA;
