import logo from "./images/bibliophile.svg";
import Dictionary from "./components/Dictionary";
import Developer from "./components/Developer";
import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <a href="/">
            <br></br>
            <h1>React Dictionary App</h1> <br></br> <br></br>
          </a>
        </header>

        <main>
          <Dictionary keyword="heart" />
        </main>
        <footer>
          <Developer />
        </footer>
      </div>
    </div>
  );
}

export default App;
