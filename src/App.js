import { useState, useEffect } from 'react';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useContext } from "react";
import { themeContext } from "./context/themeContext.jsx";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const [showSplash, setShowSplash] = useState(true)

  useEffect(() => {
    setTimeout(() => {
       setShowSplash(false)
    }, 3000)
 }, [])


  return (
    showSplash ? <HomePage /> :(
    <div
    className="App"
    style={{
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}
  >
      <NavBar/>
      <Intro/>
      <AboutMe/>
      <Experience/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>)
  );
}

export default App;
