import React from "react";
import logo from "../digitala-karriarrevet.svg";
import Button from "./button/Button";

const HomePage = () => {
	return (
		<div className="start-container">
			<img className="App-logo" src={logo} alt="logo" />
			<div className="start-info">
				<div className="start-info__section">
					<Button special>Valbara kurser</Button>
				</div>
				<div className="start-info__section">
					<Button special>Masterprogrammen</Button>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
