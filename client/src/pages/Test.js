import React,{useEffect} from 'react';
import io from 'socket.io-client';
import AnswerTime from '../components/AnswerTime/AnswerTime';

let socket;

const Home = () => {

    const server = 'localhost:5000';
    socket = io.connect(server);

    useEffect(() => {
    // Envoyer un événement pour démarrer le minuteur
socket.emit('startTimer');

// Écouter les événements du serveur
socket.on('timerTick', (countdown) => {
    console.log('Temps restant :', countdown);
    // Mettre à jour l'interface utilisateur avec le temps restant
});

socket.on('timerEnd', () => {
    console.log('Le minuteur est terminé');
});
}, [server]);

const handleTimeUp = () => {
  
  };


return(<AnswerTime  />)
}




export default Home