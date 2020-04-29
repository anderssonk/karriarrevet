import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Redirect,
	Route,
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Electables from "./components/electables/Electables";
import Programmes from "./components/programmes/Programmes";
import "./App.css";
import "./typography.css";

window.addEventListener("scroll", function () {
	if (document.documentElement.scrollTop > 40) {
		document.getElementById("header").classList.add("nav-up");
	} else {
		document.getElementById("header").classList.remove("nav-up");
	}
});

function App() {
	return (
		<div className="App">
			<div className="overlay">
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
					<Footer></Footer>
				</Router>
			</div>
		</div>
	);
}

export default App;
