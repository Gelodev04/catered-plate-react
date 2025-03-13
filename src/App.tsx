import "./App.css";
import { Navbar } from "./components/Header/Navbar";
import TopBar from "./components/Header/TopBar";
import Event from "./components/sections/events/Event";
import Home from "./components/sections/home/Home";

function App() {
  return (
    <div className="font-display">
      <TopBar />
      <Navbar />
      <Home />
      <Event/>
      <div className="h-screen a"></div>
    </div>
  );
}

export default App;


