import React, { useState } from 'react';
import './Quizzes.css';
import { calculateScore, resetAnswers, saveQuizPercentage } from '../../Utils/QuizUtils';
import Question from '../../components/common/Question';

export default function Quizzes() { 
    const questions = [
        { task: 'Translate the sentence', question: "Alex isi doreste acest training", answer: 'Alex wants this training' },
        { task: 'Translate the sentence', question: "Alex este pasionat de React si Node.js", answer: 'Alex is passionate about React and Node.js' },
        { task: 'Translate the sentence', question: "Alex ia cursuri de informatica", answer: 'Alex is taking computer science courses' },
        { task: 'Choose the right answer', question: "Alex has been/has not been accepted for the training", answer: 'has been' },
        { task: 'Choose the right answer', question: "Alex like/likes Computer Science", answer: 'likes' },
        { task: 'Choose the right answer', question: "Alex is a/an ambitious person", answer: 'an' },
    ];

    const [index, setIndex] = useState(0);
    const [correct, setCorrect] = useState(0);
    const [answers, setAnswers] = useState(Array(questions.length).fill(""));

    const handleAnswerChange = (event, qIndex) => {
        const updatedAnswers = [...answers];
        updatedAnswers[qIndex] = event.target.value;
        setAnswers(updatedAnswers);
    };

    const handleContinue = () => {
        const currentQuestions = questions.slice(index, index + 3);
        const newCorrect = correct + calculateScore(currentQuestions, answers, index);

        setCorrect(newCorrect);
        setAnswers(resetAnswers(answers, index, 3));

        if (index < questions.length - 3) {
            setIndex(index + 3);
        } else {
            const percentage = saveQuizPercentage(newCorrect, questions.length);
            alert(`Quiz complete! You got ${percentage.toFixed(2)}% correct.`);
            resetQuiz();
        }
    };

    const resetQuiz = () => {
        setIndex(0);
        setCorrect(0);
        setAnswers(Array(questions.length).fill(""));
    };

    const isFinalStep = index >= questions.length - 3;

    return (
        <form className="form-Quizzes">
            {index % 3 === 0 && <h1>{questions[index].task}</h1>}
            {questions.slice(index, index + 3).map((q, i) => (
                <Question
                    key={i}
                    question={q.question}
                    value={answers[index + i]}
                    onChange={(event) => handleAnswerChange(event, index + i)}
                />
            ))}
            <button 
                type="button" 
                onClick={handleContinue} 
                className="continue-button"
            >
                {isFinalStep ? "Submit" : "Continue"}
            </button>
        </form>
    );
}
