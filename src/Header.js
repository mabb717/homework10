import React, { Component } from 'react'

import './css/Header.css'

class Header extends Component {
	render() {
		return (
			<div className="header">
				{/* <img src={logo} className="logo" alt="logo" /> */}
				<h1>Pirate's Life</h1>
			</div>
			)
	}
}

export default Header;