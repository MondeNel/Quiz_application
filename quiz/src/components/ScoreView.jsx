import React from 'react';
import './ScoreView.css';

const ScoreView = ({ score, resetQuiz }) => {
    return (
        <div>
            <h2>Quiz Completed!</h2>
            <p>Your Score: {score}</p>
            <button onClick={resetQuiz}>Restart Quiz</button>
        </div>
    );
};

export default ScoreView;
