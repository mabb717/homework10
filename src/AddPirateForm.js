import React, { Component } from 'react'
import './css/AddPirateForm.css'

class AddPirateForm extends Component {

  createPirate(event){
    event.preventDefault()
    console.log('making a pirate')
    const pirate = {
      name: this.name.value,
      vessel: this.vessel.value,
      weapon: this.weapon.value
    }
    console.log(pirate)
  }

  render(){
    return (
      <form onSubmit={ (e) => this.createPirate(e) }>
      <input ref={(input) => this.name = input } type="text" placeholder="Pirate name" />
      <input ref={(input) => this.vessel = input } type="text" placeholder="Pirate vessel" />
      <input ref={(input) => this.weapon = input } type="text" placeholder="Pirate weapon" />
      <button type="submit">Add Pirate</button>
      </form>
      )
  }
}

export default AddPirateForm