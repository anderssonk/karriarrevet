import React from "react";
import "./button.css";

const setType = (type) => {
	switch (type) {
		case "primary":
			return "btn-primary";
		case "secondary":
			return "btn-secondary";
		case "tertiary":
			return "btn-tertiary";
		default:
			return "btn-primary";
	}
};

const Button = ({ type, children, onClick, special }) => {
	const specialBtn = (
		<button className="btn special" onClick={onClick}>
			{children}
		</button>
	);

	if (special) return specialBtn;
	return (
		<button className={`btn ${setType(type)}`} onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
