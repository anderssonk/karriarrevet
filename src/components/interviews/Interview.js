import React from "react";

const Interview = ({ name, programme, img, questions, answers }) => {
	return (
		<>
			<div className="interview">
				<div className="interview__section q-and-a">
					{questions.map((question, index) => (
						<p>
							<b>{question}</b>
							<p>{answers[index]} </p>
						</p>
					))}
				</div>
				<div className="interview__section interviewee">
					<img id={img} src={require(`../../data/${img}`)} alt={name}></img>
					<h5>{name}</h5>
					<h6>{programme}</h6>
				</div>
			</div>
		</>
	);
};

export default Interview;
