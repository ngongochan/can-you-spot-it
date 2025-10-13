import { useParams, useNavigate } from "react-router-dom";
import PillButton from "../PillButton/PillButton.jsx";
import RoundButton from "../RoundButton/RoundButton.jsx";
import Card from "../Card/Card.jsx";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
    const { id } = useParams();
    const navigate = useNavigate();

    return(
    <div style={{ justifyContent: "space-between", width: "330px",
        display: "flex", margin: "0 auto", alignItems: "center"
    }}>
        <img src="/cysi.png" alt="" style={{ height: "80px" }}/>
        <div>
            <RoundButton  icon={faHouse} onClick={() => navigate(`/`)}/>
            <RoundButton  icon={faArrowRotateLeft} onClick={() => navigate(`/vote/${id - 1}`)}/>
        </div>
    </div>
    );
}

export default NavBar;