<<<<<<< HEAD
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
=======

import './App.css'
import { Navbar } from './components/Navbar/Navbar'
import TopBar from './components/TopBar'

function App() {
 

  return (
    <div className='font-inter'>
    <Navbar/>
    <TopBar/>
    </div>
  )
}

export default App
>>>>>>> 0dd443b51f4731073361fab940e498f57d14bff5
