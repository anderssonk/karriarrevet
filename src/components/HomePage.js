import React from "react";
// import logo from "../digitala-karriarrevet.svg";
import Button from "./button/Button";

const HomePage = ({ history }) => {
	return (
		<div className="start-container">
			<h1>Digitala Karriärrevet</h1>
			<div className="start-info">
				<div className="start-info__section">
					<Button special onClick={() => history.push("/electables")}>
						Valbara kurser
					</Button>
				</div>
				<div className="start-info__section">
					<Button special onClick={() => history.push("/programmes")}>
						Masterprogram
					</Button>
				</div>
			</div>
		</div>
	);
};

export default HomePage;
