import React from 'react';
import ReactDOM from 'react-dom';
import {
	Router,
	Route,
	hashHistory
} from 'react-router';
import {
	createStore,
	applyMiddleware
} from 'redux';
import {Provider} from 'react-redux';
import io from 'socket.io-client';
import reducer from './reducer';
import {setState} from './action-creators';
import remoteActionMiddleware from './remote-action-middleware';
import App from './components/app';
import {ResultsContainer} from './components/results';
import {VotingContainer} from './components/voting';

const socket = io(`${location.protocol}//${location.hostname}:8090`);

const createStoreWithMiddleware = applyMiddleware(
	remoteActionMiddleware(socket)
)(createStore);
const store = createStoreWithMiddleware(reducer);

socket.on('state', state => {
	console.log(state);
	store.dispatch(setState(state));
});

const routes = (
	<Route component={App}>
		<Route path="/results" component={ResultsContainer} />
		<Route path="/" component={VotingContainer} />
	</Route>
);

ReactDOM.render(
	<Provider store={store}>
		<Router history={hashHistory}>{routes}</Router>
	</Provider>,
	document.getElementById('app')
);
