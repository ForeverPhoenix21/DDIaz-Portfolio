import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Navbar";
import "./App.css";
// import Topbar from "./components/Topbar";
import Home from "./pages";

function App() {
  return (
    <>
      <div className="Routes">
        <Routes>
          <Route path="/DDiaz-Portfolio" element={<Home />}></Route>
        </Routes>
      </div>
      {/* <Footer /> */}
    </>
  );
}

export default App;
