import React from 'react';
import PureComponent from './pure-component';

class Winner extends PureComponent {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="winner">
				<span>Winner is {this.props.winner}!</span>
			</div>
		);
	}
}

export default Winner;
