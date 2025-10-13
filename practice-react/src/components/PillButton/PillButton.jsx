import styles from "./PillButton.module.css"

function PillButton({ func, bgColor = "white", textColor = "black" }) {
    return(
        <button className = {styles.pillButton}
                style = {{
                    backgroundColor: bgColor,
                    color: textColor }}
        >   { func }
        </button>
    );
}

export default PillButton;