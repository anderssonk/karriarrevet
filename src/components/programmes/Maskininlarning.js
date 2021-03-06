import React from 'react';
import Interview from '../interviews/Interview';
import data from '../../data/programmes.json';

const persons = data.persons.filter((person) => person.name === 'Alexandra');

const questions = data.questions;

const Maskininlarning = () => {
	return (
		<>
			<div className='content-container' id='maskininlarning'>
				<h3 className='id'>TMAIM</h3>
				<h3>Maskininlärning</h3>

				{persons.map((person) => (
					<Interview
						key={person.name}
						name={person.name}
						programme={person.programme}
						track={person.track}
						img={person.img}
						questions={Object.values(questions)}
						answers={Object.values(person.answers)}
						bonus={person.bonus}
					/>
				))}
			</div>
		</>
	);
};

export default Maskininlarning;
