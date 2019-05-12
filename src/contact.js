import React from "react";
import Input from "./input";

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
    e.preventDefault();
    //send an email to my email id
    // window.open(
    //   "mailto:dhirajindurthy@gmail.com?subject=" +
    //     this.state.subValue +
    //     "&body=" +
    //     this.state.matterValue
    // );
    // location.href=
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
            </div>
            <button
              type="submit"
              disabled={!isEnabled}
              onClick={this.onClick}
              className={!isEnabled ? "disabled" : ""}
            > 
              Send Email
            </button>
          </fieldset>
        </form> */}
        <dl>
          <dt>Email ID</dt>
          <dd>dhirajindurthy@gmail.com</dd>
        </dl>
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
            <li>
              <a
                href="https://linkedin.com/in/dhiraj-indurthy-43b747183"
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
            </li>
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
