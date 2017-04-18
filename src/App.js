import React, { Component } from 'react'
//named import called "Component" from react
import Pirate from './Pirate'
//this is our own component we've created
import Header from './Header'
import PirateForm from './PirateForm'
import base from './base'
import piratesFile from './data/sample-pirates'


class App extends Component {

//constructor function mandatory for extending
constructor() {
    super(); //need to call since you're extending
    // console.log(this) // App
    this.addPirate = this.addPirate.bind(this)
    this.loadSamples = this.loadSamples.bind(this)
    this.removePirate = this.removePirate.bind(this)
    this.state = {
      pirates: {}
    }
    // console.log(this.addPirate) 
  }

  componentWillMount(){
    this.ref = base.syncState('michael-tabb-pirates/pirates', {
      context: this,
      state: 'pirates'
    })
  }

  componentWillUmount(){
    base.removeBinding(this.ref)
  }

  removePirate(key){
    const pirates = {...this.state.pirates}
    pirates[key] = null
    this.setState({pirates})
  }

  loadSamples(){
    this.setState({
      pirates: piratesFile
    })
  }

  addPirate(pirate){
    //update state
    const pirates = {...this.state.pirates}
    //add new pirate
    const timestamp = Date.now()
    pirates[`pirate-${timestamp}`] = pirate
    //set state
    this.setState({ pirates: pirates }) //:pirates not necessary (this is the verbose form)
  }

  render() {
    return (
      <div className="App">
      <Header />
      {
        Object.keys(this.state.pirates)
        .map(key => <Pirate key={key} 
          index={key}
          details={this.state.pirates[key]}
          removePirate={this.removePirate} />)
      }

      <PirateForm 
      addPirate={this.addPirate}
      loadSamples={this.loadSamples}
      />
      </div>
      );
  }
}

export default App;







