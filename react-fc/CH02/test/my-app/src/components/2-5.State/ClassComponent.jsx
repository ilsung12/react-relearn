import React, { Component } from 'react'

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() }; // 상태
  }

  componentDidMount() { // 그려지자마자
    this.timerID = setInterval(() => this.tick(), 1000);
  } 

  componentWillUnmount() { // 사라지기 직전에
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  render() { // 그려지는거 (= 함수형return)
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}
