import { Link } from "react-router-dom";
import PillButton from "../components/PillButton/PillButton";

function HomePage() {
  return (
    <div>
      <img src="/cysi.png" alt=""/>
      <br /> <br /> <br /> <br />
      <Link to="/vote/1">
        <PillButton func="START" bgColor="#000" textColor="#fff"></PillButton>
      </Link>
    </div>
  );
}

export default HomePage;
