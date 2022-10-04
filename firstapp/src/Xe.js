import React from "react";
class Xe extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: this.props.color, value: this.props.value };
  }
  render() {
    return <h2 style={{ color: this.state.color }}>Hi! {this.state.value}!</h2>;
  }
}
