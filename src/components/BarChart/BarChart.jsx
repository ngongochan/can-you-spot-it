import styles from "./BarChart.module.css"

function BarChart({ type, ai_vote, human_vote }) {
    const total_votes = ai_vote + human_vote;
    // avoid division by zero
    const ai_percentage = total_votes ? Math.round((ai_vote / total_votes) * 100) : 0;
    const human_percentage = total_votes ? Math.round((human_vote / total_votes) * 100) : 0;

    return(
        <div className = { styles.barChart } >
            <p style={{ color: type === false ? "#C50000" : "#00840F" }}
            >
                { type ? "HUMANMADE" : "AI-GENERATED" }!!</p>
            <div className={ styles.twoColumns }>
                <div  
                    className={ styles.leftColumn }
                    style={{
                        backgroundColor: "#CBFFBB",
                        "--target-human-height": `${ human_percentage }%`,
                        alignItems: human_percentage < 20 ? "flex-end" : "flex-start",
                    }}
                    >
                    <p
                        style={{
                        position: human_percentage < 20 ? "absolute" : "relative",
                        bottom: human_percentage < 20 ? "100%" : "auto",
                        marginBottom: human_percentage < 20 ? "5px" : "0",
                        transition: "all 0.3s ease",
                        }}
                    >
                        { human_percentage }%
                    </p>
                </div>
                <div  
                    className={ styles.rightColumn }
                    style={{
                        backgroundColor: "#F19595",
                        "--target-ai-height": `${ ai_percentage }%`,
                        alignItems: ai_percentage < 20 ? "flex-end" : "flex-start",
                    }}
                    >
                    <p
                        style={{
                        position: ai_percentage < 20 ? "absolute" : "relative",
                        bottom: ai_percentage < 20 ? "100%" : "auto",
                        marginBottom: ai_percentage < 20 ? "5px" : "0",
                        transition: "all 0.3s ease",
                        }}
                    >
                        { ai_percentage }%
                    </p>
                </div>
            </div>
            <p>WHAT OTHERS THINK</p>
        </div>
    );
}

export default BarChart;