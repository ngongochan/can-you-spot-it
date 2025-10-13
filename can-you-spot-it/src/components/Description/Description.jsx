import styles from "./Description.module.css"

function Description({ imageSrc, desc }) {
    return(
        <div className = {styles.desc}>
            <div className = {styles.descBox} >
                { desc }
            </div>
            <p>WHO/WHAT MADE THIS?</p>
        </div>
    );
}

export default Description;