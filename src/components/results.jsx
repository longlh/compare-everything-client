import React from 'react';
import PureComponent from './pure-component';
import {connect} from 'react-redux';
import Winner from './winner';
import * as actionCreators from '../action-creators';

class Results extends PureComponent {
	constructor(props) {
		super(props);
	}
	getPair() {
		return this.props.pair || [];
	}
	getVotes(entry) {
		if (this.props.tally && this.props.tally.has(entry)) {
			return this.props.tally.get(entry);
		}

		return 0;
	}
	render() {
		return (
			this.props.winner ?
			<Winner ref="winner" winner={this.props.winner} /> :
			<div className="results">
				<div className="tally">
					{this.getPair().map(entry =>
						<div key={entry} className="entry">
							<h1>{entry}</h1>
							<div className="voteCount">
								<span>{this.getVotes(entry)}</span>
							</div>
						</div>
					)}
				</div>
				<div className="management">
					<button ref="next" className="next"
						onClick={this.props.next}>
						<span>Next</span>
					</button>
				</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return {
		pair: state.getIn(['vote', 'pair']),
		tally: state.getIn(['vote', 'tally']),
		winner: state.get('winner')
	};
}

const ResultsContainer = connect(
	mapStateToProps,
	actionCreators
)(Results);

export {
	Results,
	ResultsContainer
}
