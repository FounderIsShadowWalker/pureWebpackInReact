import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

// import App from './src/App';

// import './node_modules/normalize.css/normalize.css';
// // import './css/global.css'

function App() {
    return <div>App</div>
}

function About() {
    return <div>About</div>
}

function Repos() {
    return <div>Repos</div>
}


render((<Router history={hashHistory}>
    <Route path="/" component={App} />
    <Route path="/repos" component={Repos} />
    <Route path="/about" component={About} />
</Router>), document.querySelector('#root'));
