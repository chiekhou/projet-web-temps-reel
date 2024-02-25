import React, { useState,useEffect} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import { Button, Col, Container, Form, FormLabel, Row } from 'react-bootstrap';


const ListeQuiz = () => {

    const [quizzes, setQuizzes] = useState([]);

    useEffect(() => {
        const quizzesJSON = localStorage.getItem('quizzes');
        if (quizzesJSON) {
            const quizzesSet = JSON.parse(quizzesJSON);
            setQuizzes(quizzesSet);
        }
    }, []);

  return (
    <Container>
    <Row className="justify-content-md-center">
            <Col>
            <h1>Liste Quizz</h1>
 
     <ListGroup>
        {quizzes.map((quiz, index) => (
        <ListGroup.Item key={index}>
            Question : {quiz.question}, Options : {quiz.options.join(', ')}, Option correcte : {quiz.correctOption}
            </ListGroup.Item>
        ))}
      </ListGroup>
      </Col>
            </Row>
        </Container>

  );
};

export default ListeQuiz;
