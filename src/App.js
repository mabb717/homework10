import React, { Component } from 'react'
import Pirate from './Pirate'
import Header from './Header'
import PirateForm from './PirateForm'

class App extends Component {

  constructor() {
    super();
    console.log(this) // App
    this.addPirate = this.addPirate.bind(this)
    this.state = {
      pirates: {}
    }
    console.log(this.addPirate) 
  }

  addPirate(pirate){
    //update state
    const pirates = {...this.state.pirates}
    //add new pirate
    const timestamp = Date.now()
    pirates[`pirate-${timestamp}`] = pirate
    //set state
    this.setState({ pirates: pirates })
  }

  render() {
    return (
      <div className="App">
      <Header />
      <Pirate tagline="Ahoy there matey!" />
      <PirateForm />
      </div>
      );
  }
}

export default App;







