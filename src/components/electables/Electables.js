import React from "react";
import Button from "../button/Button";
import { courses, questions } from "../../data/electables.json";
import Course from "./Course";

const Electables = ({ history }) => {
	return (
		<div className="container" id="#electables">
			<div className="start-container">
				{/* <img className="App-logo" src={logo} alt="logo" /> */}
				<h2>Valbara kurser</h2>
				<div className="start-info">
					<div className="start-info__section">
						<a href="#DH2642">
							<Button special>iProg:EN</Button>
						</a>
					</div>
					<div className="start-info__section">
						<a href="#DM2518">
							<Button special>Mobilutvecklingen</Button>
						</a>
					</div>
					<div className="start-info__section">
						<a href="#DD2352">
							<Button special>Algkomp:en</Button>
						</a>
					</div>
				</div>
				<div className="start-info">
					<div className="start-info__section">
						<a href="#SF1662">
							<Button special>Diskmatten</Button>
						</a>
					</div>

					<div className="start-info__section">
						<a href="#DD1385">
							<Button special>prutten</Button>
						</a>
					</div>
				</div>
			</div>
			{courses.map((course) => (
				<Course key={course.name} course={course} questions={questions} />
			))}
		</div>
	);
};

export default Electables;
