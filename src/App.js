import './App.css';
import {useEffect} from "react";
import Header from "./components/Header";
import {useTelegram} from "./hooks/useTelegram";

const {tg, onToggleButton} = useTelegram()

function App() {

  useEffect(() => {
    tg.ready();
  }, [])




  return (
    <div className="App">
      <Header/>
      <button onClick={onToggleButton}>toggle</button>
    </div>
  );
}

export default App;
