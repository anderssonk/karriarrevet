import React from "react";
import Response from "../interviews/Response";

const Course = ({ course, questions }) => {
	const { name, id, responses } = course;

	return (
		course &&
		questions && (
			<>
				<div className="content-container" id={id}>
					<h3>{name}</h3>
					{responses.map((response) => (
						<Response
							name={response.name}
							img={response.img}
							questions={Object.values(questions)}
							answers={Object.values(response.answers)}
						/>
					))}
				</div>
			</>
		)
	);
};

export default Course;
