import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import JoinGame from './components/JoinGame/JoinGame';
import GamePlayer from './components/GamePlayer/GamePlayer';
import Leaderboard from './components/Leaderboard/Leaderboard';
import CreateQuiz from './pages/CreateQuiz';
import ListeQuiz from './pages/ListeQuiz';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './pages/Test';
import GameMaster from './components/GameMaster/GameMaster';





function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <main>
        <Switch>
          <Route path="/" exact component={JoinGame} />
          <Route path="/home" exact component={Home} />
          <Route path="/gamemaster" component={GameMaster} />
          <Route path="/gameplayer" component={GamePlayer} />
          <Route path="/leaderboard" component={Leaderboard} />
          <Route path="/admin/quizz/add" component={CreateQuiz} />
          <Route path="/admin/quizz/list" component={ListeQuiz} />
        </Switch>
      </main>
      </BrowserRouter>
    </div>
  );
};

export default App;