import React from 'react';
import ReactDOM from 'react-dom';
import Voting from './components/voting';

const pair = [
	'Trainspotting',
	'28 Day Laters'
];

ReactDOM.render(
	<Voting pair={pair} />,
	document.getElementById('app')
);
