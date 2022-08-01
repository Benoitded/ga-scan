import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Sumup from './components/Sumup';
import Menu from './components/Menu';
import Portfolio from './components/Portfolio';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Header />
    <Sumup />
    <Menu />
    <Portfolio />
    <Footer />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
