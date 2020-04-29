import React from "react";
import Interview from "../interviews/Interview";
import data from "../../data/data.json";

const persons = data.persons.filter(
	(person) =>
		person.name === "Filip" || person.name === "Linnéa" || person.name === "My"
);

const questions = data.questions;

const Interkativ = () => {
	return (
		<div className="content-container" id="interaktiv-medieteknik">
			<h3>Interkativ Medieteknik</h3>
			{persons.map((person) => (
				<Interview
					name={person.name}
					programme={person.programme}
					img={person.img}
					questions={Object.values(questions)}
					answers={Object.values(person.answers)}
				/>
			))}
		</div>
	);
};

export default Interkativ;
