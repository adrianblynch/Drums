import React, { Component } from 'react'
import classNames from 'classnames'
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
			],
			showOptions: false
		}
	}

	handleChange = (e) => {

		const { name, value } = e.target

		this.state.drums.forEach(drum => {
			if (drum.type === name) {
				drum.hotKey = value
			}
			// Yeah, not ideal but it works and I'm about to go to bed!
			this.forceUpdate()
		})
	}

	handleClick = () => {
		this.setState({ showOptions: !this.state.showOptions })
	}

	render() {

		const { showOptions } = this.state
		const optionsClasses = classNames('drums__options', { 'drums__option--hidden': !showOptions })

		return (
			<div>
				<div className="drums">
					{ this.state.drums.map(drum => <Drum key={ drum.type } { ...drum } />) }
				</div>

				<hr />

				<div className="drums__show-options" onClick={ this.handleClick }>
					Options <span>{ showOptions ? '➖' : '➕' }</span>
				</div>

				<div className={ optionsClasses }>
					{
						this.state.drums.map(drum =>
							<div className="drums__option" key={ drum.type }>
								<label>{ drum.type }</label>
								<input
									name={ drum.type }
									onChange={ this.handleChange }
									defaultValue={ drum.hotKey }
									maxLength="1"
								/>
							</div>
						)
					}
				</div>
			</div>
		)
	}
}
