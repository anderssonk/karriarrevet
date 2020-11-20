import React from 'react';

const QuestionCard = ({ question, answer }) => {
	return (
		<>
			<div className='question'>{question}</div>
			<div className='answer'>{answer}</div>
		</>
	);
};

export default QuestionCard;
