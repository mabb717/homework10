import React, { Component } from 'react';
import AddPirateForm from './AddPirateForm'

class PirateForm extends Component {
	render() {
		return (
			<div className="pirate-form">
				<h3>Pirate Forms</h3>
				<AddPirateForm />
			</div>
			)
	}
}

export default PirateForm;