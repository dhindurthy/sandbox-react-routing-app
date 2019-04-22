import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Landing(props) {
  return (
    <section className="landing-page">
      <div className="jumbotron">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud velit esse cillum dolore eu fugiat
        </p>
        {/* <img
          alt="random-img"
          src={"https://picsum.photos/200/300/?random"}
          height="200px"
          width="350px"
        /> */}
        {/* only for non-phone */}
      </div>
      <section className="quick-view-articles">
        <article className="mini-jumbotron">
          {/* <h5>What are my services</h5> */}
          <p>Lorem ipsum dolor sit amet, conse ctetur adip iscing elit</p>
          <Link to="/services">Services</Link>
        </article>
        <article className="mini-jumbotron">
          {/* <h5>Something about me</h5> */}
          <p>Lorem ipsum dolor sit amet, conse ctetur adip iscing elit</p>
          <Link to="/about">About</Link>
        </article>
        <article className="mini-jumbotron">
          {/* <h5>Some of my code in live</h5> */}
          <p>Lorem ipsum dolor sit amet, conse ctetur adip iscing elit</p>
          <Link to="/codesamples">Codesamples</Link>
        </article>
      </section>
    </section>
  );
}

export default Landing;
