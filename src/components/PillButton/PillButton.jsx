import styles from "./PillButton.module.css"

function PillButton({ func, onClick, borderColor = "black", bgColor = "black", textColor = "white" }) {
    return(
        <button className = {styles.pillButton}
                onClick={onClick}
                style = {{
                    backgroundColor: bgColor,
                    borderColor: borderColor,
                    color: textColor }}
        >   { func }
        </button>
    );
}

export default PillButton;