import React, { Component } from 'react';

const API_ROOT_PATH = '/api/';

class App extends React.Component {
  state = { displayText: 'React App' };

  async componentDidMount() {
    const response = await fetch(API_ROOT_PATH);
    const data = await response.json();
    this.setState({ displayText: data.text });
  }

  render() {
    const { displayText } = this.state;

    return <div>{displayText}</div>;
  }
}

export default App;
export { API_ROOT_PATH };
