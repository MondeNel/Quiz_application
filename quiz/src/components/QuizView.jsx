import React from 'react'
import './QuizView.css'

const QuizView = () => {
    return (
        <>
            <div className="question">
                <div className="question_number">
                    <span>Question 1 / 5</span>
                </div>
                <div className="question_text">What comes after b?</div>
            </div>


            <div className="answer">
                <button>a</button>
                <button>c</button>
                <button>f</button>
            </div>
        </>
    )
}

export default QuizView
