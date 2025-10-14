import styles from "./SmallCard.module.css"

function SmallCard({ imageSrc }) {
    return(
        <div className={ styles.card }>
            <img src={ imageSrc }/>
        </div>
    );
}

export default SmallCard;