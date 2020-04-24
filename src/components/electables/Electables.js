import React from "react";
import Button from "../button/Button";

const Electables = ({ history }) => {
	return (
		<div className="container" id="#electables">
			<div className="start-container">
				{/* <img className="App-logo" src={logo} alt="logo" /> */}
				<h2>Valbara kurser</h2>
				<div className="start-info">
					<div className="start-info__section">
						<a href="#blabla">
							<Button special>XML för publicering</Button>
						</a>
					</div>
					<div className="start-info__section">
						<a href="#blabla">
							<Button special>Interaktionsprogrammering</Button>
						</a>
					</div>
					<div className="start-info__section">
						<a href="#blabla">
							<Button special>Mobilutvecklingstekniken</Button>
						</a>
					</div>
				</div>
				<div className="start-info">
					<div className="start-info__section">
						<a href="#blabla">
							<Button special>Diskret matematik</Button>
						</a>
					</div>
					<div className="start-info__section">
						<a href="#blabla">
							<Button special>Algoritmer och komplexitet</Button>
						</a>
					</div>
					<div className="start-info__section">
						<a href="#blabla">
							<Button special>Programutvecklingsteknik</Button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Electables;
