import React from "react";
import ReactDOM from "react-dom";
import Books from "./BooksComponent";
//import Link from "next/link";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import "./styles.css";

function App() {
  return (
    // export default () => (
    <Router>
      <div className="App">
        <div className="container">
          <ul>
            <li>
              <Link to="/hello">Hello</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/books">Books</Link>
            </li>
          </ul>
          <hr />
          <Route
            path="/hello"
            render={() => {
              return (
                <div className="jumbotron">
                  <h1 className="display-3">Hello, world!</h1>
                </div>
              );
            }}
          />

          <Route
            path="/about"
            render={() => {
              return (
                <div className="jumbotron">
                  <h1 className="display-3">About It I know, yes!</h1>
                </div>
              );
            }}
          />

          <Route path="/books" component={Books} />
          <Route
            path="/"
            exact={true}
            render={() => {
              return (
                <div className="jumbotron">
                  <h1 className="display-3">Hello, from home page!</h1>
                </div>
              );
            }}
          />
        </div>
      </div>
    </Router>
    // )
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
