import React from "react";
import ReactDOM from "react-dom";
import Contact from "./contact";
import Landing from "./landing";
import Services from "./services";
import Codesamples from "./codesamples";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./stlye.scss";
import "./contact.scss";
import "./services.scss";

function App() {
  return (
    <Router>
      <section className="App">
        <section className="container">
          <header>
            <nav>
              <ul role="menubar" className="navigation nav-list">
                <li>
                  <Link role="menuitem" to="/landing">
                    di
                  </Link>
                </li>
                <li>
                  <Link role="menuitem" to="/services">
                    Work
                  </Link>
                </li>
                <li>
                  <Link role="menuitem" to="/codesamples">
                    Code
                  </Link>
                </li>
                <li>
                  <Link role="menuitem" to="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
          <main>
            <Route path="/landing" component={Landing} />
            <Route path="/services" component={Services} />
            <Route path="/codesamples" component={Codesamples} />
            <Route path="/contact" component={Contact} />
            <Route path="/" exact={true} component={Landing} />
          </main>
          <footer>
            <ul role="menubar" className="navigation footer-list">
              <li>
                <a role="menuitem" href="https://www.w3schools.com">
                  G
                </a>
              </li>
              <li>
                <a role="menuitem" href="https://www.w3schools.com">
                  Gg
                </a>
              </li>
              <li>
                <a role="menuitem" href="https://www.w3schools.com">
                  L
                </a>
              </li>
              <li>
                <a role="menuitem" href="https://www.w3schools.com">
                  CS
                </a>
              </li>
              <li>
                <a role="menuitem" href="https://www.w3schools.com">
                  CP
                </a>
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
