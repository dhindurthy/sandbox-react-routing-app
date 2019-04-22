import React from "react";
import ReactDOM from "react-dom";
import Contact from "./contact";
import Landing from "./landing";
import Services from "./services";
import About from "./about";
import Codesamples from "./codesamples";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./stlye.scss";

function App() {
  return (
    <Router>
      <section className="App">
        <section className="container">
          <header>
            <nav>
              <ul className="navigation nav-list">
                <li>
                  <Link to="/landing">DI</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/codesamples">Codesamples</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
          </header>
          <main className="restbody">
            <Route path="/landing" component={Landing} />
            <Route path="/services" component={Services} />
            <Route path="/about" component={About} />
            <Route path="/codesamples" component={Codesamples} />
            <Route path="/contact" component={Contact} />
            <Route path="/" exact={true} component={Landing} />
          </main>
          <footer>
            <ul className="navigation footer-list">
              <li>
                <a href="https://www.w3schools.com">G</a>
              </li>
              <li>
                <a href="https://www.w3schools.com">Gg</a>
              </li>
              <li>
                <a href="https://www.w3schools.com">L</a>
              </li>
              <li>
                <a href="https://www.w3schools.com">CS</a>
              </li>
              <li>
                <a href="https://www.w3schools.com">CP</a>
              </li>
            </ul>
          </footer>
        </section>
      </section>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
