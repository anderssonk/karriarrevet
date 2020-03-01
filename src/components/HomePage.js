import React from "react";
import logo from "../digitala-karriarrevet.svg";
import scrollButton from "../scroll-down.svg";

const HomePage = () => {
	return (
		<div className="start-container">
			<img className="App-logo" src={logo} alt="logo" />
			<div className="start-info">
				<div className="start-info__section">April 2020</div>
				<div className="start-info__section"> | </div>
				<div className="start-info__section">
					Arrangerat av <b>NLG</b>
				</div>
			</div>
			<div className="btn btn-icon">
				<img src={scrollButton} alt="scroll button" />
			</div>
		</div>
	);
};

export default HomePage;
