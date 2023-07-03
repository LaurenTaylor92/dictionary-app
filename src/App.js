import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>

        <footer className="App-footer">
          {" "}
          <small>
            This project was coded by Lauren Taylor and is open-sourced on{" "}
            <a
              href="https://github.com/LaurenTaylor92/dictionary-app"
              target="_blank"
              rel="noreferrer"
            >
              Github
            </a>
          </small>{" "}
        </footer>
      </div>
    </div>
  );
}

export default App;
