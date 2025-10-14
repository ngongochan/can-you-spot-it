import { Link } from "react-router-dom";
import PillButton from "../components/PillButton/PillButton";

function HomePage() {
  return (
    <div>
      <img  style={{ height: "160px", marginTop: "0px" }}
            src="/top-pattern.svg" alt=""/>
      <br />
      <img  style={{ height: "160px", marginTop: "80px" }}
            src="/cysi.svg" alt=""/>
      <br /> <br /> <br /> <br />
      <Link to="/vote/1">
        <PillButton func="START"></PillButton>
      </Link>
      <br />
      <img  style={{ height: "160px", marginBottom: "0px" }}
            src="/bottom-pattern.svg" alt=""/>
    </div>
  );
}

export default HomePage;
