import React from "react";
import Input from "./input";
import Nodemailer from "nodemailer";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unameValue: "",
      unameError: "",
      unameInvalid: false,
      emailValue: "",
      emailError: "",
      emailInvalid: false,
      subValue: "",
      subError: "",
      subInvalid: false,
      matterValue: ""
    };
    this.onUnameChange = this.onUnameChange.bind(this);
    this.onUnameBlur = this.onUnameBlur.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onEmailBlur = this.onEmailBlur.bind(this);
    this.onSubChange = this.onSubChange.bind(this);
    this.onSubBlur = this.onSubBlur.bind(this);
    this.onMatterChange = this.onMatterChange.bind(this);
    this.onMatterBlur = this.onMatterBlur.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  onUnameChange(e) {
    this.setState({ unameValue: e.target.value });
  }
  onUnameBlur = e => {
    const value = e.target.value;
    this.setState({
      unameError: "",
      unameInvalid: false
    });
    if (value.length === 0) {
      this.setState({
        unameError: "User name field is empty, please enter something",
        unameInvalid: true
      });
    } else if (!value.match("[A-Za-z]+")) {
      this.setState({
        unameError: "User name has wrong format, please enter only letters",
        unameInvalid: true
      });
    }
  };
  onEmailChange(e) {
    this.setState({ emailValue: e.target.value });
  }
  onEmailBlur = e => {
    const value = e.target.value;
    this.setState({
      emailError: "",
      emailInvalid: false
    });
    if (value.length === 0) {
      this.setState({
        emailError: "Password empty, please enter something",
        emailInvalid: true
      });
    } else if (!value.match("^(?=.*?[a-z])(?=.*?[@.]).{5,}$")) {
      /**
       * At least one upper case english letter, (?=.*?[A-Z])
        At least one lower case english letter, (?=.*?[a-z])
        At least one digit, (?=.*?[0-9])
        At least one special character, (?=.*?[@])
       */
      this.setState({
        emailError: "Email has wrong format.",
        emailInvalid: true
      });
    }
  };

  onSubChange(e) {
    this.setState({ subValue: e.target.value });
  }
  onSubBlur = e => {
    const value = e.target.value;
    this.setState({
      subError: "",
      subInvalid: false
    });
    if (value.length === 0) {
      this.setState({
        subError: "Subject field is empty, please enter something",
        subInvalid: true
      });
    } else if (!value.match("[A-Za-z]+")) {
      this.setState({
        subError: "Subject has wrong format, please enter only letters",
        subInvalid: true
      });
    }
  };
  onMatterChange(e) {
    this.setState({ matterValue: e.target.value });
  }
  onMatterBlur = e => {};
  onClick = e => {
    // e.preventDefault();
    //send an email to my email id
    // window.open(
    //   "mailto:dhirajindurthy@gmail.com?subject=" +
    //     this.state.subValue +
    //     "&body=" +
    //     this.state.matterValue
    // );
    // location.href=
    console.log("inside it");
    let nodemailer = Nodemailer;
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        type: "OAuth2",
        user: "dhirajreddy.454.com",
        accessToken: "ya29.Xx_XX0xxxxx-xX0X0XxXXxXxXXXxX0x" //need to genrate one
        //https://ciunkos.com/creating-contact-forms-with-nodemailer-and-react
      }
    });

    let mailOptions = {
      from: "youremail@gmail.com",
      to: "dhirajreddy.454@gmail.com",
      subject: "Sending Email using Node.js",
      text: "That was easy!"
    };
    const sendMail = message => {
      return new Promise((resolve, reject) => {
        console.log("doing it");
        transporter.sendMail(mailOptions, function(error, info) {
          if (error) {
            console.log("doing error it");
            console.log(error);
          } else {
            console.log("Email sent: " + info.response);
          }
        });
      });
    };
    sendMail(mailOptions);
  };
  render() {
    // const isEnabled =
    //   this.state.unameValue.length > 0 &&
    //   // this.state.emailValue.length > 0 &&
    //   this.state.subValue.length > 0;
    return (
      <section className="contact-page">
        {/* <form>
          <fieldset>
            <legend>Contact Me</legend>
            <Input
              id="uname"
              label="Name"
              type="text"
              inputValue={this.state.unameValue}
              onChange={this.onUnameChange}
              onBlur={this.onUnameBlur}
              isError={this.state.unameError}
              ariaInvalid={this.state.unameInvalid}
            />
            <Input
              id="sub"
              label="Subject"
              type="text"
              inputValue={this.state.subValue}
              onChange={this.onSubChange}
              onBlur={this.onSubBlur}
              isError={this.state.subError}
              ariaInvalid={this.state.subInvalid}
            />
            <div role="presentation" className="textarea-component">
              <label htmlFor="matter">Message</label>
              <textarea
                id="matter"
                value={this.state.matterValue}
                onChange={this.onMatterChange}
                onBlur={this.onMatterBlur}
                rows="10"
                columns="100"
              />
            </div> */}
        {/* <button
          type="submit"
          disabled={!isEnabled}
          onClick={this.onClick}
          className={!isEnabled ? "disabled" : ""}
        >
          Send Email
        </button> */}
        {/* </fieldset>
        </form> */}
        <dl>
          <dt>Email me at</dt>
          {/* <dd>dhirajindurthy@gmail.com</dd> */}
          <dd className="follow-me">
            <a
              href="https://linkedin.com/in/dhiraj-indurthy-43b747183"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i class="fab fa-linkedin" />
            </a>
          </dd>
        </dl>
        {/* <div
          className="LI-profile-badge"
          data-version="v1"
          data-size="medium"
          data-locale="en_US"
          data-type="horizontal"
          data-theme="dark"
          data-vanity="dhiraj-indurthy-43b747183"
        >
          <a
            className="LI-simple-link"
            href="https://www.linkedin.com/in/dhiraj-indurthy-43b747183?trk=profile-badge"
          >
            Dhiraj Indurthy
          </a>
        </div> */}

        <section className="follow-me-section">
          <h3>You can follow me at:</h3>
          <ul className="follow-me">
            <li>
              <a
                href="https://github.com/dhindurthy"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
              </a>
            </li>
            <li>
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
            <li>
              <a
                href="https://codesandbox.io/u/dhindurthy"
                rel="noopener noreferrer"
                target="_blank"
              >
                CodeSandbox
              </a>
            </li>
            <li>
              <a
                href="https://codepen.io/dhindurthy/"
                rel="noopener noreferrer"
                target="_blank"
              >
                CodePen
              </a>
            </li>
          </ul>
        </section>
      </section>
    );
  }
}
export default Contact;
