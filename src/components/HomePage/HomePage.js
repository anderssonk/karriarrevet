import React from "react";
import img from "./coral-reef.jpg";
import logo from "../../digitala-karriarrevet.png";

const HomePage = () => {
	return (
		<div className="App-content">
			<img className="logo" src={logo} alt="logo" />
			<img className="App-background-img" src={img} alt="coral reef" />
		</div>
	);
};

export default HomePage;
