export const ScoreBoard = ({ score, bestScore }: { score: number; bestScore: number }) => (
  <div className="scoreboard container row my-4 mx-auto justify-content-around">
    <div className="score col-4 p-2 rounded-pill bg-primary text-light">{score}</div>
    <div className="best-score col-4 p-2 rounded-pill bg-primary text-light">Best score: {bestScore}</div>
  </div>
);
