import React, { Component } from 'react';

class BadRobot extends Component {

  translate(greeting) {
  var bla= greeting.split('').map((v,i) => {
    if (i%2 ===0){
      return 'b'
    } else if (i%2 ===1){
      return 'l'
    } else if (i%2 ===2){
      return 'a'
    } else {

    }
  })
    return bla.join('')
}


  render() {
    return (
      <p>{this.translate(this.props.name2)} </p>
      );
    }
  }

export default BadRobot;
