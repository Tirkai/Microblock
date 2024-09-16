import "./App.css";
import { Card } from "./components/Card/Card";

function App() {
  const guid = crypto.randomUUID()

  return <Card>{guid}</Card>;
}

export default App;
