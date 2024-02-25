import { useEffect, useState } from "react";
import io from 'socket.io-client';
import "./AnswerTime.css";

function AnswerTime() {
    const [progressLoaded, setProgressLoaded] = useState(100);  
    const server = 'localhost:5000';
    let socket;

    useEffect(() => {
        socket = io.connect(server);

        // Écouter les événements du serveur
        socket.on('timerTick', (countdown) => {
            const percentage = (countdown / 20) * 100; 
            setProgressLoaded(100 - percentage); 

            console.log('Le pourcentage côté back'+ percentage );
        });


        socket.on('timerEnd', () => {
            setProgressLoaded(0);
            console.log('Le minuteur est terminé Front');
        });
        return () => {
    
          socket.disconnect();
      };
  }, [server]);

  return (
    <div className="answer-timer-container">
      <div
        style={{
          width: `${progressLoaded}%`,
          backgroundColor: `${
            progressLoaded < 40
              ? "lightgreen"
              : progressLoaded < 70
              ? "orange"
              : "red"
          }`,
        }}
        className="progress"
      ></div>
    </div>
  );
}

export default AnswerTime;
