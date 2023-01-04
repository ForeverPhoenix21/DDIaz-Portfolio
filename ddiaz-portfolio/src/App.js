import './App.css';
import { Routes, Route } from "react-router-dom";
import NavBar from './components/layout/navigation/navBar';
import HeroBanner from './components/layout/landingPage/heroBanner';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path = "/" element = {<HeroBanner/>} ></Route>
      </Routes>
    </div>
  );
}

export default App;
