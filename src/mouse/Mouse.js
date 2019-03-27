import React from "react";

export default class Mouse extends React.Component {
  constructor(props) {
    super(props);
    this.state = { x: 0, y: 0 };
  }
  handleOnMouseMove = event => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  };
  handleOnTouchMove = event => {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  };
  render() {
    const { render } = this.props;
    const position = this.state;
    return (
      <div
        style={{ height: "100vh" }}
        onTouchMove={this.handleOnTouchMove}
        onMouseMove={this.handleOnMouseMove}
      >
        {render(position)}
      </div>
    );
  }
}
