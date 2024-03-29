import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form, Container, Row, Col, Button } from 'react-bootstrap';
import './JoinGame.css';

const JoinGame = () => {
    const [roomName, setRoomName] = useState('');
    const [joinRoomName, setJoinRoomName] = useState('');
    const [masterName, setMasterName] = useState('');
    const [playerName, setPlayerName] = useState('');

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col>
                    <h1>Instructions</h1>
                    <ul>
                        <li>The game requires 1 game master and at least 2 players to start the game</li>
                        <li>A game master must first create a game room</li>
                        <li>Then players can join the game room by using the name</li>
                    </ul>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col>
                    <h1>Create Game Room</h1>
                    <Form>
                        <Form.Control placeholder="Game room name" type="text" onChange={(event) => setRoomName(event.target.value)}/>
                        <Form.Control placeholder="Game Master name" type="text" onChange={(event) => setMasterName(event.target.value)}/>
                        <Link onClick={event => (!roomName) ? event.preventDefault() : null} to={`/gamemaster?roomName=${roomName}&masterName=${masterName}`}>
                            <Button variant="primary" type="submit">Create game</Button>
                        </Link>
                    </Form>
                </Col>
            </Row>

            <Row className="justify-content-md-center">
                <Col>
                    <h1>Join Game</h1>
                    <Form>
                        <Form.Control className="joinInput" placeholder="Game room name" type="text" onChange={(event) => setJoinRoomName(event.target.value)}/>
                        <Form.Control placeholder="Player name" type="text" onChange={(event) => setPlayerName(event.target.value)}/>
                        <Link onClick={event => (!joinRoomName) ? event.preventDefault() : null} to={`/gameplayer?joinRoomName=${joinRoomName}&playerName=${playerName}`}>
                            <Button variant="primary" type="submit">Join game</Button>
                        </Link>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default JoinGame;