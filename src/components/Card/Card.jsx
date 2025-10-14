import styles from "./Card.module.css"

function Card({ imageSrc }) {
    return(
        <div className = {styles.card}>
            <img src = { imageSrc }/>
        </div>
    );
}

export default Card;