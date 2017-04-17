import React, { Component } from 'react';
import './css/Pirate.css'

class Pirate extends Component {
  render() {
    return (
    		<h3>{this.props.tagline}</h3>
    	)
  }
}

export default Pirate;