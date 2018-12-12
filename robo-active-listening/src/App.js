import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import  InputGreeting from './InputGreeting'
import BadRobot from './BadRobot'


  class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      greeting:''
    }
  }
  updateGreeeting(e){
  this.setState({greeting: e.target.value})
}

  render() {
    return (
    <div>
      <div>
        <header>
          <h1><u><strong>Robo Active Listening</strong></u></h1>
          <div>
            <Header name1= {this.state.greeting} />
      </div>
      <div>
      <input value={this.state.greeting} onChange={this.updateGreeeting.bind(this)} />
      </div>

        </header>
      </div>
      <div>
        <h2><u><strong>Good Robot</strong></u></h2>
        <p>I hear you saying {this.state.greeting}, Is that correct?</p>
      </div>
      <div>
        <h2><u><strong>Bad Robot</strong></u></h2>
        
        <p>I hear you saying <BadRobot name2= {this.state.greeting} />, Is that correct?</p>
      </div>
      <div>
        <h2><u><strong>Kanyebot 5000</strong></u></h2>
      </div>
    </div>

    );
  }
}

export default App;
