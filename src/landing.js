import React from "react";
import { BrowserRouter as Route, Link } from "react-router-dom";

function Landing(props) {
  return (
    <section className="landing-page">
      <div className="jumbotron">
        {/* <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud velit esse cillum dolore eu fugiat
        </p> */}
        <img
          alt="put something"
          src={"./programming"}
          // https://picsum.photos/200/300/?random
          className="landing-image"
        />
        {/* or background image for .landing-page ,only for non-phone */}
      </div>
      <section className="quick-view-articles">
        <article className="mini-jumbotron">
          <p>
            Now you are entitled to have questions which may include the
            following like - What about me? What are my qualifications? What is
            my experience with the many various technologies? What services do I
            provide?
            {/* <span
              style={{
                fontFamily: "'Oswald', sans-serif",
                fontSize: "1.25rem"
              }}
            > dhindurthy</span> */}
          </p>
          <Link to="/services">All About It</Link>
          <span style={{ float: "right" }}> #dhindurthy</span>
        </article>
        <article className="mini-jumbotron">
          {/* <h4>dhindurthy</h4> */}
          <p>
            You can find some of the various code samples I have built over
            time.
          </p>
          <Link to="/codesamples">Code Samples</Link>

          {/* <span> #dhindurthy</span> */}
        </article>
      </section>
    </section>
  );
}

export default Landing;
