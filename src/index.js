import React from "react";
import ReactDOM from "react-dom";
import Contact from "./contact";
import Main from "./main";
import Services from "./services";
import Codesamples from "./codesamples";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./stlye.scss";
import "./main.scss";
import "./services.scss";
import "./codesamples.scss";
import "./contact.scss";

function App() {
  const onArrowHit = e => {
    // console.log(e.keyCode);
    if (e.keyCode === 39) {
      e.target.parentElement.nextSibling.firstElementChild.focus();
    }
    if (e.keyCode === 37) {
      e.target.parentElement.previousSibling.firstElementChild.focus();
    }
  };

  return (
    <Router>
      <section className="App">
        <section className="container">
          <header>
            <nav>
              <ul role="menubar" className="navigation nav-list">
                <li role="presentation">
                  <Link
                    tabIndex="0"
                    role="menuitem"
                    to="/main"
                    onKeyDown={onArrowHit}
                  >
                    Main
                  </Link>
                </li>
                <li role="presentation">
                  <Link
                    tabIndex="0"
                    role="menuitem"
                    to="/services"
                    onKeyDown={onArrowHit}
                  >
                    Profile
                  </Link>
                </li>
                <li role="presentation">
                  <Link
                    tabIndex="0"
                    role="menuitem"
                    to="/codesamples"
                    onKeyDown={onArrowHit}
                  >
                    Code
                  </Link>
                </li>
                <li role="presentation">
                  <Link role="menuitem" to="/contact" onKeyDown={onArrowHit}>
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </header>
          <main>
            <Route path="/main" component={Main} />
            <Route path="/services" component={Services} />
            <Route path="/codesamples" component={Codesamples} />
            <Route path="/contact" component={Contact} />
            <Route path="/" exact={true} component={Main} />
          </main>
          <footer>
            <nav>
              <ul role="menubar" className="navigation footer-list">
                <li role="presentation">
                  <a
                    role="menuitem"
                    href="https://github.com/dhindurthy"
                    rel="noopener noreferrer"
                    target="_blank"
                    onKeyDown={onArrowHit}
                  >
                    GitHub
                  </a>
                </li>
                {/* <li role="presentation">
                <a
                  role="menuitem"
                  href="https://gist.github.com/dhindurthy"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Gist
                </a>
              </li> */}
                <li role="presentation">
                  <a
                    role="menuitem"
                    href="https://codesandbox.io/u/dhindurthy"
                    rel="noopener noreferrer"
                    target="_blank"
                    onKeyDown={onArrowHit}
                  >
                    CodeSandbox
                  </a>
                </li>
                <li role="presentation">
                  <a
                    role="menuitem"
                    href="https://codepen.io/dhindurthy/"
                    rel="noopener noreferrer"
                    target="_blank"
                    onKeyDown={onArrowHit}
                  >
                    CodePen
                  </a>
                </li>
              </ul>
            </nav>
          </footer>
        </section>
      </section>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
