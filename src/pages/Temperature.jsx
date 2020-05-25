import React, { Component } from "react";

export default class Temperature extends Component {
  state = {
    temperature: null,
    info: undefined,
    color: "blue",
  };

  handleValue = (event) => {
    this.setState({
      temperature: event.target.value,
    });
  };

  render() {
    let temperature = this.state.temperature;
    let info = this.state.info;
    let color = this.state.color;
    if (temperature <= 10) {
      info = "It's cold ❄️";
      color = "blue";
    } else if (temperature > 10 && temperature <= 30) {
      info = "It's nice 🌼";
      color = "black";
    } else if (temperature > 10) {
      info = "It's warm ☀️";
      color = "red";
    }
    console.log(color);
    return (
      <div>
        <h1>Temperature</h1>
        <input
          type="number"
          id="temperature"
          name="temperature"
          onChange={this.handleValue}
          placeholder="temperature in °C"
        />
        {this.state.temperature && <p className={color}>{info}</p>}
      </div>
    );
  }
}
