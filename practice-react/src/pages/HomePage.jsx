import { Link } from "react-router-dom";
import PillButton from "../components/PillButton/PillButton";

function HomePage() {
  return (
    <div>
      <img src="/cysi.png" alt=""/>
      <br />
      <Link to="/vote/1">
        <PillButton func="START"></PillButton>
      </Link>
    </div>
  );
}

export default HomePage;
