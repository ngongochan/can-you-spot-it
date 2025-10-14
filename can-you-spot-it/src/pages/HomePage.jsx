import { Link } from "react-router-dom";
import PillButton from "../components/PillButton/PillButton";

function HomePage() {
  return (
    <div>
      <img  style={{ height: "160px", marginTop: "200px" }}
            src="/cysi.svg" alt=""/>
      <br /> <br /> <br /> <br />
      <Link to="/vote/1">
        <PillButton func="START"></PillButton>
      </Link>
    </div>
  );
}

export default HomePage;
