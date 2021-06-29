export const ScoreBoard = ({ score, bestScore }: { score: number; bestScore: number }) => (
  <div className="scoreboard container row my-4 mx-auto justify-content-around">
    <div className="score col-md-4 col-sm-6 col-8 p-2 rounded-pill bg-primary text-light my-1 my-sm-0">
      Score: {score}
    </div>
    <div className="best-score col-sm-6 col-md-4 col-8 p-2 rounded-pill bg-primary text-light">
      Best score: {bestScore}
    </div>
  </div>
);
