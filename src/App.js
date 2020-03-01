import React from "react";
import About from "./components/About";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";
import "./App.css";

function App() {
	return (
		<div className="App">
			{/* <Header /> */}
			<HomePage />
			<About />
			<Footer />
		</div>
	);
}

export default App;
