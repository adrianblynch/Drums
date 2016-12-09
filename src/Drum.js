import React from 'react'
import classNames from 'classnames'

export default class Drum extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			shaking: false
		}
	}

	play = () => {

		const { type } = this.props
		const audio = new Audio(`/sounds/${type}.wav`)

		audio.addEventListener('ended', () => {
			audio.currentTime = 0
			this.setState({ shaking: false })
		})
		audio.play()

		this.setState({ shaking: true })
	}

	handleClick = () => {
		this.play()
	}

	handleKeyDown = (e) => {

		const { hotKey } = this.props

		if (e.keyCode === hotKey.charCodeAt()) {
			this.play()
		}
	}

	/*
		Ideally we'd do this in the parent Drum component but I'm struggling with a sane
		way to get the event into the child and play the audio - A problem for another time
	*/
	componentWillMount() {
		document.addEventListener('keypress', this.handleKeyDown, false)
	}

	componentWillUnmount() {
		document.removeEventListener('keypress', this.handleKeyDown, false)
	}

	render() {

		console.log(JSON.stringify(this.state, null, 2))

		const { type, shake } = this.props
		const { shaking } = this.state
		const classes = classNames('drum', {
			[`shake shake-${shake}`]: shaking
		})

		return (
			<div
				className={ classes }
				onClick={ this.handleClick }
				onKeyDown={ this.handleKeyDown }
			>
				{ type }
			</div>
		)
	}
}
