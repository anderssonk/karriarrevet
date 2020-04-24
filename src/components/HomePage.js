import React from "react";
// import logo from "../digitala-karriarrevet.svg";
import Button from "./button/Button";
import Header from "./Header";

const HomePage = ({ history }) => {
	return (
		<div className="container overlay">
			<div className="start-container">
				{/* <img className="App-logo" src={logo} alt="logo" /> */}
				<h1>Digitala Karriärrevet</h1>
				<div className="start-info">
					<div className="start-info__section">
						<Button special onClick={() => history.push("/electables")}>
							Valbara kurser
						</Button>
					</div>
					<div className="start-info__section">
						<Button special onClick={() => history.push("/programmes")}>
							Masterprogrammen
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
