import React from "react";
import pic from "../filip.png";

const Interview = (name, img, answers) => {
	return (
		<>
			<div className="interview">
				<div className="interview__section q-and-a">
					det här är en interview__section
				</div>
				<div className="interview__section interviewee">
					<img id={pic} src={pic} alt={pic}></img>
					<h5>Filip</h5>
					<h6>Interaktiv Medieteknik, visuella spåret</h6>
				</div>
			</div>
		</>
	);
};

export default Interview;
