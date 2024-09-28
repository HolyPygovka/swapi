import logo from './logo.svg';
import './App.css';
import swapiService from '../../services/swapiService.js';
import HeaderSection from '../HeaderSection/HeaderSection.jsx';

const swapi = new swapiService();
swapi.getAllCharecters();
swapi.getAllResources();

function App() {
  return (
    <div className="App">
      <HeaderSection/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit1 <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
