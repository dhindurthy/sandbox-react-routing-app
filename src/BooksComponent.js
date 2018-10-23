import React from "react";
import ReactDOM from "react-dom";

// function Welcome(props) {
//   return <h1>Give the books, {props.name}</h1>;
// }

// const element = <Welcome name="Sara" />;

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// );
// ReactDOM.render(element, document.getElementById("root"));

const Books = props => {
  // return <h1>Hello, {props.name}</h1>;
  return <Clock />;
};
export default Books;
