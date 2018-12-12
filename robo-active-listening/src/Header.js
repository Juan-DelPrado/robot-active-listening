import React, { Component } from 'react'

class Header extends Component {
  render() {
    return (
      <h1>Say Something {this.props.name1} </h1>
    );
  }
}

export default Header;
