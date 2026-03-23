import React from 'react';
import { Question } from '@/types/quiz';
import styles from '@/styles/ScoreScreen.module.css';

interface ScoreScreenProps {
  questions: Question[];
  userAnswers: (number | null)[];
  onRestartQuiz: () => void;
}

const ScoreScreen: React.FC<ScoreScreenProps> = ({
  questions,
  userAnswers,
  onRestartQuiz,
}) => {
  const calculateScore = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (userAnswers[index] === question.correctAnswerIndex) {
        score++;
      }
    });
    return score;
  };

  const score = calculateScore();

  return (
    <div className={styles.scoreScreen}>
      <h2>Quiz Completed!</h2>
      <p className={styles.finalScore}>
        Your Score: {score} / {questions.length}
      </p>
      <button className={styles.restartButton} onClick={onRestartQuiz}>
        Restart Quiz
      </button>
    </div>
  );
};

export default ScoreScreen;
