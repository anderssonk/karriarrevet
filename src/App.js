import React from "react";
import About from "./components/About";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import "./App.css";

function App() {
	return (
		<div className="App">
			{/* <Header /> */}
			<HomePage />
			<About />
		</div>
	);
}

export default App;
