import React from "react";
import Button from "../button/Button";
import Datalogi from "./Datalogi";
import Interkativ from "./Interkativ";

const Programmes = ({ history }) => {
	return (
		<div className="container">
			<div className="start-container">
				<h2>Masterprogram</h2>
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
