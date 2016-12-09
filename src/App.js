import React, { Component } from 'react'
import { BrowserRouter, Match, Link } from 'react-router'
import Drums from './Drums'

export default class App extends Component {

	render() {
		return (
			<BrowserRouter>
				<div>
					<ul>
						<li><Link to="drums">Drums</Link></li>
					</ul>
					<Match pattern="*drums" component={ Drums } />
				</div>
			</BrowserRouter>
		)
	}
}
