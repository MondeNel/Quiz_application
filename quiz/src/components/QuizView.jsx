import React from 'react';
import './QuizView.css';

const QuizView = ({ question, updateScore, onNextQuestion, currentQuestionIndex, questions }) => {
    const handleAnswerClick = (isCorrect) => {
        updateScore(isCorrect);
        onNextQuestion();
    };

    return (
        <>
            <div className="question">
                <div className="question_number">
                    {/* Use the passed props instead of referencing undefined variables */}
                    <span>{`Question ${currentQuestionIndex + 1} / ${questions.length}`}</span>
                </div>
                <div className="question_text">{question.question}</div>
            </div>

            <div className="answer">
                {question.answers.map((answer, index) => (
                    <button key={index} onClick={() => handleAnswerClick(answer.isCorrect)}>
                        {answer.text}
                    </button>
                ))}
            </div>
        </>
    );
};

export default QuizView;
