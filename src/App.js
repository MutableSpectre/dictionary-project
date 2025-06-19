import logo from "./logo.png"
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <footer className="text-center">
          Coded by <a href="https://github.com/MutableSpectre">Stephanie Ratliff-Putney</a>,
          hosted on <a href="https://dictionary-shecodes-project.netlify.app/">Netlify</a>,
          and open sourced on <a href="https://github.com/MutableSpectre/dictionary-project.git">Github</a>.
        </footer>
      </div>
    </div>
  );
}
