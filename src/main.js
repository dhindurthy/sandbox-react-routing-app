import React from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";

function Main(props) {
  return (
    <section className="main-page">
      <h1 className="main-hello">
        Hello, this is <span>Dhiraj Indurthy</span>, a web programmer.
      </h1>
      <section className="quick-view-articles">
        <article className="mini-jumbotron">
          <p tabindex="0">
            Now you are entitled to have many questions like - What about him?
            What are his qualifications and experience with the countless
            technologies? How is he special from other web developers?
          </p>
          <Link to="/services">Everything you should know</Link>
          <span className="tagname"> #dhindurthy</span>
        </article>
        <article className="mini-jumbotron">
          <p tabindex="0">
            You can see some of the assorted{" "}
            <Link to="/codesamples" className="inline-codesample-link">
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
