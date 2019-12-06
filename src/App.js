import React from 'react';
import './App.css';

class App extends React.Component{

  state = {
    clicks:0,
  }
  incrementItem = () => {
    this.setState ({clicks: this.state.clicks + 1})
  }
  decrementItem = () => {
    this.setState ({clicks: this.state.clicks - 1})
  }

  render(){
    return(
      <div>
      <h1>{this.state.clicks}</h1>
        <button onClick={this.incrementItem}>Increment</button>
        <button onClick={this.decrementItem}>Decrement</button>
      </div>
    )
  }

}

export default App;
