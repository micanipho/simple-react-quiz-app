'use client';

import { useState, useCallback } from 'react';
import StartScreen from '@/components/StartScreen';
import QuizScreen from '@/components/QuizScreen';
import ScoreScreen from '@/components/ScoreScreen';
import { quizQuestions } from '@/data/quizQuestions';
import styles from '@/styles/App.module.css';

type QuizState = 'start' | 'quiz' | 'score';

export default function Home() {
  const [quizState, setQuizState] = useState<QuizState>('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>(new Array(quizQuestions.length).fill(null));

  const handleStartQuiz = useCallback(() => {
    setQuizState('quiz');
    setCurrentQuestionIndex(0);
    setUserAnswers(new Array(quizQuestions.length).fill(null));
  }, [quizQuestions.length]);

  const handleAnswerSelect = useCallback((answerIndex: number) => {
    setUserAnswers(prevAnswers => {
      const newAnswers = [...prevAnswers];
      newAnswers[currentQuestionIndex] = answerIndex;
      return newAnswers;
    });
  }, [currentQuestionIndex]);

  const handleNextQuestion = useCallback(() => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    } else {
      setQuizState('score');
    }
  }, [currentQuestionIndex, quizQuestions.length]);

  const handleRestartQuiz = useCallback(() => {
    setQuizState('start');
    setCurrentQuestionIndex(0);
    setUserAnswers(new Array(quizQuestions.length).fill(null));
  }, [quizQuestions.length]);

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Simple Quiz App</h1>
      <div className={styles.card}>
        {quizState === 'start' && (
          <StartScreen onStartQuiz={handleStartQuiz} />
        )}
        {quizState === 'quiz' && (
          <QuizScreen
            questions={quizQuestions}
            currentQuestionIndex={currentQuestionIndex}
            userAnswers={userAnswers}
            onAnswerSelect={handleAnswerSelect}
            onNextQuestion={handleNextQuestion}
          />
        )}
        {quizState === 'score' && (
          <ScoreScreen
            questions={quizQuestions}
            userAnswers={userAnswers}
            onRestartQuiz={handleRestartQuiz}
          />
        )}
      </div>
    </main>
  );
}
