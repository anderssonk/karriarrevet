import React from "react";
import img from "./coral-reef.jpg";
import logo from "../../digitala-karriarrevet.png";

const HomePage = () => {
	return (
		<div className="App-content App-home">
			<img className="App-logo" src={logo} alt="logo" />
			<img className="App-background-img" src={img} alt="coral reef" />
		</div>
	);
};

export default HomePage;
