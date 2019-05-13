import React from "react";

function Services(props) {
  return (
    <section className="services-page">
      <meta name="description" content="Your meta description goes here" />
      <h2>About</h2>
      <p>
        This is a self taught programmer who is also a Master's Degree graduate.
        Excelled in building User Interfaces to a state where any kind of web
        content can be handled including retail, eductaional, financial, small
        business websites. Skilled with over 7 years of experience that involves
        building, editing and optimizing websites. Additionally, very passionate
        about Web Accessibility to show love for all users by providing extra
        help in case of disabilities. Visit the{" "}
        <a
          className="inline-link"
          href="https://linkedin.com/in/dhiraj-indurthy-43b747183"
          rel="noopener noreferrer"
          target="_blank"
        >
          LinkedIn
        </a>{" "}
        profile for more details.
      </p>
      <section class="familiar-services-sections">
        <section>
          <h2>Technological Acquaintance</h2>
          <dl>
            <dt>Programming Languages</dt>
            <dd>JavaScript, HTML, CSS</dd>
            <dt>JavaScript Frameworks</dt>
            <dd>EmberJS, ReactJS, AngularJS</dd>
            <dt>Web Accessibility</dt>
            <dd>WCAG, WAI ARIA</dd>
            {/* Web Content Accessibility Guidelines  */}
            <dt>Content Management System</dt>
            <dd>WordPress</dd>
          </dl>
        </section>
        <section>
          <h2>Services</h2>
          <ul>
            <li>User Interface Development</li>
            <li>Website Consultation</li>
          </ul>

          <h2>Specialization Services</h2>
          <dl>
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
