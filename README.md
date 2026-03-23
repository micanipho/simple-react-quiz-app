# Simple React Quiz App

## Table of Contents
- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [High-Level Architecture](#high-level-architecture)
- [Core Entities](#core-entities)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Implementation Details](#implementation-details)
- [Future Enhancements](#future-enhancements)
- [License](#license)

---

## About the Project
The "Simple React Quiz App" is a single-page, multiple-choice quiz application built using Next.js, TypeScript, and CSS Modules. Designed for simplicity and ease of use, it allows users to test their knowledge through a series of questions, each with four options. The application progresses through distinct states: a welcoming start screen, an interactive quiz screen displaying one question at a time, and a final score screen summarizing performance. All quiz content is self-contained and hardcoded within the application, ensuring a fully client-side experience with no external dependencies or backend services.

## Features
*   **Start Screen:** A welcoming screen with a "Start Quiz" button.
*   **Quiz Screen:** Displays one question at a time with multiple-choice options.
*   **Question Display:** Clearly presents the question text.
*   **Multiple Choice Answers:** Four selectable options for each question.
*   **Answer Selection:** Users can select one option per question.
*   **Next Question Navigation:** Seamless transition to the next question after an answer is selected.
*   **Progress Tracking:** Visual indication of the current question number out of the total (e.g., "Question X of Y").
*   **Answer Highlighting:** Visual feedback to highlight the currently selected answer.
*   **Score Display:** Shows the user's final score upon quiz completion.
*   **Quiz Restart:** A "Restart Quiz" button on the score screen to play again.

## Tech Stack
*   **Framework:** Next.js (React Framework)
*   **Language:** TypeScript
*   **Styling:** CSS Modules

## High-Level Architecture
The application is structured as a single-page application orchestrated primarily by the `pages/index.tsx` component. This main component manages the overall `quizState` (e.g., `'start'`, `'quiz'`, `'score'`) using React's `useState` hook, conditionally rendering the appropriate screen component.

Core components include:
*   **`StartScreen`**: Displays the initial welcome message and the "Start Quiz" button.
*   **`QuizScreen`**: Manages the flow of questions. It holds the `currentQuestionIndex` and `userAnswers` state. It renders individual `QuestionCard` components.
*   **`QuestionCard`**: Responsible for displaying a single question, its options, and handling user selections for that specific question.
*   **`ScoreScreen`**: Calculates and displays the final score based on `userAnswers` and the hardcoded correct answers. It also provides a "Restart" button.

All quiz data is hardcoded within a dedicated data file, typed with TypeScript interfaces for clarity and maintainability. Styling is handled using CSS Modules, ensuring component-scoped styles and preventing global style collisions.

## Core Entities
The application revolves around two primary conceptual entities:

1.  **Question**: Represents a single quiz question.
    *   `id`: Unique identifier (for React keys).
    *   `questionText`: The text of the question.
    *   `options`: An array of strings, representing the multiple-choice options.
    *   `correctAnswerIndex`: The zero-based index of the correct answer within the `options` array.

2.  **SelectedAnswer**: While not a distinct object entity in the application's current state, user selections are tracked implicitly.
    *   The application maintains an array, `userAnswers`, where each element corresponds to the `selectedIndex` (0-3) chosen by the user for the respective question. This array's index directly maps to the `currentQuestionIndex`.

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites
Ensure you have Node.js and npm (or Yarn) installed on your machine.
*   Node.js (LTS version recommended)
*   npm (comes with Node.js) or Yarn

### Installation
1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
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
2.  Open your browser and navigate to `http://localhost:3000`.

## Project Structure
```
simple-react-quiz-app/
├── public/                # Static assets (not heavily used in this app)
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── StartScreen.tsx
│   │   ├── QuizScreen.tsx
│   │   ├── QuestionCard.tsx
│   │   └── ScoreScreen.tsx
│   ├── data/              # Hardcoded quiz questions
│   │   └── quizQuestions.ts
│   ├── pages/             # Next.js pages (routing)
│   │   └── index.tsx      # Main application entry point
│   ├── styles/            # CSS Modules and global styles
│   │   ├── globals.css
│   │   ├── App.module.css
│   │   ├── StartScreen.module.css
│   │   ├── QuizScreen.module.css
│   │   ├── QuestionCard.module.css
│   │   └── ScoreScreen.module.css
│   └── types/             # TypeScript type definitions
│       └── quiz.ts
├── .gitignore
├── next-env.d.ts
├── next.config.js
├── package.json
├── README.md
├── tsconfig.json
└── yarn.lock (or package-lock.json)
```

## Implementation Details

*   **State Management:** The primary application state (`quizState`, `currentQuestionIndex`, `userAnswers`) is managed within the `pages/index.tsx` component using React's `useState` hook. This centralized state is passed down to child components as props, and callbacks are passed up for state updates.
*   **Data Handling:** Quiz questions are defined as an array of `Question` objects in `src/data/quizQuestions.ts`. The `Question` interface is defined in `src/types/quiz.ts` for strong typing.
*   **User Interface:** The UI is designed to be clean, minimal, and centrally aligned, achieved through CSS Modules. Visual feedback, such as highlighting the selected answer, is implemented by dynamically applying CSS classes based on component state.
*   **Progress Tracking:** The `QuizScreen` component displays the current question number and total questions (e.g., "Question 3 of 5") to inform the user of their progress.
*   **Score Calculation:** Upon completing the quiz, the `ScoreScreen` iterates through `userAnswers` and `quizQuestions` to compare selected answers with correct answers, calculating the final score.

## Future Enhancements
*   **Dynamic Question Loading:** Fetch quiz questions from an external API or JSON file.
*   **Multiple Quiz Categories:** Allow users to select different quiz topics.
*   **Timer Functionality:** Add a countdown timer for each question or the entire quiz.
*   **Review Answers Screen:** Enable users to review their answers and see correct solutions after completing the quiz.
*   **Animations and Transitions:** Enhance user experience with subtle UI animations.
*   **Local Storage Integration:** Persist quiz state or high scores using browser local storage.
*   **Accessibility Improvements:** Ensure the app is fully accessible to users with disabilities.

## License
This project is licensed under the MIT License. See the `LICENSE` file for details.

---