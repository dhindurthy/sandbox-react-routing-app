import React from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";

function Main(props) {
  return (
    <section className="main-page">
      <h1 className="main-hello">
        Hello, I'm <span>Dhiraj Indurthy</span>, website engineer.
      </h1>
      <section className="quick-view-articles">
        <article className="mini-jumbotron">
          <p tabIndex="0">
            Now you are entitled to have many questions like - What about him?
            What are his qualifications and experience with the countless
            technologies? How is he special from other web developers?
          </p>
          <Link to="/services" className="inline-all-link">
            Find it all out
          </Link>
          <span className="tagname"> #dhindurthy</span>
        </article>
        <article className="mini-jumbotron">
          <p tabIndex="0">
            You can see some of the assorted{" "}
            <Link to="/codesamples" className="inline-code-link">
              Code Samples
            </Link>{" "}
            I have built over time.
          </p>
        </article>
      </section>
    </section>
  );
}

export default Main;
