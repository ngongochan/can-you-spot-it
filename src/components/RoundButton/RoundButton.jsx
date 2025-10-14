import styles from "./RoundButton.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function RoundButton({ icon, onClick }) {
    return(
        <button className = {styles.roundButton}
                onClick = {onClick}>
          <FontAwesomeIcon icon = {icon} />
        </button>
    );
}

export default RoundButton;