import React from 'react';
import './ScoreView.css';

const ScoreView = ({ score, resetQuiz }) => {
    return (
        <div>
            <p>You scored {score} out of 13</p>
            <button onClick={resetQuiz}>Reset</button>
        </div>
    );
};

export default ScoreView;
