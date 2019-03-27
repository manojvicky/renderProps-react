import React from "react";

export default class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }
  handleOnMouseMove = event => {
    this.props.position({
      x: event.clientX,
      y: event.clientY
    });
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  };
  render() {
    console.log("==state", this.state);
    return (
      <div style={{ height: "60vh" }} onMouseMove={this.handleOnMouseMove}>
        <p>
          x: <span>{this.state.x}</span> and y: <span>{this.state.y}</span>
        </p>
      </div>
    );
  }
}
