import React from 'react';
import { useHistory } from "react-router-dom";
import { Form, Container, Button, Table } from 'react-bootstrap';
import './EndGame.css';

const EndGame = ({ players, player }) => {
    let history = useHistory();

    const handleSubmit = async e => {
        e.preventDefault();
    
        try {
            const response = await fetch('http://server:5000/api/scores/save', {
                method: 'POST',
                body: JSON.stringify({
                    username: player.username, 
                    score: player.score
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            });
    
            if (response.status === 200) {
                console.log('Score has been saved');
                history.push('/leaderboard');
            } else {
                console.error('Failed to save score:', response.statusText);
            }
        } catch (error) {
            console.error('Error while saving score:', error);
        }
    };

    return(
        <Container>
            <div>
                <h2>The game has ended!</h2>
                <div className="score-container">
                <h3>Game scores</h3>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Player name</th>
                                <th>Score</th>
                            </tr>
                        </thead>
                        <tbody>
                            {players.map((player, index) =>
                                <tr key={index}>
                                    <td>{player.username}</td>
                                    <td>{player.score}</td>
                                </tr>
                            )}
                        </tbody>
                    </Table>
                </div>

                <div className="save-score-container">
                    <h3>Save score to leaderboard</h3>
                    <Form onSubmit={handleSubmit} method="POST">
                        <input disabled={true} readOnly defaultValue={player.username} className="form-control"/>
                        <input disabled={true} readOnly defaultValue={player.score} className="form-control"/>
                        <Button variant="primary" type="submit">Save score</Button>
                    </Form>
                </div>
                <p>Don't leave, if you want to play again!</p>
                <a href="/">Leave room</a>
            </div>
        </Container>
    );
};

export default EndGame;