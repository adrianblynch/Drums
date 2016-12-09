import React, { Component } from 'react'
import Drum from './Drum'
import './Drums.css'

export default class App extends Component {

	constructor(props) {
		super(props);

		this.state = {
			drums: [
				{ type: 'boom',    shake: 'hard',       hotKey: 'a' },
				{ type: 'clap',    shake: 'slow',       hotKey: 'b' },
				{ type: 'hihat',   shake: 'little',     hotKey: 'c' },
				{ type: 'kick',    shake: 'horizontal', hotKey: 'd' },
				{ type: 'openhat', shake: 'vertical',   hotKey: 'e' },
				{ type: 'ride',    shake: 'rotate',     hotKey: 'f' },
				{ type: 'snare',   shake: 'opacity',    hotKey: 'g' },
				{ type: 'tink',    shake: 'crazy',      hotKey: 'h' },
				{ type: 'tom',     shake: 'hard',       hotKey: 'i' }
			]
		}
	}

	render() {

		return (
			<div className="drums">
				{ this.state.drums.map(drum => <Drum key={ drum.type } { ...drum } />) }
			</div>
		)
	}
}
