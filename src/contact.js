import React from "react";
import Accordion from "./accordion";
// import Nodemailer from "nodemailer";
//"mail":"0.2.3"
//"node-mailer":"6.1.1"

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className="contact-page">
        <h1 className="main-page-heading">Contact Form and Public Profiles</h1>
        <section className="follow-me-section">
          <div className="linkedin-link">
            <h2>Email me via LinkedIN:</h2>
            <a
              href="https://linkedin.com/in/dhiraj-indurthy-43b747183"
              rel="noopener noreferrer"
              target="_blank"
              className="linkedin-a"
            >
              <span>my-linkedin</span>
              <i className="fab fa-linkedin" />
            </a>
          </div>
          <div>
            <h2>Follow me and view more code samples at:</h2>
            <ul className="follow-me follow-me-menu">
              <li role="presentation">
                <a
                  href="https://github.com/dhindurthy"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  GitHub
                </a>
              </li>
              <li role="presentation">
                <a
                  href="https://gist.github.com/dhindurthy"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Gist
                </a>
              </li>
              {/* <li>
              
            </li> */}
              <li role="presentation">
                <a
                  href="https://codesandbox.io/u/dhindurthy"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  CodeSandbox
                </a>
              </li>
              <li role="presentation">
                <a
                  href="https://codepen.io/dhindurthy/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  CodePen
                </a>
              </li>
            </ul>
          </div>
        </section>
        <section className="faq">
          <h2>Frequently Asked Questions:</h2>
          <Accordion heading="What technologies do I use to build the website?">
            <dl>
              <dt>Programming Languages</dt>
              <dd>JavaScript, HTML, CSS</dd>
              <dt>JavaScript Frameworks</dt>
              <dd>EmberJS, ReactJS, AngularJS</dd>
              <dt>Web Accessibility</dt>
              <dd>WCAG 2.0, WAI ARIA</dd>
              <dt>Content Management System</dt>
              <dd>WordPress</dd>
            </dl>
            <p>
              In addition to the above, I always try t stay abreast of new
              technologies.
            </p>
          </Accordion>
          <Accordion heading="Do I work with mobile devices?">
            <p>
              The website will of course be mobile friendly automatically. Which
              means, the same website can be viewed on tablet and phone and you
              can notice the layout adjust seamlessly. However, if you are
              thinking of mobile application (Apps) that is not the case.
            </p>
          </Accordion>
          <Accordion heading="How would the communication process work?">
            <p>
              I will be continuosly communicating with the owner of the website
              all along the process. It is through email/ phone and video
              conference/ screen sharing.
            </p>
          </Accordion>
          <Accordion heading="What is the duration and pricing for getting the website up?">
            <p>
              It all depends on the project. I am open to have complementary
              consulation for free to sketch out the project. I have worked on
              various kinds and sizes of websites so far including small
              business, educational, financial and retail websites. I have also
              worked on websites that were driven entirely by data, driven by
              behaviour of the user and so on.
            </p>
          </Accordion>
          <Accordion heading="What kind of websites have I worked on in the past?">
            <p>Please visit the above question to know that.</p>
          </Accordion>
        </section>
      </section>
    );
  }
}
export default Contact;
