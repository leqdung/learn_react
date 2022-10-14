import { Component } from "react";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      errorMessage: "",
    };
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({ latitude: position.coords.latitude });
      },
      (error) => {
        this.setState({ errorMessage: error });
      }
    );
  }

  render() {
    return (
      <div>
        {this.state.errorMessage && <h3>{this.state.errorMessage}</h3>}
        {this.state.latitude && <h3>Latitude: {this.state.latitude}</h3>}
      </div>
    );
  }
}

export default App;
