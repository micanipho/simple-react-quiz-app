import React from 'react';
import QuestionCard from './QuestionCard';
import { Question } from '@/types/quiz';
import styles from '@/styles/QuizScreen.module.css';

interface QuizScreenProps {
  questions: Question[];
  currentQuestionIndex: number;
  userAnswers: (number | null)[];
  onAnswerSelect: (answerIndex: number) => void;
  onNextQuestion: () => void;
}

const QuizScreen: React.FC<QuizScreenProps> = ({
  questions,
  currentQuestionIndex,
  userAnswers,
  onAnswerSelect,
  onNextQuestion,
}) => {
  const currentQuestion = questions[currentQuestionIndex];
  const selectedAnswer = userAnswers[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  return (
    <div className={styles.quizScreen}>
      <div className={styles.progress}>
        Question {currentQuestionIndex + 1} of {questions.length}
      </div>
      <QuestionCard
        question={currentQuestion}
        selectedAnswer={selectedAnswer}
        onOptionClick={onAnswerSelect}
      />
      <button
        className={styles.nextButton}
        onClick={onNextQuestion}
        disabled={selectedAnswer === null}
      >
        {isLastQuestion ? 'Submit Quiz' : 'Next Question'}
      </button>
    </div>
  );
};

export default QuizScreen;
