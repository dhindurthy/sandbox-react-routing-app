import React from "react";

function Services(props) {
  return (
    <section className="services-page">
      <h1 className="main-page-heading">
        Dhiraj and his Work, Services, Specialization
      </h1>
      {/* <meta name="description" content="Your meta description goes here" /> */}
      <h2>About</h2>
      <p tabindex="0">
        Dhiraj Indurthy is a self taught programmer and a Master's Degree
        graduate. Excelled in building User Interfaces to a state where any kind
        of web content can be handled including retail, educational, financial,
        small business websites. Skilled with over 7 years of experience that
        involves building, editing and optimizing websites. Additionally, very
        passionate about Web Accessibility to show love for all users by
        providing extra help in case of disabilities including those users who
        have visual, auditory, motor or cognitive disabilities. Visit the{" "}
        <a
          className="inline-link"
          href="https://linkedin.com/in/dhiraj-indurthy-43b747183"
          rel="noopener noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>{" "}
        profile for more details regarding technology stacks and institutions
        dealt with in the past.
      </p>
      <section className="familiar-services-sections">
        <section>
          <h2>Technological Acquaintance</h2>
          <dl tabindex="0">
            <dt>Programming Languages</dt>
            <dd>JavaScript, HTML, CSS</dd>
            <dt>JavaScript Frameworks</dt>
            <dd>EmberJS, ReactJS, AngularJS</dd>
            <dt>Web Accessibility</dt>
            <dd>WCAG 2.0, WAI ARIA</dd>
            {/* Web Content Accessibility Guidelines  */}
            <dt>Content Management System</dt>
            <dd>WordPress</dd>
          </dl>
        </section>
        <section>
          <h2>Services</h2>
          <ul tabindex="0">
            <li>User Interface Development</li>
            <li>Website Consultation</li>
          </ul>

          <h2>Specialization</h2>
          <dl tabindex="0">
            <dt>Web Accessibility Development</dt>
            <dd>Screen Reader Compatibility</dd>
            <dd>Keyboard Navigation</dd>
            <dd>Color Contrast and Text Zoom</dd>
            <dt>Auditing Website Accessibility</dt>
            <dd>Tests to detect the Accessibility violations</dd>
          </dl>
        </section>
      </section>
    </section>
  );
}

export default Services;
