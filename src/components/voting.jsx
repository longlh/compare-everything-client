import React from 'react';
import PureComponent from './pure-component';
import Winner from './winner';
import Vote from './vote';

class Voting extends PureComponent {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				{this.props.winner ?
					<Winner ref="winner" winner={this.props.winner} /> :
					<Vote {...this.props} />
				}
			</div>
		);
	}
}

export default Voting;
