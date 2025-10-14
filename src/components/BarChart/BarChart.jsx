import styles from "./BarChart.module.css"

function BarChart({ type, ai_vote, human_vote }) {
    const total_votes = ai_vote + human_vote;
    // avoid division by zero
    const ai_percentage = total_votes ? Math.round((ai_vote / total_votes) * 100) : 0;
    const human_percentage = total_votes ? Math.round((human_vote / total_votes) * 100) : 0;

    return(
        <div className = { styles.barChart } >
            <p>{ type ? "HUMANMADE" : "AI-GENERATED" }!!</p>
            <div className={ styles.twoColumns }>
                <div  className={ styles.leftColumn } 
                      style={{ backgroundColor: "#CBFFBB",
                               "--target-human-height": `${ human_percentage }%` }}
                >
                    <p>{ human_percentage }%</p>
                </div>
                <div  className={ styles.rightColumn }
                      style={{ backgroundColor: "#F19595",
                               "--target-ai-height": `${ ai_percentage }%` }}
                >
                    <p>{ ai_percentage }%</p>
                </div>
            </div>
            <p>WHAT OTHERS THINK</p>
        </div>
    );
}

export default BarChart;