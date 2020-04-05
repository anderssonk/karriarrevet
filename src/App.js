import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Redirect,
	Route,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import Electables from "./components/electables/Electables";
import Programmes from "./components/programmes/Programmes";
import "./App.css";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Redirect exact from="/" to="/home" />
					<Route path="/home" render={(props) => <HomePage {...props} />} />
					<Route
						path="/electables/:course"
						render={(props) => <Electables {...props} />}
					/>
					<Route
						path="/programmes/:programme"
						render={(props) => <Programmes {...props} />}
					/>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
