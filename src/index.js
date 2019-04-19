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
              <ul class="nav-list">
                <li>
                  <Link to="/landing">#</Link>
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
          <main class="restbody">
            <Route path="/landing" component={Landing} />
            <Route path="/services" component={Services} />
            <Route path="/about" component={About} />
            <Route path="/codesamples" component={Codesamples} />
            <Route path="/contact" component={Contact} />
            <Route path="/" exact={true} component={Landing} />
            {/* <Route
            path="/"
            exact={true}
            render={() => {
              return (
                <h1 className="display-3">Home page!</h1>
              );
            }}
          /> */}
          </main>
          <footer>
            <ul class="footer-list">
              <li>L</li>
              <li>G</li>
              <li>Gg</li>
              <li>CS</li>
              <li>CP</li>
            </ul>
          </footer>
        </section>
      </section>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
