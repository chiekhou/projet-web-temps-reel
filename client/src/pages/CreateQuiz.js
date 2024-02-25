import React, { useState, useEffect } from 'react';
import FormQuiz from '../components/FormQuiz/FormQuiz';
const CreateQuiz = () => {
    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        const storedQuizzes = localStorage.getItem('quizzes');
        if (storedQuizzes) {
          setQuizzes(JSON.parse(storedQuizzes));
        }
      }, []);

  useEffect(() => {
    localStorage.setItem('quizzes', JSON.stringify(quizzes));
  }, [quizzes]);
    

    const onCreateQuiz = (quizData) => {
      console.log("Création du quiz avec les données suivantes :", quizData);
      const newQuizzes = [...quizzes, quizData];
    setQuizzes(newQuizzes);
    };
   return (
    <div>
     
      <FormQuiz onCreateQuiz={onCreateQuiz} />
      <h2>Quizzes créés :</h2>
      <ul>
        {quizzes.map((quiz, index) => (
          <li key={index}>
            Question : {quiz.question}, Options : {quiz.options.join(', ')}, Option correcte : {quiz.correctOption}
          </li>
        ))}
      </ul>
    </div>
  );
};
  
  export default CreateQuiz;