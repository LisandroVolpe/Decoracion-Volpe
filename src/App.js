import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <nav>
			<ul>
				<li><a href="">Home</a></li>
				<li><a href="l">Nuevo</a></li>
				<li><a href="">Productos</a></li>
				<li><a href="">Contacto</a></li>
			</ul>
		</nav>
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
