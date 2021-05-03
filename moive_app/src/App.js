import React from "react";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };
  componentDidMount() {
    // render()가 실행되면 가장 먼저 실행된다.
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
  }
  render() {
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }
}

export default App;
