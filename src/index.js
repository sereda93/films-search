import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin'
import {
	BrowserRouter as Router,
	Route
} from 'react-router-dom'
import App from './App'
import Movie from './components/Movie/Movie'
import Header from './components/Header/Header'
import './index.css'

injectTapEventPlugin();

ReactDOM.render((
		<Router>
			<MuiThemeProvider>
				<div>
					<Header />
					<Route exact path="/" component={App}/>
					<Route path="/:id" component={Movie}/>
				</div>
			</MuiThemeProvider>
		</Router>
), document.getElementById('root'));
