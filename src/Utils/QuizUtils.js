export const calculateScore = (questions, answers, startIndex) => {
    let correct = 0;
    questions.forEach((q, i) => {
        if (answers[startIndex + i].trim().toLowerCase() === q.answer.trim().toLowerCase()) {
            correct += 1;
        }
    });
    return correct;
};

export const resetAnswers = (answers, startIndex, numQuestions) => {
    const updatedAnswers = [...answers];
    for (let i = startIndex; i < startIndex + numQuestions && i < answers.length; i++) {
        updatedAnswers[i] = '';
    }
    return updatedAnswers;
};

export const saveQuizPercentage = (correct, totalQuestions) => {
    const percentage = (correct / totalQuestions) * 100;
    const previousPercentage = parseFloat(localStorage.getItem('quizPercentage')) || 0;
    localStorage.setItem('quizPercentage', Math.max(percentage, previousPercentage).toFixed(2));
    return percentage;
};
