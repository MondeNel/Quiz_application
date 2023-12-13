import React, { useState, useEffect } from 'react';
import './QuizView.css';

const QuizView = ({ question, updateScore, onNextQuestion, currentQuestionIndex, questions }) => {
    const [countdown, setCountdown] = useState(30);
    const [gameOver, setGameOver] = useState(false);

    useEffect(() => {
        const countdownTimer = setInterval(() => {
            if (countdown === 0) {
                clearInterval(countdownTimer);
                handleTimeout();
            } else {
                setCountdown((prevCountdown) => prevCountdown - 1);
            }
        }, 1000);

        return () => clearInterval(countdownTimer);
    }, [countdown]);

    const handleTimeout = () => {
        setGameOver(true);
    };

    const handleAnswer = (selectedAnswer) => {
        const isCorrect = selectedAnswer === question.answers.find(ans => ans.isCorrect)?.text;
        updateScore(isCorrect);

        if (currentQuestionIndex + 1 === questions.length) {
            // If it's the last question, end the game
            setGameOver(true);
        } else {
            // Move to the next question
            onNextQuestion();
        }
    };

    const handleResetGame = () => {
        setCountdown(30);
        setGameOver(false);
        onNextQuestion();
    };

    return (
        <div className="question">
            {gameOver ? (
                <div>
                    <p>Game Over! Your final score is: {updateScore}</p>
                    <button onClick={handleResetGame}>Restart Game</button>
                </div>
            ) : (
                <div>
                    <div className="question_number">
                        Question {currentQuestionIndex + 1} of {questions.length}
                    </div>
                    <div className="question_text">
                        {question.question}
                    </div>
                    <div className="answer">
                        {/* Render answer options dynamically */}
                        {question.answers.map((answer, index) => (
                            <button key={index} onClick={() => handleAnswer(answer.text)}>
                                {answer.text}
                            </button>
                        ))}
                    </div>
                    <div>
                        <p>Time remaining: {countdown} seconds</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default QuizView;
