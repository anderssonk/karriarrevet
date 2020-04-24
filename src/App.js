import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Redirect,
	Route,
} from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Electables from "./components/electables/Electables";
import Programmes from "./components/programmes/Programmes";
import "./App.css";
import "./typography.css";

function App() {
	return (
		<div className="App">
			<Router>
				<Header></Header>
				<Switch>
					<Redirect exact from="/" to="/home" />
					<Route path="/home" render={(props) => <HomePage {...props} />} />
					<Route
						path="/electables/"
						render={(props) => <Electables {...props} />}
					/>
					<Route
						path="/programmes/"
						render={(props) => <Programmes {...props} />}
					/>
				</Switch>
			</Router>
			<div></div>
		</div>
	);
}

export default App;
