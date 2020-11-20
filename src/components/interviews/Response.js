import React from 'react';
import QuestionCard from './QuestionCard';

const Response = ({ name, img, questions, answers }) => {
	return (
		<div className='interview'>
			<div className='interview__section interviewee'>
				<img id={img} src={require(`../../images/${img}`)} alt={name}></img>
				<h5>{name}</h5>
			</div>
			<div className='vl' />
			<div className='interview__section q-and-a'>
				{questions.map((question, index) => (
					<QuestionCard question={question} answer={answers[index]} />
				))}
			</div>
		</div>
	);
};

export default Response;
