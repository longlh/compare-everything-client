import React from 'react';
import PureComponent from './pure-component';
import {connect} from 'react-redux';
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

function mapStateToProps(state) {
	return {
		pair: state.getIn(['vote', 'pair']),
		winner: state.get('winner')
	};
}

const VotingContainer = connect(mapStateToProps)(Voting)

export {
	Voting,
	VotingContainer
}
