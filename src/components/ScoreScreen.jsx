export default function ScoreScreen ({ bestScore, currScore }) {
    return (
        <div className="score-container">
            <h2>Best Score: {bestScore}</h2>
            <h2>Current Score: {currScore}</h2>
        </div>
    )
}