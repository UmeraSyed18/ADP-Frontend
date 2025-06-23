import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/Quiz.css";

const questions = [
  {
    question: "What is the primary reason homes catch fire during wildfires?",
    options: [
      "Direct flames",
      "Lightning",
      "Flying embers",
      "Poor water supply",
    ],
    answer: 2,
    reason:
      "Embers can travel miles and ignite roofs, vents, or flammable materials around homes—even if the fire itself is far away.",
  },
  {
    question: "When ordered to evacuate due to a wildfire, what should you do?",
    options: [
      "Wait to see if it gets worse",
      "Try to fight the fire with a hose",
      "Evacuate immediately",
      "Post updates on social media",
    ],
    answer: 2,
    reason:
      "Wildfires move fast; delaying evacuation can be fatal. Leave quickly for safety.",
  },
  {
    question:
      "Which of the following is most important when creating defensible space around your home?",
    options: [
      "Digging trenches",
      "Planting tall trees",
      "Clearing dry leaves and vegetation",
      "Painting walls",
    ],
    answer: 2,
    reason:
      "Dry debris easily ignites and spreads fire to your home. Defensible space reduces this risk.",
  },
  {
    question:
      "If trapped outside during a wildfire, what is the safest action?",
    options: [
      "Run uphill",
      "Find a clearing and lie down",
      "Hide in a car",
      "Climb a tree",
    ],
    answer: 1,
    reason:
      "Low vegetation areas reduce burn risk. Lying down and covering yourself protects from heat and smoke.",
  },
  {
    question: "Why should you wear an N95 mask during a wildfire?",
    options: [
      "To look cool",
      "To avoid sunburn",
      "To protect from ash and smoke",
      "To prevent bad smells",
    ],
    answer: 2,
    reason:
      "Wildfire smoke contains harmful particles. N95 masks filter out fine particulates that damage lungs.",
  },
];

export default function WildfireQuiz() {
  const [selected, setSelected] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState(null);

  const handleSelect = (qIndex, optIndex) => {
    if (score !== null) return;
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

  const handleReset = () => {
    setSelected(Array(questions.length).fill(null));
    setScore(null);
    window.scrollTo(0, 0);
  };

  const getOptionClass = (qIndex, optIndex) => {
    if (score === null) {
      return selected[qIndex] === optIndex ? "selected" : "";
    }

    const isCorrect = optIndex === questions[qIndex].answer;
    const isSelected = selected[qIndex] === optIndex;

    if (isCorrect) return "correct";
    if (isSelected && !isCorrect) return "wrong";
    return "";
  };

  const getResultMessage = (score) => {
    if (score === 5)
      return (
        "🔥 Wildfire Warrior\n" +
        "You’re fully prepared to protect yourself, your family, and your property. Excellent awareness and readiness!"
      );
    if (score === 4)
      return (
        "🌲 Well-Prepared\n" +
        "You know most of the critical wildfire safety steps. Just one small correction needed—review and you're ready."
      );
    if (score === 3)
      return (
        "🟡 Moderate Risk\n" +
        "You have decent awareness but missed key details that could be vital in a wildfire. Review the missed answers and strengthen your knowledge."
      );
    if (score === 2)
      return (
        "⚠️ Unready\n" +
        "You’re missing important information about wildfire safety. Study the tips again, especially evacuation and defensible space preparation."
      );
    return (
      "❌ High Risk\n" +
      "You’re highly vulnerable during wildfires. Please re-read the wildfire safety guide thoroughly and prepare an emergency plan immediately."
    );
  };

  return (
    <section className="quiz-container">
      <h1 className="quiz-title">Wildfire Safety Quiz</h1>

      {questions.map((q, qIndex) => (
        <div key={qIndex} className="quiz-question">
          <h3>
            {qIndex + 1}. {q.question}
          </h3>
          <ul>
            {q.options.map((opt, optIndex) => (
              <li
                key={optIndex}
                className={getOptionClass(qIndex, optIndex)}
                onClick={() => handleSelect(qIndex, optIndex)}
              >
                {opt}
              </li>
            ))}
          </ul>

          {score !== null && selected[qIndex] !== q.answer && (
            <motion.p
              className="quiz-reason"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <strong>Why?</strong> {q.reason}
            </motion.p>
          )}
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2>You scored {score}/5</h2>
          <p>{getResultMessage(score)}</p>
          <button className="quiz-retake" onClick={handleReset}>
            Retake Quiz
          </button>
        </motion.div>
      )}
    </section>
  );
}
