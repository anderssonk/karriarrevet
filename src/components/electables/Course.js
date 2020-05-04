import React from "react";
import Response from "../interviews/Response";
import data from "../../data/electables.json";

const Course = ({ course }) => {
	console.log("course", course);
	const { name, id, responses } = course;
	return (
		data && (
			<>
				<div className="content-container" id={id}>
					<h3>{name}</h3>
					{responses.map((e) => (
						<Response />
					))}
				</div>
			</>
		)
	);
};

export default Course;
