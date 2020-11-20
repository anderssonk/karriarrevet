import React from 'react';
import QuestionCard from './QuestionCard';

const Interview = ({
	name,
	programme,
	track,
	img,
	questions,
	answers,
	bonus,
}) => {
	return (
		<>
			<div className='interview'>
				<div className='interview__section interviewee'>
					<img id={img} src={require(`../../images/${img}`)} alt={name}></img>
					<h5>{name}</h5>
					<h6>{track}</h6>
				</div>
				<div className='vl' />
				<div className='interview__section q-and-a'>
					{questions.map((question, index) => (
						<>
							<QuestionCard question={question} answer={answers[index]} />
						</>
					))}
					<QuestionCard question={bonus[0]} answer={bonus[1]} />
				</div>
			</div>
		</>
	);
};

export default Interview;
