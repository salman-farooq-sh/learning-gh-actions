import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The build and deployment on {process.env.REACT_APP_BUILD_DATE} at {process.env.REACT_APP_BUILD_TIME} worked!
        </p>
      </header>
    </div>
  );
}

export default App;
