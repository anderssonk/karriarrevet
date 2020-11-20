import React from 'react';
import Interview from '../interviews/Interview';
import data from '../../data/programmes.json';

const persons = data.persons.filter(
	(person) =>
		person.name === 'Felix' || person.name === 'Emma' || person.name === 'My'
);

const questions = data.questions;

const Datalogi = () => {
	return (
		<>
			<div className='content-container' id='datalogi'>
				<h3 className='id'>TCSCM</h3>
				<h3>Datalogi</h3>
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

export default Datalogi;
