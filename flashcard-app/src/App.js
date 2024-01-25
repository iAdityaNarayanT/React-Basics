import React, { useState } from "react";
import FlashcardList from "./FlashcardList";
function App() {
  const [flashcards, setflashcards] = useState(SAMPLE_FLASHCARD);
  return (
    <>
      <FlashcardList flashcards={flashcards} />
    </>
  );
}

const SAMPLE_FLASHCARD = [
  { id: 1, question: "What is 2+2?", answer: "4", options: [1, 2, 3, 4] },
  {
    id: 2,
    question: "Question 2?",
    answer: "Answer 2",
    options: ["Answer", "Answer1", "Answer2", "Answer3"],
  },
  {
    id: 3,
    question: "Question 3?",
    answer: "Answer 3",
    options: ["Answer", "Answer1", "Answer2", "Answer3"],
  },
];
export default App;
