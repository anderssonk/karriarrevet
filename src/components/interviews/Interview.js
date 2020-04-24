import React from "react";
import pic from "../filip.png";

const Interview = (name, img, answers) => {
	return (
		<>
			<div className="interview">
				<div className="interview__section q-and-a">
					<p>
						<b>Hur kommer det sig att du valde en maskros?</b>
						<p>Den smakade bättre än de andra blommorna </p>
					</p>
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
