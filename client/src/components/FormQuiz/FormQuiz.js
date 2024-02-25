import React, { useState } from 'react';
import { Button, Col, Container, Form, FormLabel, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FormQuiz = ({onCreateQuiz}) => {
    const [question, setQuestion] = useState('');
    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');
    const [option3, setOption3] = useState('');
    const [option4, setOption4] = useState('');
    const [correctOption, setCorrectOption] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();  
      const quizData = {
        question,
        options: [option1, option2, option3, option4],
        correctOption,
      };
  
      onCreateQuiz(quizData)
      
      setQuestion('');
      setOption1('');
      setOption2('');
      setOption3('');
      setOption4('');
      setCorrectOption('');

      console.log("Quizz crée")
    };
  
    return (
        <Container>
        <Row className="justify-content-md-center">
                <Col>
                <h1>Create Quizz</h1>
      <Form onSubmit={handleSubmit}>
        <div>
        <FormLabel>Question :</FormLabel>
          <Form.Control
            type="text"
            value={question}
            className="form-control"
            onChange={(e) => setQuestion(e.target.value)}
            required
          />
        </div>
        <div>
        <FormLabel>Option 1 :</FormLabel>
          <Form.Control
            type="text"
            value={option1}
            className="form-control"
            onChange={(e) => setOption1(e.target.value)}
            required
          />
        </div>
        <div>
        <FormLabel>Option 2:</FormLabel>
          <Form.Control
            type="text"
            value={option2}
            className="form-control"
            onChange={(e) => setOption2(e.target.value)}
            required
          />
        </div>
        <div>
        <FormLabel>Option 3:</FormLabel>
          <Form.Control
            type="text"
            value={option3}
            className="form-control"
            onChange={(e) => setOption3(e.target.value)}
            required
          />
        </div>
        <div>
        <FormLabel>Option 4:</FormLabel>
          <Form.Control
            type="text"
            value={option4}
            className="form-control"
            onChange={(e) => setOption4(e.target.value)}
            required
          />
        </div>
        <div>
          <FormLabel>Correction Option</FormLabel>
          <Form.Control
            type="number"
            min="1"
            max="4"
            value={correctOption}
            className="form-control"
            onChange={(e) => setCorrectOption(e.target.value)}
            required
          />
        </div>
        <Button variant="primary"type="submit">Add Quiz</Button>
        </Form>
        <Link to="admin/quizz/list">Voir la liste des quiz</Link>
        </Col>
            </Row>
        </Container>
    );
}

export default FormQuiz