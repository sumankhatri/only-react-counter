import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React',
      counter: 0
    };
  }

  incrementCounter = () => {
    this.setState({counter: this.state.counter+1})
  }
  decrementCounter = () => {
    this.setState({counter: this.state.counter-1})
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <h1>{this.state.counter}</h1>
        <button onClick={() => this.incrementCounter()} >increment counter</button>
        <button onClick={() => this.decrementCounter()} >decrement counter</button>
        
        
      </div>
      //<COunter
        //Header
        //sideNav
        //Main content of page
        //footer
    );
  }
}

render(<App />, document.getElementById('root'));
