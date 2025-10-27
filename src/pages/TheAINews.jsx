import { Link } from "react-router-dom";
import PillButton from "../components/PillButton/PillButton";
import styles from "./CYSA.module.css";
import ROA_NavBar from "../components/NavBar/ROA_NavBar";

function TheAINews() {
  return (
    <div>
      <ROA_NavBar
      />
      {/* <img  style={{ height: "160px", marginTop: "0px" }}
            src="/top-pattern.svg" alt=""/> */}
      <br />
      <img  style={{ height: "160px", marginTop: "80px" }}
            src="/tan.svg" alt=""/>
      <br /><br />
      <p className={ styles.paragraph }>
        Stay sharp on all things AI!
      </p>
      <p className={ styles.paragraph }>
        Be informed about ethics, detection, innovation, <br />
        and the latest developments in artificial intelligence.      
      </p>
      <br />
      <Link to="/">
        <PillButton func="EXPLORE" bgColor="#08609F" borderColor="#08609F"
        ></PillButton>
      </Link>
      <br />
      <img  style={{ height: "160px", marginBottom: "0px" }}
            src="/bottom-pattern.svg" alt=""/>
    </div>
  );
}

export default TheAINews;
