import React from "react";
import Header from "../Header";
import Button from "../button/Button";
import Datalogi from "./Datalogi";
import Interkativ from "./Interkativ";

const Programmes = ({ history }) => {
	return (
		<div className="container">
			<div className="start-container">
				{/* <img className="App-logo" src={logo} alt="logo" /> */}
				<h2>Masterprogrammen</h2>
				<div className="start-info">
					<div className="start-info__section">
						<a href="#datalogi">
							<Button special>Datalogi</Button>
						</a>
					</div>
					<div className="start-info__section">
						<a href="#interaktiv">
							<Button special>Interaktiv medieteknik</Button>
						</a>
					</div>
					<div className="start-info__section">
						<a href="#maskin">
							<Button special>Maskininlärning</Button>
						</a>
					</div>
				</div>
			</div>
			<Datalogi></Datalogi>
			<Interkativ></Interkativ>
		</div>
	);
};

export default Programmes;
