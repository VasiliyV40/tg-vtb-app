import './App.css';
import {useEffect} from "react";
import Header from "./components/Header";

const tg = window.Telegram.WebApp;

function App() {

  useEffect(() => {
    tg.ready();
  }, [])




  return (
    <div className="App">
      <Header/>
    </div>
  );
}

export default App;
