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
							<Button special>iProg:EN</Button>
						</a>
					</div>
					<div className="start-info__section">
						<a href="#blabla">
							<Button special>Mobilutvecklingen</Button>
						</a>
					</div>
				</div>
				<div className="start-info">
					<div className="start-info__section">
						<a href="#blabla">
							<Button special>Diskmatten</Button>
						</a>
					</div>
					<div className="start-info__section">
						<a href="#blabla">
							<Button special>Algen</Button>
						</a>
					</div>
					<div className="start-info__section">
						<a href="#blabla">
							<Button special>prutten</Button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Electables;
