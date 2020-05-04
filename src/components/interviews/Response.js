import React from "react";

const Response = ({ name, img, questions, answers }) => {
	console.log(name);
	return (
		<div className="interview">
			<div className="interview__section q-and-a">
				{questions.map((question, index) => (
					<span>
						<b>{question}</b>
						<p>{answers[index]}</p>
					</span>
				))}
			</div>
			<div className="interview__section interviewee">
				<img id={img} src={require(`../../images/${img}`)} alt={name}></img>
				<h5>{name}</h5>
			</div>
		</div>
	);
};

export default Response;
