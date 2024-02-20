import Quizz from "./components/Quizz/Quizz";
import { jsQuizz } from "./constants";

function App() {
  return <Quizz questions={jsQuizz.questions} />;
}

export default App;
