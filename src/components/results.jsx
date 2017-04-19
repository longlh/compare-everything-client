import React from 'react';
import PureComponent from './pure-component';
import Winner from './winner';

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

export default Results;
