import styles from "./RoundButton.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function RoundButton({icon}) {
    return(
        <button className={styles.roundButton}>
          <FontAwesomeIcon icon={icon} />
        </button>
    );
}

export default RoundButton;