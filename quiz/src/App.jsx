import React, { useState } from 'react'
import './App.css'
import ScoreView from './components/ScoreView'
import QuizView from './components/QuizView'

function App() {

  const [questions, setQuestions] = useState([
    {
      question: 'What is the capital of France?',
      answers: [
        { text: 'Berlin' },
        { text: 'Madrid' },
        { text: 'Paris', isCorrect: true },
        { text: 'Rome' },
      ],
    },
    {
      question: 'Who wrote "Romeo and Juliet"?',
      answers: [
        { text: 'Charles Dickens' },
        { text: 'Jane Austen' },
        { text: 'William Shakespeare', isCorrect: true },
        { text: 'Emily Brontë' },
      ],
    },
    {
      question: 'What is the largest mammal in the world?',
      answers: [
        { text: 'Elephant' },
        { text: 'Blue Whale', isCorrect: true },
        { text: 'Giraffe' },
        { text: 'Hippopotamus' },
      ],
    },
    {
      question: 'What is the largest planet in our solar system?',
      answers: [
        { text: 'Earth' },
        { text: 'Jupiter', isCorrect: true },
        { text: 'Mars' },
        { text: 'Venus' },
      ],
    },
    {
      question: 'Who painted the Mona Lisa?',
      answers: [
        { text: 'Vincent van Gogh' },
        { text: 'Leonardo da Vinci', isCorrect: true },
        { text: 'Pablo Picasso' },
        { text: 'Claude Monet' },
      ],
    },
    {
      question: 'Which element has the chemical symbol "O"?',
      answers: [
        { text: 'Oxygen', isCorrect: true },
        { text: 'Gold' },
        { text: 'Silver' },
        { text: 'Carbon' },
      ],
    },
    {
      question: 'What is the capital of Australia?',
      answers: [
        { text: 'Sydney' },
        { text: 'Canberra', isCorrect: true },
        { text: 'Melbourne' },
        { text: 'Perth' },
      ],
    },
    {
      question: 'In which year did the Titanic sink?',
      answers: [
        { text: '1912', isCorrect: true },
        { text: '1905' },
        { text: '1920' },
        { text: '1935' },
      ],
    },
    {
      question: 'What is the square root of 144?',
      answers: [
        { text: '10' },
        { text: '12', isCorrect: true },
        { text: '14' },
        { text: '16' },
      ],
    },
    {
      question: 'Which ocean is the largest?',
      answers: [
        { text: 'Atlantic Ocean' },
        { text: 'Indian Ocean' },
        { text: 'Southern Ocean' },
        { text: 'Pacific Ocean', isCorrect: true },
      ],
    },
    {
      question: 'What is the currency of Japan?',
      answers: [
        { text: 'Yuan' },
        { text: 'Won' },
        { text: 'Yen', isCorrect: true },
        { text: 'Ringgit' },
      ],
    },
    {
      question: 'Who is known as the "Father of Computer Science"?',
      answers: [
        { text: 'Alan Turing', isCorrect: true },
        { text: 'Bill Gates' },
        { text: 'Steve Jobs' },
        { text: 'Mark Zuckerberg' },
      ],
    },
    {
      question: 'Which planet is known as the "Red Planet"?',
      answers: [
        { text: 'Venus' },
        { text: 'Mars', isCorrect: true },
        { text: 'Jupiter' },
        { text: 'Saturn' },
      ],
    },

  ]);

  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const updateScore = (isCorrect) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handleResetQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
  };

  return (
    <div className="App">
      {currentQuestionIndex < questions.length ? (
        <QuizView
          question={questions[currentQuestionIndex]}
          updateScore={updateScore}
          onNextQuestion={handleNextQuestion}
          currentQuestionIndex={currentQuestionIndex}
          questions={questions}
        />

      ) : (
        <ScoreView score={score} resetQuiz={handleResetQuiz} />
      )}
    </div>
  );
}

export default App;