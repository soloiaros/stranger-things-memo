export default function ScoreScreen ({ bestScore, currScore }) {
    return (
        <div className="score-container">
            <p>Best Score: {bestScore}</p>
            <p>Current Score: {currScore}</p>
        </div>
    )
}