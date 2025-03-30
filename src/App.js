import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          This project was coded by{" "}
          <a
            href="https://portfolio-georgia-lee.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Georgia Lee
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/georgia-lee04/dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
