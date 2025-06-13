import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/Quiz.css";

const questions = [
  {
    question: "What is one important step to take before an earthquake?",
    options: [
      "Avoid practicing drills",
      "Ignore structural issues",
      "Secure furniture and shelves",
      "Open windows during tremors",
    ],
    answer: 2,
  },
  {
    question: "During an earthquake, what is the safest action indoors?",
    options: [
      "Run to the nearest elevator",
      "Drop, cover, and hold on",
      "Stand near glass windows",
      "Use furniture for climbing",
    ],
    answer: 1,
  },
  {
    question:
      "Which of the following is part of a proper emergency preparedness kit?",
    options: [
      "Candles and lighters",
      "Only snacks and soda",
      "Flashlight, water, and medications",
      "Electric heater and extension cords",
    ],
    answer: 2,
  },
  {
    question: "After an earthquake, what should you do if someone is injured?",
    options: [
      "Wait for help without doing anything",
      "Panic and shout for others",
      "Give first aid and check surroundings",
      "Leave them and run outside",
    ],
    answer: 2,
  },
  {
    question:
      "Which of the following is a recommended action to prepare for aftershocks?",
    options: [
      "Ignore all safety alerts",
      "Stay alert and ready to act again",
      "Turn off emergency radios",
      "Stay near windows and mirrors",
    ],
    answer: 1,
  },
];

export default function EarthquakeQuiz() {
  const [selected, setSelected] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState(null);

  const handleSelect = (qIndex, optIndex) => {
    const updated = [...selected];
    updated[qIndex] = optIndex;
    setSelected(updated);
  };

  const handleSubmit = () => {
    const correct = selected.filter(
      (val, i) => val === questions[i].answer
    ).length;
    setScore(correct);
  };

  const getResultMessage = (score) => {
    if (score === 5)
      return "⭐ Earthquake Expert: You're well-prepared and know exactly what to do.";
    if (score === 4)
      return "👍 Almost There: Review the one you missed and you're solid.";
    if (score === 3)
      return "⚠️ Needs Work: Refresh your knowledge to improve your readiness.";
    if (score === 2)
      return "⚠️ At Risk: Study the guide again and practice safety steps.";
    return "❌ Unprepared: Please revisit the Earthquake safety guide immediately.";
  };

  return (
    <section className="quiz-container">
      <h1 className="quiz-title">Earthquake Safety Quiz</h1>

      {questions.map((q, qIndex) => (
        <div key={qIndex} className="quiz-question">
          <h3>
            {qIndex + 1}. {q.question}
          </h3>
          <ul>
            {q.options.map((opt, optIndex) => (
              <li
                key={optIndex}
                className={selected[qIndex] === optIndex ? "selected" : ""}
                onClick={() => handleSelect(qIndex, optIndex)}
              >
                {opt}
              </li>
            ))}
          </ul>
        </div>
      ))}

      {score === null ? (
        <button
          className="quiz-submit"
          onClick={handleSubmit}
          disabled={selected.includes(null)}
        >
          Submit Answers
        </button>
      ) : (
        <motion.div
          className="quiz-result"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2>You scored {score}/5</h2>
          <p>{getResultMessage(score)}</p>
        </motion.div>
      )}
    </section>
  );
}
