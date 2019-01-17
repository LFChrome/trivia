import React, { Component } from 'react';

export class Title extends Component {
	render(title) {
		return (
			<h1>{this.props.title}</h1>
		)
	}
}