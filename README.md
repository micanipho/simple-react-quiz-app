# Simple React Quiz App

A minimal, interactive multiple-choice quiz application built with React, Next.js, TypeScript, and styled with Ant Design. This application guides users through a series of questions, tracks their answers, and displays a final score, with options to start and restart the quiz.

## Table of Contents

*   [Introduction](#introduction)
*   [Features](#features)
*   [Technology Stack](#technology-stack)
*   [Architecture & Design](#architecture--design)
    *   [Core Components](#core-components)
    *   [State Management](#state-management)
    *   [Data Structure](#data-structure)
    *   [Quiz Logic Flow](#quiz-logic-flow)
*   [Getting Started](#getting-started)
    *   [Prerequisites](#prerequisites)
    *   [Installation](#installation)
    *   [Running the Application](#running-the-application)
*   [Project Structure](#project-structure)
*   [Future Enhancements](#future-enhancements)
*   [Contributing](#contributing)
*   [License](#license)

## Introduction

The "Simple React Quiz App" is designed to provide a straightforward and engaging user experience for taking multiple-choice quizzes. It demonstrates fundamental React concepts, state management, and integration with modern web development tools like Next.js for server-side rendering capabilities (though not heavily utilized for this client-side focused app), TypeScript for robust typing, and Ant Design for a polished UI.

## Features

*   **Start Screen:** A clear entry point with a "Start Quiz" button.
*   **Question Display:** Presents one multiple-choice question at a time.
*   **Answer Selection:** Users can select one of four provided options for each question.
*   **Navigation:** A "Next" button to advance to the subsequent question.
*   **Score Screen:** Displays the user's final performance upon quiz completion.
*   **Quiz Restart:** A "Restart" button on the score screen to retake the quiz.
*   **Responsive UI:** Built with Ant Design for a consistent and adaptive user interface.

## Technology Stack

*   **Framework:** [Next.js](https://nextjs.org/) (React Framework for production)
*   **Language:** [TypeScript](https://www.typescriptlang.org/) (Superset of JavaScript with static type checking)
*   **Styling:** [Ant Design](https://ant.design/) (An enterprise-class UI design language and React UI library)
*   **State Management:** React's `useState` and `useCallback` hooks for local component state.
*   **Database:** None (Quiz questions are hardcoded in a local file).
*   **ORM:** None.
*   **Authentication:** None.

## Architecture & Design

The application follows a component-based architecture, centralizing state management for the quiz flow and delegating rendering responsibilities to specialized components.

### Core Components

The application is structured around a few key React components:

*   **`QuizApp` (Container Component):**
    *   Acts as the main orchestrator, managing the overall quiz state (`currentScreen`, `currentQuestionIndex`, `userAnswers`).
    *   Fetches and holds the quiz question data.
    *   Conditionally renders `StartScreen`, `QuestionScreen`, or `ScoreScreen` based on the current application state.
*   **`StartScreen`:**
    *   A simple presentational component displaying a welcome message.
    *   Contains a "Start Quiz" button, which triggers a state change in `QuizApp` to begin the quiz.
*   **`QuestionScreen`:**
    *   Receives the current question data and user's selected answer via props.
    *   Renders the question text and its multiple-choice options using Ant Design's `Radio.Group`.
    *   Handles answer selection and passes the selected answer back to `QuizApp`.
    *   Includes a "Next" button to proceed, which is disabled until an answer is selected.
*   **`ScoreScreen`:**
    *   Receives the final score and total questions via props.
    *   Displays the user's performance.
    *   Features a "Restart Quiz" button to reset the `QuizApp` state.

### State Management

For simplicity and efficiency in this minimal application, state management is primarily handled using React's built-in `useState` and `useCallback` hooks within the top-level `QuizApp` component.

*   **`currentScreen`**: Controls which major UI component (`StartScreen`, `QuestionScreen`, `ScoreScreen`) is currently visible.
*   **`currentQuestionIndex`**: Tracks the index of the question being displayed from the `questions` array.
*   **`userAnswers`**: An array storing the selected answer index for each question. `userAnswers[i]` corresponds to the answer for `questions[i]`.

This approach ensures a clear, unidirectional data flow, where the `QuizApp` component is the single source of truth for the quiz's progress.

### Data Structure

The quiz questions are defined using a TypeScript interface to ensure type safety and consistency. The questions themselves are hardcoded within a local data file.

```typescript
// interfaces/Question.ts
export interface Question {
    id: string;
    questionText: string;
    options: string[]; // Array of four multiple-choice answer strings
    correctAnswerIndex: number; // The 0-based index of the correct option within the 'options' array
}

// data/questions.ts (example)
import { Question } from '../interfaces/Question';

export const quizQuestions: Question[] = [
    {
        id: 'q1',
        questionText: 'What is the capital of France?',
        options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
        correctAnswerIndex: 2, // Paris
    },
    // ... more questions
];
```

### Quiz Logic Flow

1.  **Start:** User clicks "Start Quiz" on `StartScreen`. `QuizApp` transitions `currentScreen` to 'quiz' and `currentQuestionIndex` to 0.
2.  **Answering:** `QuestionScreen` displays the question at `currentQuestionIndex`. User selects an option, updating a temporary local state in `QuestionScreen`.
3.  **Next Question:** User clicks "Next". `QuestionScreen` passes the selected answer up to `QuizApp`, which stores it in `userAnswers` and increments `currentQuestionIndex`.
4.  **Quiz Completion:** If `currentQuestionIndex` exceeds the number of questions, `QuizApp` calculates the score by comparing `userAnswers` with `questions[i].correctAnswerIndex` and transitions `currentScreen` to 'score'.
5.  **Score Display:** `ScoreScreen` displays the calculated score.
6.  **Restart:** User clicks "Restart Quiz". `QuizApp` resets `currentScreen` to 'start', `currentQuestionIndex` to 0, and `userAnswers` to an empty array.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   Node.js (LTS version recommended, e.g., 18.x or 20.x)
*   npm or yarn

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/simple-react-quiz-app.git
    cd simple-react-quiz-app
    ```
2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Application

1.  **Start the development server:**
    ```bash
    npm run dev
    # or
    yarn dev
    ```
2.  **Open in browser:**
    The application will typically be available at `http://localhost:3000`.

## Project Structure

A high-level overview of the project directory structure:

```
simple-react-quiz-app/
├── public/                # Static assets (images, fonts, etc.)
├── src/
│   ├── components/        # Reusable React components (e.g., QuestionScreen, ScoreScreen)
│   ├── data/              # Quiz question data (questions.ts)
│   ├── interfaces/        # TypeScript interfaces (e.g., Question.ts)
│   ├── pages/             # Next.js pages (e.g., index.tsx for the main app)
│   ├── styles/            # Global styles or Ant Design overrides
│   └── util/              # Utility functions (e.g., score calculation)
├── .gitignore             # Files ignored by Git
├── next.config.js         # Next.js configuration
├── package.json           # Project dependencies and scripts
├── tsconfig.json          # TypeScript configuration
└── README.md              # Project documentation
```

## Future Enhancements

*   **Timer:** Add a time limit for each question or the entire quiz.
*   **Feedback:** Provide immediate feedback on whether an answer was correct or incorrect after selection.
*   **Question Shuffling:** Randomize the order of questions for replayability.
*   **Dynamic Question Loading:** Fetch questions from an API instead of hardcoding.
*   **Different Quiz Modes:** Introduce true/false, fill-in-the-blank, or image-based questions.
*   **User Profiles/History:** If a backend were introduced, track user scores over time.
*   **Accessibility Improvements:** Ensure full WCAG compliance.

## Contributing

Contributions are welcome! If you have suggestions for improvements or bug fixes, please open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details. (Note: A `LICENSE` file would need to be created in a real project).

---

**Thank you for checking out the Simple React Quiz App!**