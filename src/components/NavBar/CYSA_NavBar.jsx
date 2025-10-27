import { useParams, useNavigate } from "react-router-dom";
import RoundButton from "../RoundButton/RoundButton.jsx";

import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";

function CYSA_NavBar() {
    const { id } = useParams();
    const navigate = useNavigate();
    const currentID = parseInt(id);
    const handleBack = () => {
        if (currentID > 1) navigate(`/vote/${currentID - 1}`)
        else navigate(`/CYSA`)
    };

    return(
    <div style={{ justifyContent: "space-between", width: "330px",
        display: "flex", margin: "0 auto", alignItems: "center", padding: "0"
    }}>
        <img src="/cysa.svg" alt="" style={{ height: "80px" }} onClick={() => navigate(`/`)}/>
        <div>
            <RoundButton  icon={faHouse} color="black" onClick={() => navigate(`/CYSA`)} bgColor="#A0D8F6"/>
            <RoundButton  icon={faArrowRotateLeft} color="black" onClick={ handleBack }/>
        </div>
    </div>
    );
}

export default CYSA_NavBar;