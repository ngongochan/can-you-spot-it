import styles from "./BarChart.module.css"

function BarChart({ imageSrc }) {
    return(
        <div className = { styles.barChart } >
            <p>AI-GENERATED!!</p>
            <div className = {styles.twoColumns}>
                <div className = { styles.oneColumn } style={{ backgroundColor: "#90EE90", height: "67%"}}>
                    <p>67%</p>
                </div>
                <div className = { styles.oneColumn } style={{ backgroundColor: "#ff6666", height: "33%"}}>
                    <p>33%</p>
                </div>
            </div>
            <p>WHAT OTHERS THINK</p>
        </div>
    );
}

export default BarChart;