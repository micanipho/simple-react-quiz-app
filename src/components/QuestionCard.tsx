import React from 'react';
import { Question } from '@/types/quiz';
import styles from '@/styles/QuestionCard.module.css';

interface QuestionCardProps {
  question: Question;
  selectedAnswer: number | null;
  onOptionClick: (optionIndex: number) => void;
}

const QuestionCard: React.FC<QuestionCardProps> = ({
  question,
  selectedAnswer,
  onOptionClick,
}) => {
  return (
    <div className={styles.questionCard}>
      <h3 className={styles.questionText}>{question.questionText}</h3>
      <div className={styles.optionsContainer}>
        {question.options.map((option, index) => (
          <button
            key={index}
            className={`${styles.optionButton} ${selectedAnswer === index ? styles.selected : ''}`}
            onClick={() => onOptionClick(index)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default QuestionCard;
