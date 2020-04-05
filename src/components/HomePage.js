import React from "react";
import logo from "../digitala-karriarrevet.svg";
import Button from "./button/Button";
import Header from "./Header";

const HomePage = () => {
	return (
		<div className="container overlay">
			<Header></Header>
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
		</div>
	);
};

export default HomePage;
