import { Link } from "react-router-dom";
import PillButton from "../components/PillButton/PillButton";
import styles from "./CYSA.module.css";
import ROA_NavBar from "../components/NavBar/ROA_NavBar";

function DebateWall() {
  return (
    <div>
      <ROA_NavBar
      />
      {/* <img  style={{ height: "160px", marginTop: "0px" }}
            src="/top-pattern.svg" alt=""/> */}
      <br />
      <img  style={{ height: "160px", marginTop: "80px" }}
            src="/dw.svg" alt=""/>
      <br />
      <p className={ styles.paragraph }>
        Debate. Discuss. Discover.
        <br />
        What’s your stance on AI?
      </p>
      <p className={ styles.paragraph }>
        Drop your thoughts on the wall!
      </p>
      <br />
      <Link to="/">
        <PillButton func="JOIN" bgColor="#08609F" borderColor="#08609F"
        ></PillButton>
      </Link>
      <br />
      <img  style={{ height: "160px", marginBottom: "0px" }}
            src="/bottom-pattern.svg" alt=""/>
    </div>
  );
}

export default DebateWall;
