import React from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";

function Landing(props) {
  return (
    <section className="landing-page">
      <h1 className="landing-hello">
        Hello, this is Dhiraj Indurthy, a programmer.
      </h1>
      <section className="quick-view-articles">
        <article className="mini-jumbotron">
          <p>
            Now you are entitled to have many questions which might include the
            following like - What about him? What are his qualifications? What
            is his experience with the many various technologies? What services
            does he provide?
          </p>
          <Link to="/services">All About It</Link>
          <span style={{ float: "right" }}> #dhindurthy</span>
        </article>
        <article className="mini-jumbotron">
          <p>
            You can find some of the various code samples I have built over
            time.
          </p>
          <Link to="/codesamples">Code Samples</Link>
        </article>
      </section>
    </section>
  );
}

export default Landing;
