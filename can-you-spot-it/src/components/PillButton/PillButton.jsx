import styles from "./PillButton.module.css"

function PillButton({ func, onClick, bgColor = "black", textColor = "white" }) {
    return(
        <button className = {styles.pillButton}
                onClick={onClick}
                style = {{
                    backgroundColor: bgColor,
                    color: textColor }}
        >   { func }
        </button>
    );
}

export default PillButton;