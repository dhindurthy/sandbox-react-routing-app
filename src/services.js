import React from "react";

function Services(props) {
  return (
    <section className="services-page">
      <h1 className="main-page-heading">
        Dhiraj and his Work, Services, Specialization
      </h1>
      <section className="about-section">
        <section className="about-paras">
          <h2>About</h2>
          <p tabIndex="0">
            I am a self taught programmer and a Master's Degree graduate in
            Engineering. Excelled in planning and analysis, building, testing
            and maintaining User Interfaces to a state where any kind of web
            content can be handled including retail, educational, financial and
            small business websites. Skilled with over 7 years of experience
            that involves implementing, editing and optimizing websites.
          </p>
          <p tabIndex="0">
            I am very passionate about Web Accessibility and treat it as a way
            to show love for all users by providing extra help regardless of
            ability of the user. This includes users who have visual, auditory,
            motor or cognitive disabilities irrespective of the type or severity
            of impairment. I also give talks to enlighten programmers about the
            significance of accessibility in web. Please feel free to get in
            touch to strike up a conversation about web accessibility.
          </p>
        </section>
        <section className="collab-paras">
          <h2>Collaboration</h2>
          <p tabIndex="0">
            Please visit my{" "}
            <a
              className="inline-link"
              href="https://linkedin.com/in/dhiraj-indurthy-43b747183"
              rel="noopener noreferrer"
              target="_blank"
            >
              LinkedIn
            </a>{" "}
            profile for more details regarding technology stacks and
            institutions dealt with in the past. Please contact me if you think
            I would be a good match to team up for your project involving any of
            the mentioned services and the specializations.
          </p>
          {/* <h2>Technological Acquaintance</h2>
          <dl tabindex="0">
            <dt>Programming Languages</dt>
            <dd>JavaScript, HTML, CSS</dd>
            <dt>JavaScript Frameworks</dt>
            <dd>EmberJS, ReactJS, AngularJS</dd>
            <dt>Web Accessibility</dt>
            <dd>WCAG 2.0, WAI ARIA</dd>
            <dt>Content Management System</dt>
            <dd>WordPress</dd>
          </dl> */}
          <h2>Services</h2>
          <ul tabindex="0">
            <li>User Interface Implementation</li>
            <li>Testing and Maintaining Websites</li>
            <li>Website Consultation</li>
          </ul>
          <h2>Specialization</h2>
          <dl tabindex="0">
            <dt>Web Accessibility Implementation</dt>
            <dd>Screen Reader Compatibility</dd>
            <dd>Keyboard Navigation</dd>
            <dd>Color Contrast, Text Zoom etc.</dd>
            <dt>Auditing Website Accessibility</dt>
            <dd>Testing for Accessibility Violations</dd>
          </dl>
        </section>
      </section>
      <section className="familiar-services-sections">
        <section className="technologies">
          {/* <h2>Services</h2>
          <ul tabindex="0">
            <li>User Interface Implementation</li>
            <li>Testing and Maintaining Websites</li>
            <li>Website Consultation</li>
          </ul> */}
        </section>
        <section className="services">
          {/* <h2>Specialization</h2>
          <dl tabindex="0">
            <dt>Web Accessibility Implementation</dt>
            <dd>Screen Reader Compatibility</dd>
            <dd>Keyboard Navigation</dd>
            <dd>Color Contrast, Text Zoom etc.</dd>
            <dt>Auditing Website Accessibility</dt>
            <dd>Testing for Accessibility Violations</dd>
          </dl> */}
        </section>
      </section>
    </section>
  );
}

export default Services;
