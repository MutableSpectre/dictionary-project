import logo from "./logo.png";
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>Coded by <a href="https://github.com/MutableSpectre">Stephanie Ratliff-Putney</a>,
          hosted on <a href="https://dictionary-shecodes-project.netlify.app/">Netlify</a>,
          and open sourced on <a href="https://github.com/MutableSpectre/dictionary-project.git">Github</a>.</small>
        </footer>
      </div>
    </div>
  );
}
