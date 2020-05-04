import React from "react";

const Interview = ({ name, programme, img, questions, answers, bonus }) => {
	return (
		<>
			<div className="interview">
				<div className="interview__section q-and-a">
					{questions.map((question, index) => (
						<span>
							<b>{question}</b>
							<p>{answers[index]}</p>
						</span>
					))}
					<div>
						<p>
							<b>Bonusfråga: {bonus[0]}</b>
						</p>
						<p>{bonus[1]}</p>
					</div>
				</div>
				<div className="interview__section interviewee">
					<img id={img} src={require(`../../images/${img}`)} alt={name}></img>
					<h5>{name}</h5>
					<h6>{programme}</h6>
				</div>
			</div>
		</>
	);
};

export default Interview;
