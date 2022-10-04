
import './App.css';
import NavBar from './components/NavBar';
import Intro from './components/Intro';
import Services from './components/Services';
import Experience from './components/Experience';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Intro/>
      <Services/>
      <Experience/>
    </div>
  );
}

export default App;
