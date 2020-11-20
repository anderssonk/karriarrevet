import React from 'react';
import Response from '../interviews/Response';

const Course = ({ course, questions }) => {
	const { name, id, responses } = course;

	return (
		course &&
		questions && (
			<div className='content-container' id={id}>
				<h3 className='id'>{id}</h3>
				<h3>{name}</h3>
				{responses.map((response, i) => (
					<>
						<Response
							key={response.name}
							name={response.name}
							img={response.img}
							questions={Object.values(questions)}
							answers={Object.values(response.answers)}
						/>
						{/* {i !== responses.length - 1 && <div className='circle' />} */}
					</>
				))}
			</div>
		)
	);
};

export default Course;
