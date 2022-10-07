
import './App.css';
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import Services from './components/Services';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { useContext } from "react";
import { themeContext } from "./context/themeContext.jsx";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
    className="App"
    style={{
      background: darkMode ? "black" : "",
      color: darkMode ? "white" : "",
    }}
  >
      <NavBar/>
      <Intro/>
      <Services/>
      <Experience/>
      <Portfolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
