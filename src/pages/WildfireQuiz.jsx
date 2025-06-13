import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/Quiz.css";

const questions = [
  {
    question: "What is a key step to take around your home before a wildfire?",
    options: [
      "Install glass windows only",
      "Create a defensible space free of flammable material",
      "Leave dry leaves on the roof for insulation",
      "Remove vents to allow air flow",
    ],
    answer: 1,
  },
  {
    question: "When should you evacuate during a wildfire warning?",
    options: [
      "Wait until smoke is heavy",
      "After fire trucks arrive",
      "As soon as authorities advise or order",
      "When neighbors leave",
    ],
    answer: 2,
  },
  {
    question:
      "What is a safe behavior while sheltering indoors during wildfire smoke?",
    options: [
      "Keep doors and windows open for airflow",
      "Seal openings and stay in an interior room",
      "Use candles for light",
      "Hide in the attic",
    ],
    answer: 1,
  },
  {
    question: "After a wildfire, what should you wear during cleanup?",
    options: [
      "Shorts and sandals",
      "Normal office clothes",
      "Gloves and a mask",
      "No protective gear needed",
    ],
    answer: 2,
  },
  {
    question: "What is one way to prepare your animals before a wildfire?",
    options: [
      "Leave gates open for them to escape",
      "Ignore their evacuation needs",
      "Prepare crates and contact animal rescue teams",
      "Keep them in the house alone",
    ],
    answer: 2,
  },
];

export default function WildfireQuiz() {
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
      return "🔥 Wildfire Warrior: You’re fully prepared and alert.";
    if (score === 4)
      return "🌲 Well-Prepared: Just one more step to full readiness.";
    if (score === 3)
      return "🟡 Moderate Risk: Review defensible space and evacuation steps.";
    if (score === 2)
      return "⚠️ Unready: Refresh wildfire prep basics and evacuation drills.";
    return "❌ High Risk: Study the wildfire safety guide now and make a safety plan.";
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
