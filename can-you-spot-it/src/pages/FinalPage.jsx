import { Link } from "react-router-dom";
import PillButton from "../components/PillButton/PillButton";

function FinalPage() {
  return (
    <div>
      <img  style={{ height: "200px", marginTop: "200px" }}
            src="/cysi.png" alt=""/>
      <br /> <br /> <br /> <br />
      <Link to="/vote/1">
        <PillButton func="RESTART"></PillButton>
      </Link>
      <br />
      <Link to="/">
        <PillButton func="HOME"></PillButton>
      </Link>
    </div>
  );
}

export default FinalPage;