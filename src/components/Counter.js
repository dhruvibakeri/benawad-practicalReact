import React from "react";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      visible: true,
    };
  }

  handleButtonClickInc = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  handleButtonClickDec = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  componentWillUnmount() {
    console.log("unmounting ...");
  }

  componentDidMount() {
    console.log("mounting ...");
  }

  render() {
    const buttonText = this.state.visible
      ? "change to decrement"
      : "change to increment";

    const counter = this.state.visible ? (
      <button onClick={this.handleButtonClickInc}>increment</button>
    ) : (
      <button onClick={this.handleButtonClickDec}>decrement</button>
    );
    return (
      <div>
        <div>count: {this.state.count}</div>
        {counter}
        <br />
        <button
          onClick={() => {
            this.setState({
              visible: !this.state.visible,
            });
          }}
        >
          {buttonText}
        </button>
        <br />
      </div>
    );
  }
}
