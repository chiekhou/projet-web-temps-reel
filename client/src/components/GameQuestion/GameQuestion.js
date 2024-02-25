import React, { useState ,useEffect} from 'react';
import AnswerTime from '../AnswerTime/AnswerTime';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import './GameQuestion.css';

const GameQuestion = ({ currentQuestion, currentOptions, currentRound, playerName, socket, clickStatus, onClickChange, correctAnswer }) => {
    const [playerChoice, setPlayerChoice] = useState('');
    const [messagesChat, setMessagesChat] = useState([]);
    const [inputMessage, setInputMessage] = useState("");
    const [clickActivated, setClickActivated] = useState(clickStatus); // true by default
  
    const sendMessage = () => {
        // Envoyer le message saisi au serveur
        socket.emit("send_message", { text: inputMessage });
        // Effacer le champ de saisie après l'envoi du message
        setInputMessage("");
      };

    //   useEffect(() => {
    //     socket.on("receive_message", (data) => {
    //       setMessageReceived(data.messagesChat);
    //     });
    //   }, [socket]);

    useEffect(() => {
        // Écouter les événements de réception de messages
        socket.on("receive_message", (message) => {
            // Mettre à jour l'état avec le nouveau message reçu
            setMessagesChat((prevMessages) => [...prevMessages, message]);
        });
    
        // Nettoyer les écouteurs d'événements lors du démontage du composant
        return () => {
            socket.off("receive_message");
        };
    }, [socket]);

      console.log(messagesChat)
    
    
    const clickOption = (event) => {
        const choice = event.target.innerText;
        const gameRound = currentRound;
        socket.emit('playerChoice', { playerName, choice, gameRound }, () => {
            console.log('player name', playerName, 'choice', playerChoice);
        });
        setPlayerChoice(choice);

        setClickActivated(false);
        onClickChange(false); // handleClickChange in GamePlayer
    };

    return (
        <>
        <div>
            <div className="round-container">
                <h2>Question {currentRound}</h2>
            </div>
           
            { clickStatus === true ? (
                
                <div className="container">
                    <AnswerTime/>
                    <div className="question-container">
                        <h2>{decodeURIComponent(currentQuestion.question)}</h2>
                    </div>
                    <div className="options-container">
                        { currentOptions.map((option, index) =>
                            <div className="option" key={index} onClick={clickOption}>
                                {decodeURIComponent(option)}
                            </div>
                            )
                        }
                    </div>
                </div>
            ) : (
                <div>
                    <h3 className="h3-chosen-option">You chose: {playerChoice}</h3>
                    <p className="correct-answer">Correct answer is: {decodeURIComponent(correctAnswer)}</p>
                </div>
                )
            }
        </div>
<Container>
        <Row className="justify-content-md-center">
                <Col>
                <h3>Chat Quiz</h3>
                    <Form>
        <div className="messages-container">

      <ul className='puce'>
        {messagesChat.map((message, index) => (
          <li key={index}>
            <strong>{message.sender}</strong>: {message.text}
          </li>
        ))}
      </ul>
      <Form.Control
        placeholder="Message..."
        value={inputMessage}
        onChange={(event) => setInputMessage(event.target.value)}
      />
      <Button variant="primary" onClick={sendMessage}>Send Message</Button>
      
    </div>
    </Form>
      </Col>
      </Row>
      </Container>
</>
    );
};

export default GameQuestion;