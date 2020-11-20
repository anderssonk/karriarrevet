import React from 'react';
import Interview from '../interviews/Interview';
import data from '../../data/programmes.json';

const persons = data.persons.filter((person) => person.name === 'Karolin');
const questions = data.questions;

const Ict = () => {
	return (
		<div className='content-container' id='ict'>
			<h3 className='programme-id'>TIVNM</h3>
			<h3>ICT Innovation</h3>
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

export default Ict;
