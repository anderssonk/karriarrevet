import React from "react";
import Interview from "../interviews/Interview";
import data from "../../data/programmes.json";

const persons = data.persons.filter(
	(person) =>
		person.name === "Fanny" ||
		person.name === "Filip" ||
		person.name === "Linnéa" ||
		person.name === "Martin"
);

const questions = data.questions;

const Interaktiv = () => {
	return (
		<div className="content-container" id="interaktiv-medieteknik">
			<h3>Interaktiv Medieteknik</h3>
			{persons.map((person) => (
				<Interview
					key={person.name}
					name={person.name}
					programme={person.programme}
					img={person.img}
					questions={Object.values(questions)}
					answers={Object.values(person.answers)}
					bonus={person.bonus}
				/>
			))}
		</div>
	);
};

export default Interaktiv;
