import styles from "./BarChart.module.css"

function BarChart({ type, ai_vote, human_vote }) {
    return(
        <div className = { styles.barChart } >
            <p>{ type }!!</p>
            <div className={ styles.twoColumns }>
                <div className={ styles.oneColumn } style={{ backgroundColor: "#CBFFBB", height: "67%"}}>
                    <p>67%</p>
                </div>
                <div className={ styles.oneColumn } style={{ backgroundColor: "#F19595", height: "33%"}}>
                    <p>33%</p>
                </div>
            </div>
            <p>WHAT OTHERS THINK</p>
        </div>
    );
}

export default BarChart;