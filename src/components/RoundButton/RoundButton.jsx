import styles from "./RoundButton.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function RoundButton({ icon, onClick, bgColor = "lightgrey" }) {
    return(
        <button className = {styles.roundButton}
                onClick = {onClick}
                style={{ backgroundColor: bgColor }}>
          <FontAwesomeIcon icon = {icon} />
        </button>
    );
}

export default RoundButton;