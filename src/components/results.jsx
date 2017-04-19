import React from 'react';
import PureComponent from './pure-component';

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
			<div className="results">
				{this.getPair().map(entry =>
					<div key={entry} className="entry">
						<h1>{entry}</h1>
						<div className="voteCount">
							<span>{this.getVotes(entry)}</span>
						</div>
					</div>
				)}
			</div>
		);
	}
}

export default Results;
