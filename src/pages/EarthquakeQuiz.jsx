import React, { useState } from "react";
import { motion } from "framer-motion";
import "../styles/Quiz.css";

const questions = [
  {
    question:
      "What should you do first during an earthquake if you are indoors?",
    options: [
      "Run outside",
      "Stand near a window",
      "Drop, cover, and hold on",
      "Use the elevator to escape",
    ],
    answer: 2,
    reason:
      "Running can lead to injury; most injuries occur from falling objects indoors. 'Drop, Cover, and Hold On' protects your head and body from debris.",
  },
  {
    question:
      "If you are in bed during an earthquake, what is the best response?",
    options: [
      "Get up and run",
      "Stay in bed and cover your head",
      "Hide in the closet",
      "Move near a window",
    ],
    answer: 1,
    reason:
      "Moving increases injury risk. The bed offers some protection; covering your head helps prevent head injuries.",
  },
  {
    question: "Why should you avoid using elevators after an earthquake?",
    options: [
      "Elevators become faster",
      "Firefighters might need them",
      "Power failures could trap you",
      "Elevators may skip floors",
    ],
    answer: 2,
    reason:
      "Earthquakes can cut power or damage elevator systems, trapping you inside.",
  },
  {
    question:
      "Which of the following is NOT a good item for your earthquake emergency kit?",
    options: ["Flashlight", "Bottled water", "Gasoline", "First-aid kit"],
    answer: 2,
    reason:
      "Gasoline is highly flammable and dangerous to store indoors. The others are essential emergency supplies.",
  },
  {
    question: "After an earthquake, you smell gas. What should you do?",
    options: [
      "Turn on the lights",
      "Light a match to find the leak",
      "Open windows and leave the building",
      "Stay inside and call someone",
    ],
    answer: 2,
    reason:
      "Gas leaks can lead to explosions. Ventilate the area and leave immediately. Do NOT use electronics or open flames.",
  },
];

export default function EarthquakeQuiz() {
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
        "🌟 Earthquake Expert\n" +
        "You’re well-prepared and know exactly what to do before, during, and after an earthquake. Your knowledge could save lives. Keep up the excellent readiness!"
      );
    if (score === 4)
      return (
        "👍 Almost There\n" +
        "Great job! You have a strong understanding of earthquake safety. Review the one question you missed and keep practicing for full confidence."
      );
    if (score === 3)
      return (
        "⚠️ Needs a Bit of Work\n" +
        "You’re on the right path, but there are some gaps in your earthquake preparedness. Review key safety tips and consider doing a quick refresher."
      );
    if (score === 2)
      return (
        "⚠️ At Risk\n" +
        "Your current knowledge may not be enough in a real earthquake. Take time to re-learn essential safety steps and make a checklist of what to do."
      );
    return (
      "❌ Unprepared\n" +
      "You’re highly vulnerable in an earthquake scenario. Please study the safety guides immediately and practice drills with your family or friends."
    );
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
                className={getOptionClass(qIndex, optIndex)}
                onClick={() => handleSelect(qIndex, optIndex)}
              >
                {opt}
              </li>
            ))}
          </ul>

          {/* {score !== null && selected[qIndex] !== q.answer && (
            <motion.p
              className="quiz-reason"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <strong>Why?</strong> {q.reason}
            </motion.p>
          )} */}
          {score !== null && selected[qIndex] !== null && (
            <motion.p
              className={`quiz-reason ${
                selected[qIndex] === q.answer
                  ? "correct-reason"
                  : "wrong-reason"
              }`}
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
