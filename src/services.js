import React from "react";

function Services(props) {
  return (
    <section className="services-page">
      <meta name="description" content="Your meta description goes here" />
      <h2>About</h2>
      <p>
        This is a Master's Degree graduate who self taught programming language
        for building User Interfaces. Also, excelled in the same to a state
        where any kind of web content can be handled including retail,
        eductaional, financial, service provider websites. Skilled with over 7
        years of experience in building, editing and optimizing websites.
        Additionally, very passionate about making a website accessible to show
        love and care for all users by providing extra help in case of
        disabilities. Visit the{" "}
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
          <h2>Familiarity with Technologies</h2>
          <dl>
            <dt>Programming Languages</dt>
            <dd>JavaScript, HTML, CSS, CSS3</dd>
            <dt>JavaScript Frameworks</dt>
            <dd>Ember JS, React JS, Angular JS</dd>
            <dt>Web Standards</dt>
            <dd>ES6, HTML 5, Web Content Accessibility Guidelines (WCAG)</dd>
          </dl>
        </section>
        <section>
          <h2>Services</h2>
          <ul>
            <li>User Interface development</li>
            <li>Website Consultation</li>
            <li>Website Edit</li>
          </ul>

          <h2>Speciality Services</h2>
          <dl>
            <dt>Web Accessibility Development(following WCAG).</dt>
            <dd>Screen Reader Compatibility</dd>
            <dd>Keyboard Navigation</dd>
            <dd>Color Contrast and Text Zoom</dd>
            <dt>Auditing Websites for Accessibility</dt>
            <dd>Tests to detect the Accessibility violations</dd>
          </dl>
        </section>
      </section>
    </section>
  );
}

export default Services;
