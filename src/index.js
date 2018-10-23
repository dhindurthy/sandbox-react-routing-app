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
                  <h1 className="display-3">Hello page!</h1>
                </div>
              );
            }}
          />
          <Route
            path="/about"
            render={() => {
              return (
                <div className="jumbotron">
                  <h1 className="display-3">About page!</h1>
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
                  <h1 className="display-3">Home page!</h1>
                </div>
              );
            }}
          />
        </div>
      </div>
    </Router>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
