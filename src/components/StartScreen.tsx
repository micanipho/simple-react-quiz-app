import React from 'react';
import styles from '@/styles/StartScreen.module.css';

interface StartScreenProps {
  onStartQuiz: () => void;
}

const StartScreen: React.FC<StartScreenProps> = ({ onStartQuiz }) => {
  return (
    <div className={styles.startScreen}>
      <h2>Welcome to the Quiz!</h2>
      <p>Test your knowledge with these fun questions.</p>
      <button className={styles.startButton} onClick={onStartQuiz}>
        Start Quiz
      </button>
    </div>
  );
};

export default StartScreen;
