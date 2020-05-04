import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Redirect,
	Route,
} from "react-router-dom";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import Electables from "./components/electables/Electables";
import Programmes from "./components/programmes/Programmes";
import Button from "./components/button/Button";
import "./css/App.css";
import "./css/typography.css";

window.addEventListener("scroll", function () {
	if (document.documentElement.scrollTop > 40) {
		document.getElementById("header").classList.add("nav-up");
	} else {
		document.getElementById("header").classList.remove("nav-up");
	}
});

window.addEventListener("scroll", function () {
	if (document.documentElement.scrollTop > 700) {
		document.getElementById("topBtn").classList.add("topBtn-show");
	} else {
		document.getElementById("topBtn").classList.remove("topBtn-show");
	}
});

function App() {
	return (
		<div className="App">
			<div className="overlay" id="top">
				<Router>
					<Header></Header>
					<Switch>
						<Redirect exact from="/" to="/home" />
						<Route path="/home" render={(props) => <HomePage {...props} />} />

						<Route
							path="/electables"
							render={(props) => <Electables {...props} />}
						/>
						<Route
							path="/programmes"
							render={(props) => <Programmes {...props} />}
						/>
						<Route path="/about" render={(props) => <About {...props} />} />
					</Switch>

					<Footer></Footer>
				</Router>
			</div>
			<a href="#top">
				<Button type="topBtn" id="topBtn">
					^
				</Button>
			</a>
		</div>
	);
}

export default App;
