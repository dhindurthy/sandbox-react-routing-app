import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
    console.log("componentDidMount Clock");
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
    console.log("componentWillUnmount Clock");
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <section>
        <h5>Contacting stuff</h5>
        <h5>Follow on .... stuff</h5>
        {/* <h2>It is {this.state.date.toLocaleTimeString()}.</h2> */}
      </section>
    );
  }
}

export default Contact;
