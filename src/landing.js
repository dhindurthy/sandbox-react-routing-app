import React from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";

function Landing(props) {
  return (
    <section className="landing-page">
      <h1 className="landing-hello">
        Hello, this is <span>Dhiraj Indurthy</span>, a programmer.
      </h1>
      <section className="quick-view-articles">
        <article className="mini-jumbotron">
          <p>
            Now you are entitled to have many questions which might include the
            following like - What about him? What are his qualifications and
            experience with the many various technologies? Is he open to
            utilizing the acquired skills to make web a better place, if so,
            what all services are provided?
          </p>
          <Link to="/services">Everything you need to know</Link>
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
